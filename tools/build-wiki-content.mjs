import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const csvPath = resolve(rootDir, "datasets/course-sequence-map.csv");
const outputPath = resolve(rootDir, "app/wiki-content.js");

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === '"' && quoted && next === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      values.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  values.push(current);
  return values;
}

function readCourseRows() {
  const [headerLine, ...lines] = readFileSync(csvPath, "utf8").trim().split(/\r?\n/);
  const headers = parseCsvLine(headerLine);

  return lines.filter(Boolean).map((line) => {
    const values = parseCsvLine(line);
    return Object.fromEntries(headers.map((header, index) => [header, values[index] || ""]));
  });
}

const pages = readCourseRows().map((row, index) => {
  const markdownPath = resolve(rootDir, row.material_path);
  return {
    order: index + 1,
    sequence_id: row.sequence_id,
    group: row.group,
    topic: row.topic,
    slug: row.slug,
    material_path: row.material_path,
    comptia_area: row.comptia_area,
    route_id: row.route_id,
    app_module: row.app_module,
    practice_action: row.practice_action,
    content_status: row.content_status,
    source_status: row.source_status,
    markdown: readFileSync(markdownPath, "utf8")
  };
});

const payload = {
  generated_at: new Date().toISOString(),
  source_csv: "datasets/course-sequence-map.csv",
  pages
};

mkdirSync(dirname(outputPath), { recursive: true });
const json = JSON.stringify(payload, null, 2).replace(/<\/script/gi, "<\\/script");

writeFileSync(outputPath, `window.APLUS_WIKI_CONTENT = ${json};\n`, "utf8");

console.log(`Wrote ${pages.length} wiki pages to ${outputPath}`);
