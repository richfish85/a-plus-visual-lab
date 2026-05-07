# Visual Assets Folder

## What

This folder stores images for the A+ visual lab.

Use:

- `generated/` for AI-generated photos, illustrations, and cards
- `sourced/` for self-photographed or externally sourced images

## Why

The final lab should be more visual and movable than text-heavy.

Example:

A learner should be able to match an Ethernet cable image to an Ethernet port image before reading a long explanation.

## How

Name files with the matching asset ID from `../datasets/visual-asset-manifest.csv`.

Example:

```text
generated/VIS-001-rj45-ethernet-cable.png
sourced/VIS-005-ram-stick-photo.jpg
```

Approved style families:

- Photo reference: realistic object image on a neutral background.
- Blue lineart instruction: blue lines on white for teaching steps or paths.
- Simplified cartoon asset: low-detail object for cards, matching, or drag-and-drop.

Checklist:

- [ ] Use the asset ID in the filename.
- [ ] Keep one image focused on one concept.
- [ ] Add alt text in the manifest or lab file.
- [ ] Validate technical accuracy before portfolio use.
