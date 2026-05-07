const wikiContent = window.APLUS_WIKI_CONTENT || { pages: [] };
const pages = wikiContent.pages || [];
const pageBySlug = new Map(pages.map((page) => [page.slug, page]));

const topicTitle = document.querySelector("#wiki-topic-title");
const topicMeta = document.querySelector("#wiki-topic-meta");
const article = document.querySelector("#wiki-article");
const sequenceNav = document.querySelector("#wiki-sequence-nav");
const searchInput = document.querySelector("#wiki-search-input");
const statusGrid = document.querySelector("#wiki-status-grid");
const practiceLink = document.querySelector("#wiki-practice-link");
const railPracticeLink = document.querySelector("#wiki-rail-practice-link");
const labNote = document.querySelector("#wiki-lab-note");
const prevLink = document.querySelector("#wiki-prev-link");
const nextLink = document.querySelector("#wiki-next-link");
const pageOutline = document.querySelector("#wiki-page-outline");
const labShortcuts = document.querySelector("#wiki-lab-shortcuts");

let activeSlug = "";
let mermaidPromise = null;
let mermaidRenderCount = 0;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function topicUrl(slug) {
  return `wiki.html?topic=${encodeURIComponent(slug)}`;
}

function moduleUrl(moduleName) {
  return `index.html#module=${encodeURIComponent(moduleName || "start")}`;
}

