# Project MVPs

## What

This file divides the CompTIA A+ Visual Training Lab into clear MVPs.

MVP means the smallest useful version of one project layer.

Example:

The first MVP is not "everything visual and polished." The first MVP is "a learner can open the lab, pick one ticket, and complete one guided exercise."

## Why

The project should grow in controlled layers.

This matters because the final experience should become more visual and movable than text-heavy, but the planning scaffold still needs to stay organized.

Checklist:

- [x] Keep MVPs small.
- [x] Mark what is already done.
- [x] Keep visual learning as a separate layer.
- [x] Keep validation visible.

## How

Status legend:

```text
[x] Done
[~] In progress
[ ] Still to go
```

Use this order:

1. Foundation
2. Guided lab kit
3. Visual asset layer
4. Interactive visual trainer
5. Printable/card fallback
6. Portfolio package
7. Learner validation pass
8. Front landing page section map

Checklist:

- [x] Start with the current scaffold.
- [~] Add images and visual cards.
- [~] Convert key activities into app-based movable learning pieces.
- [ ] Validate with a real learner session.

## MVP 0: Workspace and Project Foundation

What:

Create the project folder and safe working location.

Why:

The project needs a stable home before visual files, datasets, and future app work are added.

How:

- [x] Move workspace to `C:\workspace_008_codex`
- [x] Keep project inside `a-plus-visual-lab/`
- [x] Keep unrelated `oiwa-hatch-run/` untouched
- [x] Preserve Git repository metadata

Checklist:

- [x] Workspace path is easier to navigate.
- [x] Project folder is isolated.
- [x] Existing unrelated folder remains present.

## MVP 1: Guided Text Lab Kit

What:

Create a working documentation-based training lab.

Why:

This gives the project a usable base before the final visual presentation exists.

How:

- [x] Create main README walkthrough
- [x] Create portfolio capture guide
- [x] Create five starter labs
- [x] Create session, safety, completion, and accommodation checklists
- [x] Create troubleshooting and topology diagrams
- [x] Create sample tickets
- [x] Create device inventory, port matching, symptom map, and objective map datasets

Checklist:

- [x] Learner can pick a ticket.
- [x] Learner can follow a lab.
- [x] Learner can save evidence.
- [x] Each lab uses `What`, `Why`, and `How`.
- [x] Labs include implementation, assumptions, risk notes, and validation steps.

## MVP 2: Visual Asset Plan

What:

Create a visual production map for cable, port, hardware, network, and security clues.

Why:

The final lab should use more visual clues and maneuverability over text.

How:

- [x] Create `visual-assets.md`
- [x] Create `assets/generated/`
- [x] Create `assets/sourced/`
- [x] Create `assets/README.md`
- [x] Create `datasets/visual-asset-manifest.csv`
- [x] List the first 12 needed visual assets
- [x] Choose visual style families
- [x] Generate first four visual assets as a prototype sheet
- [x] Copy generated prototype into `assets/generated/`
- [x] Generate individual final candidates for `VIS-001` through `VIS-004`
- [x] Save individual final candidates into `assets/generated/`
- [x] Review first four generated assets for technical accuracy
- [x] Mark first four generated assets as approved after visual review

Checklist:

- [x] Asset list exists.
- [x] First batch is defined.
- [x] First image prototype is generated and saved.
- [x] First individual final candidates are saved and linked.
- [x] First four final candidates are reviewed and approved.

## MVP 3: Interactive Visual Trainer

What:

Turn the lab from mostly reading into app-based interaction.

Why:

The learner should be able to sort, match, trace, flip, and repeat inside the app.

How:

- [x] Create static app shell
- [x] Create connector drag-and-drop module
- [x] Add click/tap fallback for matching
- [x] Create flash card module
- [x] Create progress feedback module
- [x] Load approved connector assets
- [x] Add symptom drag-and-drop module
- [x] Add ticket board module
- [x] Add clickable topology tracing
- [x] Save or export progress

