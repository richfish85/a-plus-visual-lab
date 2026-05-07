# A+ Visual Lab Materials

## What

This folder is the wiki-style material repo for the app.

It keeps longer explanations, source links, walkthroughs, and diagram notes out of the landing page so the learner can choose between reading and practicing.

Current status:

- 27 course-sequence pages exist.
- 27 pages are source-backed drafts.
- 27 pages include direct practice links.

## Why

The app should stay visual and uncluttered. The material repo gives the learner a quieter reading path and gives the project a portfolio artifact that shows the learning design, source trail, and implementation thinking.

Example:

The landing page can offer a small `Read` button. This folder holds the deeper explanation that button opens.

## How

Primary files:

- [course-sequence/README.md](course-sequence/README.md) is the main topic index.
- [../app/wiki.html](../app/wiki.html) is the in-app wiki reader for the material pages.
- [../datasets/course-sequence-map.csv](../datasets/course-sequence-map.csv) maps each topic to a CompTIA area, app route, practice action, and content status.
- [../diagrams/material-coverage-map.md](../diagrams/material-coverage-map.md) shows what is drafted and what still needs work.
- [../diagrams/material-repo-flow.md](../diagrams/material-repo-flow.md) shows how reading, mapping, practice, and validation connect.

## Implementation

The material layer is deliberately separate from the app UI.

```text
app/                 learner interface
app/wiki.html        wiki reader
materials/           wiki-style learning notes
datasets/            mapping data used by app and docs
diagrams/            visual maps for learners and builders
assets/generated/    visual references and diagrams
tools/               small local project scripts
```

Checklist:

- [x] Keep reading material out of crowded app cards.
- [x] Map every topic to a file.
- [x] Track source and content status in a dataset.
- [x] Add diagrams for coverage and learning flow.
- [x] Add direct topic-to-lab links inside each page.
- [x] Add a wiki reader that presents the Markdown material.
- [x] Render Mermaid diagrams in the wiki reader.

## Assumptions

- Course-provider order is used as a study sequence, not copied course content.
- CompTIA domains remain the main structure for exam alignment.
- Some topics use the nearest current practice module until a dedicated lab exists.
- Source-backed draft means the page has original notes and source links, not final exam readiness.

Checklist:

- [x] Keep mapping separate from lesson text.
- [x] Mark draft pages clearly.
- [ ] Validate objective-level coverage later.

## Threat/Risk Notes

Risk:

The index could imply complete exam coverage before the material is fully validated.

Response:

Use draft status labels and keep validation tasks visible.

Risk:

Course-sequence mapping could be mistaken for copied course material.

Response:

Use the sequence as navigation only. Keep all page wording original and source-backed.

Checklist:

- [x] Avoid copied lesson content.
- [x] Mark page status clearly.
- [x] Keep source links with learner notes.
- [ ] Add a public-facing non-affiliation note before portfolio release.

## Validation Steps

- [x] Confirm every course topic has a material file.
- [x] Confirm the dataset points to the material files.
- [x] Confirm the material index reflects current page status.
- [x] Confirm the wiki reader has generated content for every topic.
- [ ] Open several `Read` links in the app and confirm the target pages are useful.
- [ ] Review each page against the current CompTIA objectives.
- [x] Add direct practice links to pages.
- [ ] Add diagrams where text still does too much work.