function resolveHref(href) {
  if (/^https?:\/\//i.test(href)) return href;
  if (href.startsWith("../../app/index.html#module=")) {
    return href.replace("../../app/index.html", "index.html");
  }
  if (href.endsWith(".md")) {
    const slug = href.split("/").pop().replace(/\.md$/, "");
    if (pageBySlug.has(slug)) return topicUrl(slug);
  }
  return href;
}

function renderInline(text) {
  let html = "";
  let cursor = 0;
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match = linkPattern.exec(text);

  while (match) {
    html += escapeHtml(text.slice(cursor, match.index));
    const label = escapeHtml(match[1]);
    const href = resolveHref(match[2]);
    const external = /^https?:\/\//i.test(href);
    html += `<a href="${escapeHtml(href)}"${external ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`;
    cursor = match.index + match[0].length;
    match = linkPattern.exec(text);
  }

  html += escapeHtml(text.slice(cursor));
  return html.replace(/`([^`]+)`/g, "<code>$1</code>");
}

function buildHeadingId(text, usedIds) {
  const baseId = slugify(text) || "section";
  let id = baseId;
  let count = 2;
  while (usedIds.has(id)) {
    id = `${baseId}-${count}`;
    count += 1;
  }
  usedIds.add(id);
  return id;
}

function renderTable(lines) {
  const rows = lines
    .filter((line) => !/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line))
    .map((line) => line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim()));

  if (!rows.length) return "";

  const [headings, ...bodyRows] = rows;
  return `
    <div class="wiki-table-wrap">
      <table>
        <thead>
          <tr>${headings.map((heading) => `<th>${renderInline(heading)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${bodyRows.map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

async function loadMermaid() {
  if (window.mermaid) return window.mermaid;

  if (!mermaidPromise) {
    mermaidPromise = import("https://cdn.jsdelivr.net/npm/mermaid@11.14.0/dist/mermaid.esm.min.mjs")
      .then((module) => {
        const mermaid = module.default || module;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: "base",
          themeVariables: {
            primaryColor: "#e7f0ff",
            primaryTextColor: "#162033",
            primaryBorderColor: "#0b63ce",
            lineColor: "#35577f",
            secondaryColor: "#e6f6ef",
            tertiaryColor: "#fff7df",
            fontFamily: "Arial, Helvetica, sans-serif"
          }
        });
        window.mermaid = mermaid;
        return mermaid;
      });
  }

  return mermaidPromise;
}

async function renderMermaidDiagrams() {
  const cards = Array.from(document.querySelectorAll(".mermaid-card"));
  if (!cards.length) return;
  const renderSlug = activeSlug;

  let mermaid;
  try {
    mermaid = await loadMermaid();
  } catch (error) {
    cards.forEach((card) => {
      const stage = card.querySelector(".mermaid-stage");
      stage.innerHTML = `<p class="diagram-error">Diagram renderer could not load. Source is shown below.</p>`;
      card.classList.add("diagram-failed");
    });
    return;
  }

  for (const card of cards) {
    const source = decodeURIComponent(card.dataset.mermaidSource || "");
    const stage = card.querySelector(".mermaid-stage");
    const diagramId = `wiki-mermaid-${renderSlug}-${mermaidRenderCount}`;
    mermaidRenderCount += 1;

    try {
      const { svg } = await mermaid.render(diagramId, source);
      stage.innerHTML = svg;
      card.classList.add("diagram-rendered");
    } catch (error) {
      stage.innerHTML = `<p class="diagram-error">Diagram could not render. Source is shown below.</p>`;
      card.classList.add("diagram-failed");
    }
  }
}

function renderMarkdown(markdown) {
  const lines = String(markdown || "").split(/\r?\n/);
  const html = [];
  const headings = [];
  const usedIds = new Set();
  let paragraph = [];
  let listType = "";
  let inCode = false;
  let codeLanguage = "";
  let codeLines = [];
  let tableLines = [];

  function flushParagraph() {
    if (!paragraph.length) return;
    html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
    paragraph = [];
  }

  function closeList() {
    if (!listType) return;
    html.push(`</${listType}>`);
    listType = "";
  }

  function openList(type, className = "") {
    if (listType === type) return;
    closeList();
    html.push(`<${type}${className ? ` class="${className}"` : ""}>`);
    listType = type;
  }

  function flushTable() {
    if (!tableLines.length) return;
    html.push(renderTable(tableLines));
    tableLines = [];
  }

  function flushCode() {
    const source = codeLines.join("\n");
    const code = escapeHtml(source);
    if (codeLanguage === "mermaid") {
      html.push(`
        <figure class="mermaid-card" data-mermaid-source="${encodeURIComponent(source)}">
          <div class="mermaid-stage" role="img" aria-label="Rendered diagram">Rendering diagram...</div>
          <details class="mermaid-source">
            <summary>Diagram source</summary>
            <pre><code>${code}</code></pre>
          </details>
        </figure>
      `);
    } else {
      html.push(`<pre><code>${code}</code></pre>`);
    }
    codeLines = [];
    codeLanguage = "";
  }

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      if (inCode) {
        flushCode();
        inCode = false;
      } else {
        flushParagraph();
        closeList();
        flushTable();
        inCode = true;
        codeLanguage = trimmed.replace(/^```/, "").trim().toLowerCase();
      }
      return;
    }

    if (inCode) {
      codeLines.push(line);
      return;
    }

    if (!trimmed) {
      flushParagraph();
      closeList();
      flushTable();
      return;
    }

    if (/^\|.+\|$/.test(trimmed)) {
      flushParagraph();
      closeList();
      tableLines.push(trimmed);
      return;
    }

    flushTable();

    const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      closeList();
      const level = Math.min(headingMatch[1].length, 3);
      const text = headingMatch[2].trim();
      const id = buildHeadingId(text, usedIds);
      headings.push({ level, text, id });
      html.push(`<h${level} id="${id}">${renderInline(text)}</h${level}>`);
      return;
    }

    const checklistMatch = trimmed.match(/^-\s+\[([ xX])\]\s+(.+)$/);
    if (checklistMatch) {
      flushParagraph();
      openList("ul", "checklist");
      const mark = checklistMatch[1].toLowerCase() === "x" ? "x" : "";
      html.push(`<li><span class="checkmark" aria-hidden="true">${mark}</span><span>${renderInline(checklistMatch[2])}</span></li>`);
      return;
    }

    const bulletMatch = trimmed.match(/^-\s+(.+)$/);
    if (bulletMatch) {
      flushParagraph();
      openList("ul");
      html.push(`<li>${renderInline(bulletMatch[1])}</li>`);
      return;
    }

    const numberMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (numberMatch) {
      flushParagraph();
      openList("ol");
      html.push(`<li>${renderInline(numberMatch[1])}</li>`);
      return;
    }

    paragraph.push(trimmed);
  });

  flushParagraph();
  closeList();
  flushTable();

  if (inCode) flushCode();

  return { html: html.join("\n"), headings };
}