Example:

The learner drags the RJ45 cable into the Network match zone, then reviews it as a flash card.

Checklist:

- [x] Learner can drag visual cards.
- [x] Learner can click/tap instead of dragging.
- [x] Learner can flip flash cards.
- [x] Learner can trace a topology path.
- [x] Learner can see progress.
- [x] Learner can create an evidence summary.
- [x] Add first A+ troubleshooting scenarios.
- [ ] Pilot with learner.

## MVP 4: Printable and Movable Fallback

What:

Keep printable cards available as a backup or offline activity.

Why:

Print can still help, but it is no longer the main learner surface.

How:

- [x] Create first connector matching card deck
- [x] Create cable matching cards
- [x] Create port matching cards
- [ ] Create symptom cards only if the app flow needs offline support
- [ ] Create printable troubleshooting board only if useful after app pilot

Example:

The learner can print the connector cards if a physical matching session is useful that day.

Checklist:

- [x] Print deck exists.
- [x] Print deck is secondary.
- [ ] Use print only when it improves the session.

## MVP 5: Portfolio Package

What:

Turn completed labs into project evidence.

Why:

The lab should become both a study tool and a portfolio artifact.

How:

- [x] Create in-app evidence summary export
- [ ] Create `portfolio-evidence/` folder structure
- [x] Create sample `portfolio-evidence/` folder structure
- [x] Create sample ticket-note template
- [ ] Create screenshot/photo naming rules
- [ ] Create portfolio case-study template
- [x] Create one completed sample evidence pack

Example:

One completed networking ticket includes a visual topology, one screenshot, a short result note, and one reflection.

Checklist:

- [x] Evidence summary is easy to understand.
- [x] Sample private data is removed.
- [x] Sample result is visible.
- [x] Sample learner action is clear.

## MVP 6: Learner Validation Pass

What:

Pilot the lab with real use.

Why:

The project should be validated against the learner's attention, sensory, and learning needs.

How:

- [ ] Run Lab 01 with the learner
- [ ] Record where instructions feel too text-heavy
- [ ] Record which visuals help most
- [ ] Measure whether a 25 to 35 minute session works
- [ ] Adjust card density
- [ ] Adjust image size and label placement
- [ ] Adjust stop rules and break points

Checklist:

- [ ] Learner knows what to do first.
- [ ] Learner can tell when done.
- [ ] Learner can recover after getting stuck.
- [ ] Visuals reduce reading load.

## Implementation

Current implementation status:

- [x] Documentation scaffold exists.
- [x] Datasets exist.
- [x] Visual asset manifest exists.
- [x] First visual asset prototype is generated and saved.
- [x] First four individual final candidates are generated and saved.
- [x] First interactive connector app is built.
- [x] Symptom match app module is built.
- [x] Topology tracing app module is built.
- [x] Ticket board app module is built.
- [x] Evidence summary/export app module is built.
- [x] First printable connector card deck is built as fallback.
- [x] First sample portfolio evidence pack is built.
- [ ] Symptom and ticket card templates are not built yet.
- [ ] Real learner pilot has not happened yet.

Checklist:

- [x] Use Markdown for planning and walkthroughs.
- [x] Use CSV and JSON for reusable datasets.
- [x] Use generated or sourced images for app activities.
- [x] Shift priority from print to app interaction.

## Assumptions

- The first final presentation layer should be more visual than text-heavy.
- The learner benefits from sorting, matching, tracing, and moving cards.
- Generated images are useful for prototyping.
- Real photos may be better for final hardware recognition.
- The interactive app is now the primary presentation layer.
- Object reference images should be photo-style.
- Instructional images should be blue on white lineart.
- Drag-and-drop objects should be simplified cartoon assets.

Checklist:

- [x] Treat the current checklist density as planning density.
- [ ] Reduce text in learner-facing cards.
- [ ] Keep fuller explanations in facilitator or README files.

## Threat/Risk Notes

