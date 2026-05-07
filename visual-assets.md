# Visual Asset Plan

## What

This plan lists the images needed for the CompTIA A+ visual lab.

Use three approved visual styles:

1. Photo image generation for object reference images.
2. Blue on white lineart illustration for instructional images.
3. Simplified cartoon diagrams for assets, such as drag-and-drop objects.

Example:

For Ethernet cable practice, use a photo-style object reference image. For "how DNS works", use blue on white lineart. For a draggable Ethernet cable in an activity, use a simplified cartoon asset.

## Why

The current lab text is good for planning and checklist density.

The final learning experience should rely more on visual clues and movement.

Images should help the learner:

- identify parts quickly
- match symptoms to likely causes
- trace physical paths
- move cards around
- reduce long reading

Checklist:

- [ ] Use visuals to teach recognition.
- [ ] Use cards to support movement.
- [ ] Use text only where it clarifies the image.
- [ ] Keep each image focused on one idea.

## How

Use three image types:

| Type | Best for | Example |
| --- | --- | --- |
| Photo reference | real-world recognition | Ethernet cable, RAM stick, USB ports |
| Blue lineart instruction | steps, labels, and paths | DNS lookup, motherboard map, troubleshooting flow |
| Simplified cartoon asset | movable or draggable activity pieces | cable card, router object, symptom object |

Style rules:

- Photo reference images use realistic object rendering, neutral background, no brands, no hands, and no clutter.
- Blue lineart instructional images use blue lines on white, simple labels, clear arrows, and only the parts needed for the concept.
- Simplified cartoon assets use friendly, low-detail shapes that are easy to drag, sort, match, or print.

Recommended visual format:

```text
Image title:
One visible concept:
Learner action:
Text labels:
Alt text:
Validation:
```

Example:

```text
Image title: RJ45 Ethernet Cable
One visible concept: Ethernet cable identification
Learner action: Match cable to Ethernet port
Text labels: RJ45 connector, clip, cable jacket
Alt text: Close-up of an Ethernet cable connector with labels
Validation: Learner can distinguish Ethernet from USB and HDMI
```

Checklist:

- [x] Choose the three visual style families.
- [ ] Start with cable and port images.
- [ ] Add hardware part images.
- [ ] Add symptom clue cards.
- [ ] Add station header visuals.
- [ ] Add final portfolio screenshots later.

## Implementation

Store generated images here:

```text
assets/generated/
```

Store sourced or photographed images here:

```text
assets/sourced/
```

Track all planned assets here:

```text
datasets/visual-asset-manifest.csv
```

Current generated prototype:

```text
assets/generated/VIS-001-004-cable-port-reference-sheet.png
```

Current final candidates:

```text
assets/generated/VIS-001-rj45-ethernet-cable-photo-reference.png
assets/generated/VIS-002-ethernet-port-photo-reference.png
assets/generated/VIS-003-hdmi-cable-port-photo-reference.png
assets/generated/VIS-004-usb-a-usb-c-blue-lineart.png
assets/generated/VIS-013-laptop-hardware-map-gpt-sheet.png
assets/generated/VIS-013-gpt-view-set-contact-sheet.png
assets/generated/VIS-013A-laptop-open-view-gpt-unnumbered.png
assets/generated/VIS-013A-laptop-open-view-gpt-numbered.png
assets/generated/VIS-013B-laptop-external-ports-view-gpt-unnumbered.png
assets/generated/VIS-013B-laptop-external-ports-view-gpt-numbered.png
assets/generated/VIS-013C-laptop-internal-view-gpt-unnumbered.png
assets/generated/VIS-013C-laptop-internal-view-gpt-numbered.png
assets/generated/VIS-013D-laptop-front-led-view-gpt-unnumbered.png
assets/generated/VIS-013D-laptop-front-led-view-gpt-numbered.png
```

Approval status:

```text
VIS-001 approved
VIS-002 approved
VIS-003 approved
VIS-004 approved
VIS-013 final candidate as an interactive code-native map using generated PNG views
VIS-013A-D unnumbered generated views are linked in the live Laptop module
VIS-013A-D numbered generated views are saved as a second set for future practice variants
```

Suggested first image batch:

1. Ethernet cable and RJ45 port
2. HDMI cable and port
3. USB-A and USB-C comparison
4. RAM stick
5. SATA SSD and M.2 SSD comparison
6. Router, switch, and client path
7. Phishing email clue card
8. No-display symptom card

Checklist:

- [x] Save first generated prototype sheet with asset IDs.
- [x] Save first four individual final candidates with asset IDs.
- [x] Mark first four visual assets as approved after review.
- [x] Add first laptop SVG view set.
- [x] Generate separated laptop PNG view sets.
- [x] Save unnumbered and numbered laptop PNG views with asset IDs.
- [x] Add alt text for the active laptop views in the app.
- [x] Link active laptop PNG views to the Laptop Hardware lab.
- [ ] Generate or source the remaining first image batch.
- [ ] Save each remaining final image with its asset ID.
- [ ] Add alt text for remaining final images.
- [ ] Link each remaining image to a lab.
- [x] Check whether the laptop map needs a larger interactive treatment.
- [x] Keep answer chips out of the laptop diagram.
- [x] Move laptop learning text into hover/focus popups and the side panel.
- [x] Generate a higher-fidelity text-free laptop illustration set for VIS-013.
- [x] Check the separated laptop view set as a contact sheet.
- [ ] Check whether every remaining image is clear at small size.

## Assumptions

- Some final visuals may be better as real photos.
- Generated images are useful for teaching cards, photo references, and early prototypes.
- Exact port shapes and hardware details must be checked before portfolio use.
- The final lab may become more card-based and less text-heavy.
- Instructional visuals should be blue on white unless there is a clear reason to use a photo.

Checklist:

- [ ] Use generated assets for prototypes.
- [ ] Use real photos when hardware accuracy matters.
- [ ] Review technical details before publishing.
- [ ] Keep object photos, instructional lineart, and cartoon assets separate in the manifest.

## Threat/Risk Notes

Generated technical images can be wrong.

Risks:

- incorrect connector shape
- impossible cable ends
- misleading labels
- unsafe hardware handling shown in the image
- copyrighted sourced images without permission

Checklist:

- [ ] Validate connector shapes.
- [ ] Validate labels.
- [ ] Avoid brand logos unless needed.
- [ ] Prefer original, generated, or self-photographed images.
- [ ] Credit sourced images when required.

## Validation Steps

For each image:

- [ ] Can the learner identify the object in 5 seconds?
- [ ] Is there only one main concept?
- [ ] Are labels readable?
- [ ] Is the technical detail accurate?
- [ ] Does it support a physical action or visual decision?

Example:

An Ethernet cable image passes validation if the learner can point to the RJ45 connector and match it to an Ethernet port without reading a paragraph.