function requestedSlug() {
  const params = new URLSearchParams(window.location.search);
  const topic = params.get("topic");
  if (topic && pageBySlug.has(topic)) return topic;
  const hashTopic = window.location.hash.replace(/^#topic=/, "");
  if (hashTopic && pageBySlug.has(hashTopic)) return hashTopic;
  return pages[0]?.slug || "";
}

function groupedPages(filter = "") {
  const normalizedFilter = filter.trim().toLowerCase();
  const visiblePages = normalizedFilter
    ? pages.filter((page) => [
      page.topic,
      page.group,
      page.comptia_area,
      page.practice_action
    ].join(" ").toLowerCase().includes(normalizedFilter))
    : pages;

  return visiblePages.reduce((groups, page) => {
    if (!groups.has(page.group)) groups.set(page.group, []);
    groups.get(page.group).push(page);
    return groups;
  }, new Map());
}

function renderStatus() {
  const sourceBacked = pages.filter((page) => page.content_status === "source-backed draft").length;
  const groups = new Set(pages.map((page) => page.group)).size;
  const labs = new Set(pages.map((page) => page.app_module)).size;
  statusGrid.innerHTML = `
    <div class="wiki-stat"><strong>${pages.length}</strong><span>topics</span></div>
    <div class="wiki-stat"><strong>${groups}</strong><span>groups</span></div>
    <div class="wiki-stat"><strong>${labs}</strong><span>labs</span></div>
    <div class="wiki-stat"><strong>${sourceBacked}</strong><span>drafts</span></div>
    <div class="wiki-stat"><strong>0</strong><span>gaps</span></div>
    <div class="wiki-stat"><strong>${pages.length}</strong><span>links</span></div>
  `;
}

function renderSequenceNav(filter = "") {
  const groups = groupedPages(filter);
  if (!groups.size) {
    sequenceNav.innerHTML = `<p class="empty-state">No topics match that search.</p>`;
    return;
  }

  sequenceNav.innerHTML = Array.from(groups.entries()).map(([group, groupPages]) => `
    <section class="topic-group">
      <h2>${escapeHtml(group.replace(" sequence", ""))}</h2>
      <ol>
        ${groupPages.map((page) => `
          <li>
            <a class="topic-link ${page.slug === activeSlug ? "active" : ""}" href="${topicUrl(page.slug)}" data-topic-link="${page.slug}">
              <span class="topic-number">${String(page.order).padStart(2, "0")}</span>
              <span>${escapeHtml(page.topic)}</span>
            </a>
          </li>
        `).join("")}
      </ol>
    </section>
  `).join("");
}

function renderLabShortcuts() {
  const shortcuts = Array.from(new Map(pages.map((page) => [
    page.app_module,
    { module: page.app_module, label: page.practice_action }
  ])).values());

  labShortcuts.innerHTML = shortcuts.map((shortcut) => (
    `<a href="${moduleUrl(shortcut.module)}">${escapeHtml(shortcut.label)}</a>`
  )).join("");
}

function renderRail(page, headings) {
  const index = pages.findIndex((candidate) => candidate.slug === page.slug);
  const previous = pages[index - 1];
  const next = pages[index + 1];

  prevLink.href = previous ? topicUrl(previous.slug) : "#";
  prevLink.textContent = previous ? `Previous: ${previous.topic}` : "Previous";
  prevLink.setAttribute("aria-disabled", previous ? "false" : "true");
  prevLink.dataset.topicLink = previous?.slug || "";

  nextLink.href = next ? topicUrl(next.slug) : "#";
  nextLink.textContent = next ? `Next: ${next.topic}` : "Next";
  nextLink.setAttribute("aria-disabled", next ? "false" : "true");
  nextLink.dataset.topicLink = next?.slug || "";

  labNote.textContent = `${page.practice_action} maps this topic to the ${page.app_module} module.`;
  railPracticeLink.href = moduleUrl(page.app_module);
  railPracticeLink.textContent = page.practice_action;

  const outlineItems = headings
    .filter((heading) => heading.level > 1)
    .slice(0, 8);
  pageOutline.innerHTML = outlineItems.length
    ? outlineItems.map((heading) => `<a href="#${heading.id}">${escapeHtml(heading.text)}</a>`).join("")
    : `<p class="empty-state">No headings on this page yet.</p>`;
}

function showPage(slug, updateHistory = true) {
  const page = pageBySlug.get(slug) || pages[0];
  if (!page) return;

  activeSlug = page.slug;
  const rendered = renderMarkdown(page.markdown);
  topicTitle.textContent = page.topic;
  topicMeta.textContent = `${page.group} / ${page.comptia_area}`;
  practiceLink.href = moduleUrl(page.app_module);
  practiceLink.textContent = page.practice_action;
  article.innerHTML = rendered.html;
  renderRail(page, rendered.headings);
  renderSequenceNav(searchInput.value);
  renderMermaidDiagrams();

  document.title = `${page.topic} - A+ Visual Lab Wiki`;
  if (updateHistory) {
    window.history.pushState(null, "", topicUrl(page.slug));
  }
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-topic-link]");
  if (!link || !link.dataset.topicLink) return;
  event.preventDefault();
  showPage(link.dataset.topicLink);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

searchInput.addEventListener("input", () => {
  renderSequenceNav(searchInput.value);
});

window.addEventListener("popstate", () => {
  showPage(requestedSlug(), false);
});

renderStatus();
renderLabShortcuts();
showPage(requestedSlug(), false);