Risk:

Generated technical images can be inaccurate.

Response:

Validate connector shapes, labels, and safety details before final use.

Risk:

Too much text can overload the learner.

Response:

Move detailed explanation into guides and keep learner cards visual.

Risk:

Network and security labs can accidentally involve real systems.

Response:

Use dummy data, safe screenshots, VMs, and lab-only examples.

Checklist:

- [ ] Validate images before publishing.
- [ ] Keep private data out of portfolio evidence.
- [ ] Review learner notes before sharing evidence.
- [ ] Avoid real malware and unauthorized network activity.
- [ ] Keep visual cards focused on one concept.

## Validation Steps

MVP validation:

- [x] MVP 0: workspace moved to `C:\workspace_008_codex`
- [x] MVP 1: lab docs and datasets created
- [x] MVP 2: visual asset plan created
- [x] MVP 2: first four visual assets generated as a prototype sheet
- [x] MVP 2: first four individual final candidates saved
- [x] MVP 3: connector, flash card, symptom, topology, ticket, progress, and evidence modules created
- [x] MVP 4: printable connector fallback created
- [~] MVP 5: in-app evidence summary and first sample evidence pack created; full portfolio package still to go
- [ ] MVP 6: learner pilot completed

Checklist:

- [ ] Review first generated images.
- [x] Choose photo-style, blue lineart, and simplified cartoon style families.
- [x] Build first app-based interaction modules.
- [ ] Pilot one lab session.

## MVP 7: Front Landing Page Section Map

What:

Create a front landing page that lets the learner choose how to enter the same A+ content.

The page should map three sectioning modes:

1. Our existing lab-station mode
2. CompTIA's domain mode
3. Jason Dion-style lesson sequence mode

Why:

The learner may understand the project better when the same content can be seen in more than one structure.

Example:

A learner can start from "Network Table," see that it maps to "Networking," then see related lessons such as cable types, networking basics, wireless networks, internet connections, addressing, configurations, and network services.

How:

- [x] Create a front landing page before the activity modules
- [x] Add a mode switcher: Lab Stations, CompTIA Domains, Course Sequence
- [x] Use visual tiles instead of a long text-only list
- [x] Link each tile to the matching app module, lab, card deck, or evidence path
- [x] Add Course Sequence side panel for module-list view
- [x] Make Course Sequence modules highlight matching route cards
- [x] Add Course Sequence Start buttons for matched activity modules
- [x] Split Course Sequence actions into Read and Practice
- [x] Add material repo for wiki-style course pages
- [x] Map course sequence topics to material paths, content status, and app practice modules
- [x] Add Course Focus panels inside matched activity modules
- [x] Build first dedicated Laptop Hardware activity module
- [x] Replace small laptop SVG anchor with a larger interactive blue-on-white hardware map
- [x] Redesign Laptop Hardware as diagram-first with a numbered answer rail and side detail panel
- [x] Add Learn, Practice, Quiz, Hint, and Check controls
- [x] Replace laptop drag/drop tokens with numbered typed answer fields
- [x] Replace large laptop label pills with hover/focus popups
- [x] Add separate generated PNG assets for open, external ports, internal, and front LED views
- [x] Save matching numbered PNG views for future numbered study and quiz variants
- [x] Replace the live Laptop Hardware artwork with unnumbered generated views
- [x] Create starter section-map dataset
- [x] Build first clickable landing page route
- [x] Generate higher-fidelity text-free laptop illustration set for VIS-013
- [ ] Test the map with the learner

Checklist:

