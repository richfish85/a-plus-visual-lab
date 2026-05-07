# Printable Card Decks

## What

This folder contains printable fallback cards for the A+ visual lab.

The primary learner surface is now the app in:

```text
../app/index.html
```

The first printable fallback deck is:

```text
connector-matching-cards.html
```

It uses the approved visual assets:

- VIS-001 RJ45 Ethernet cable
- VIS-002 Ethernet port
- VIS-003 HDMI cable and port
- VIS-004 USB-A and USB-C

## Why

The learner should be able to sort, match, trace, and move visual clues in the app first.

Print is kept for offline or physical sessions.

Example:

The learner matches the RJ45 cable card to the Ethernet port card, then places both on the Network station.

Checklist:

- [x] Use large images.
- [x] Keep text short.
- [x] Make cards printable as fallback.
- [x] Support matching and movement.

## How

For the main activity, open:

```text
../app/index.html
```

For fallback printing, open:

```text
connector-matching-cards.html
```

Print settings:

- paper: Letter or A4
- scale: fit to printable area
- background graphics: on
- orientation: portrait

Activity flow:

1. Print the cards.
2. Cut along the dashed lines.
3. Place image cards in one pile.
4. Place match cards in another pile.
5. Match cable, port, and purpose.
6. Move matched cards to the correct lab station.

Checklist:

- [ ] Use the app first.
- [ ] Print one test page only if physical cards help the session.
- [ ] Cut the cards.
- [ ] Run one matching round.
- [ ] Remove or simplify any card that causes confusion.

## Implementation

Current deck:

| Deck | Status | Purpose |
| --- | --- | --- |
| `connector-matching-cards.html` | final candidate | Cable, port, and connector matching |

Checklist:

- [x] Build first printable deck.
- [ ] Pilot with learner.
- [ ] Add back-side clue cards if useful.
- [ ] Create drag-and-drop cartoon variants later.

## Assumptions

- The card deck is a bridge between text planning and the later interactive trainer.
- Printed movement is useful before building drag-and-drop UI.
- The first deck should use the approved images directly.

Checklist:

- [ ] Keep cards physical first.
- [ ] Turn proven card flows into interactive flows later.

## Threat/Risk Notes

- Do not publish screenshots with private data.
- Do not use inaccurate generated visuals as final teaching material.
- Do not make cards too text-heavy.

Checklist:

- [x] First four visuals were manually approved.
- [ ] Recheck print clarity.
- [ ] Recheck learner confusion points after pilot.

## Validation Steps

Validate the deck by asking the learner to:

- [ ] Match RJ45 cable to Ethernet port.
- [ ] Identify HDMI as a display connection.
- [ ] Tell USB-A from USB-C.
- [ ] Sort each card into Network, Display, or USB.
- [ ] Explain one match in one sentence.
