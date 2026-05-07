# A+ Visual Lab App

## What

This is the interactive app version of the A+ visual lab.

Current modules:

- start map for lab stations, CompTIA domains, and course sequence routes
- wiki reader for course-sequence material
- Mermaid-rendered diagrams in the wiki reader
- read/practice split for course-sequence topics
- drag-and-drop connector matching
- flash cards for cable, port, and connector recognition
- symptom matching
- laptop hardware recognition with numbered hotspots and answer fields
- topology tracing
- ticket-board flow
- progress feedback
- evidence summary export

## Why

The main learner experience should happen in the app as much as possible.

Print remains useful as a backup, but the priority is now interaction, repetition, and immediate feedback.

Example:

The learner drags the RJ45 cable and Ethernet port into the same Network match zone, then reviews the same concept as a flash card.

The learner can also start from the Start Map and choose the same content by lab station, CompTIA domain, or course sequence.

The Course Sequence view now separates Read and Practice. Read opens `wiki.html` at the selected topic; Practice opens the closest app activity.

The Laptop module uses generated blue-on-white PNG laptop views with separate open, external, internal, and front LED panels. The live module uses unnumbered artwork with small code-native hotspots, then the learner types the matching part names into numbered answer fields beside the diagram.

Laptop modes:

- Learn: hover or focus a number to open a short popup.
- Practice: type each part name with optional hotspot hints.
- Quiz: type each part name without answer popups.

Checklist:

- [x] Use the app as the primary activity.
- [x] Keep print as optional fallback.
- [x] Use approved images.
- [x] Keep text short.

## How

Open this file in a browser:

```text
index.html
```

Modules:

1. Start Map
2. Drag Match
3. Flash Cards
4. Symptoms
5. Laptop
6. Topology
7. Tickets
8. Progress
9. Evidence

Checklist:

- [ ] Open the app.
- [ ] Choose a Start Map route.
- [ ] Complete Drag Match.
- [ ] Complete Flash Cards.
- [ ] Complete Symptoms.
- [ ] Complete Laptop Hardware.
- [ ] Complete Topology.
- [ ] Complete Tickets.
- [ ] Check progress.
- [ ] Export evidence.

## Implementation

Files:

```text
app/
  index.html
  wiki.html
  wiki.css
  wiki.js
  wiki-content.js
  styles.css
  app.js
  README.md
```

The app is static and uses no build step.

The wiki loads Mermaid from a pinned CDN URL for diagram rendering, then leaves the source block visible as a fallback if rendering is unavailable.

`wiki-content.js` is generated from the Markdown pages by:

```text
node tools/build-wiki-content.mjs
```

Checklist:

- [x] Use relative asset paths.
- [x] Avoid external dependencies.
- [x] Support drag and click/tap selection.
- [x] Support section-map mode switching.
- [x] Support route cards that open activity modules.
- [x] Support Course Sequence side panel.
- [x] Support Course Sequence module click-to-highlight.
- [x] Support Course Sequence Read links that open material pages.
- [x] Support Course Sequence Practice buttons that open matched activity modules.
- [x] Support direct module links such as `index.html#module=laptop`.
- [x] Support a wiki reader with sequence navigation and lab links.
- [x] Support rendered Mermaid diagrams in wiki pages.
- [x] Support Course Focus panels inside matched activity modules.
- [x] Support Laptop Hardware numbered hotspot study.
- [x] Support Laptop Hardware typed answer checking.
- [x] Support Laptop Hardware learn, practice, and quiz modes.
- [x] Support Laptop Hardware hint and check actions.
- [x] Support generated unnumbered laptop view artwork.
- [x] Preserve generated numbered laptop view artwork for future quiz variants.
- [x] Support topology tracing.
- [x] Support ticket-board movement.
- [x] Support evidence summary copy and download.

## Assumptions

- The learner may use a mouse, trackpad, or touch screen.
- Dragging alone may not be accessible enough, so click/tap matching is also included.
- The first app module should focus on the approved connector assets.
- The second app layer should use safe simulated scenario clues.
- The front landing page should keep multiple study structures visible without making the learner read a long list first.
- Course Focus panels may use starter stand-ins where a dedicated topic module is not built yet.
- Material pages are source-backed first-pass drafts until final objective validation is complete.

Checklist:

- [x] Provide drag behavior.
- [x] Provide click/tap fallback.
- [x] Provide route-map navigation.
- [x] Provide topic-specific activity landings.
- [x] Provide laptop part matching.
- [x] Provide laptop study mode and quiz mode.
- [x] Provide topology path feedback.
- [x] Provide ticket progression.
- [ ] Pilot with learner.

## Threat/Risk Notes

- Do not use real private system data in the app.
- Do not turn security scenarios into live risky activity.
- Keep images technically reviewed before use.
- Review learner notes before sharing evidence.

Checklist:

- [x] Use approved visual assets.
- [x] Keep laptop answers and learning text out of the diagram artwork.
- [ ] Add only safe simulated tickets.
- [ ] Keep future security modules scenario-based.

## Validation Steps

Validate by checking:

- [ ] All images load.
- [ ] Start Map opens first.
- [ ] Start Map mode buttons work.
- [ ] Course Sequence panel appears only in Course mode.
- [ ] Course Sequence module buttons highlight matching route cards.
- [ ] Course Sequence Read links open material pages.
- [ ] Wiki topic navigation works.
- [ ] Wiki practice links open matching app modules.
- [ ] Wiki Mermaid diagrams render or show a readable fallback.
- [ ] Course Sequence Practice buttons open matched activity modules.
- [ ] Direct links such as `index.html#module=tickets` open the matching module.
- [ ] Course Focus panels appear inside matched activity modules.
- [ ] Course Focus panels preselect relevant cards, tickets, or topology nodes where available.
- [x] Laptop Hardware Practice checks numbered typed answers.
- [x] Laptop Hardware Learn mode shows hover/focus popups.
- [x] Laptop Hardware Quiz mode hides answer popups.
- [x] Laptop Hardware Hint and Check work.
- [ ] Start Map route cards open activity modules.
- [ ] Dragging works.
- [ ] Click/tap matching works.
- [ ] Feedback appears for correct and incorrect choices.
- [ ] Flash cards flip.
- [ ] Symptom matching works.
- [ ] Topology tracing works.
- [ ] Ticket movement works.
- [ ] Progress updates.
- [ ] Evidence summary refreshes.
- [ ] Evidence summary includes the learner note.