- [x] Learner can choose by lab station.
- [x] Learner can choose by CompTIA domain.
- [x] Learner can choose by lesson sequence.
- [x] Learner can see the Jason Dion-style sequence as a vertical module list.
- [x] Learner can click a course module and see the matching route card.
- [x] Learner can open a wiki page from the course module list.
- [x] Learner can start a matched practice activity from the course module list.
- [x] Learner can land on a topic-specific activity cue.
- [x] Learner can identify laptop hardware parts from numbered hotspots.
- [x] Learner can type answers into numbered fields instead of covering the art.
- [x] Learner can study popups separately from quiz mode.
- [x] Laptop answers and learning text no longer cover the diagram.
- [x] Gaps are visible without feeling like failure.
- [x] Every route leads to a practical activity.
- [x] Gather and write first-pass original material pages.
- [x] Polish the material index and add material coverage diagrams.
- [x] Fill Intro and Laptop hardware material pages.
- [x] Add direct practice links inside material pages.
- [x] Add wiki reader layout for navigating Markdown material.
- [x] Render Mermaid diagrams inside the wiki reader.

### Section Mapping Draft

What:

This table is the first structure for the future landing page.

Why:

It shows where the project already has coverage and where future modules should go.

How:

| Our existing mode | CompTIA mode | Jason Dion-style sequence topics |
| --- | --- | --- |
| Hardware Bench | Hardware | Cable types; motherboards; cooling and power; system memory; BIOS/UEFI; storage device; printers and MFDs; printer types; laptop hardware |
| Network Table | Networking | Cable types; networking basics; wireless networks; internet connections; network addressing and communication; network configurations; network servers and services |
| OS and VM Station | Virtualization and Cloud Computing | Virtualization concepts; cloud computing; storage device |
| Mobile and Laptop Tray | Mobile Devices | Laptops and mobile devices; mobile applications; laptop hardware; troubleshooting mobile devices |
| Troubleshooting Wall | Hardware and Networking Troubleshooting | Troubleshooting methodology; troubleshooting hardware issues; troubleshooting storage devices; troubleshooting video issues; troubleshooting networks; troubleshooting mobile devices; troubleshooting printer devices |
| Security Station | Later Core 2 / safety layer | Intro; safe handling; suspicious-message practice; privacy checks |

Checklist:

- [x] Existing project sections are named.
- [x] CompTIA domain sections are named.
- [x] Jason Dion-style sequence topics are captured from the requested list.
- [x] Current gaps are visible.

### Implementation

- [x] Add `datasets/section-map.csv`
- [x] Add `datasets/course-sequence-map.csv`
- [x] Add `materials/course-sequence/` material repo
- [x] Add landing page wireframe
- [x] Add landing page HTML/CSS/JS
- [x] Add visual icons for each section mode

Checklist:

- [x] Mapping data exists before UI build.
- [x] Landing page exists.
- [x] Landing page links to working modules.
- [x] Course sequence links to material pages.
- [x] Original materials are source-backed first-pass drafts.
- [x] Material index shows draft and source-backed status.
- [x] Material pages link back to app practice modules.
- [x] Wiki reader presents material pages with sequence navigation and lab shortcuts.
- [x] Wiki reader renders Mermaid diagrams with source fallback.

### Assumptions

- "Our existing mode" means the current lab stations and activity surfaces.
- The CompTIA domain list is the Core 1 section list supplied for this project.
- The Dion-style sequence is used as a study-order comparison, not as copied course content.

Checklist:

- [x] Treat the mapping as a navigation aid.
- [ ] Verify official domain names before publishing publicly.
- [x] Keep the final learner page visual and low-text.

### Threat/Risk Notes

Risk:

A curriculum map can imply official endorsement or perfect coverage.

Response:

Label it as a learner navigation map and show gaps clearly.

Risk:

Too many topics on the landing page can become overwhelming.

Response:

Use grouped tiles, filters, and progressive reveal.

Checklist:

- [ ] Avoid implying affiliation with CompTIA or course providers.
- [ ] Label gaps as "not built yet."
- [ ] Keep topic lists collapsible or grouped.

### Validation Steps

- [x] Confirm each CompTIA domain has at least one matching route.
- [x] Confirm each built module appears in the map.
- [x] Confirm mobile layout has no horizontal scrolling.
- [ ] Confirm the learner can pick a route in under one minute.
