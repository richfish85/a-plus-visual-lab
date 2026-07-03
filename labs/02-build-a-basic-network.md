# Lab 02: Build a Basic Network

## What

Build and explain a small home or office network.

Focus items:

- router
- switch
- client device
- IP address
- gateway
- DNS
- Ethernet
- Wi-Fi

## Why

Many help desk tickets are network tickets.

Example:

A laptop can show connected Wi-Fi but still fail to load websites if DNS is wrong.

## How

Use ticket `APLUS-002`.

Simplified pilot version:

- [APLUS-002: Wi-Fi connected but websites do not load](../pilot-modules/aplus-002-wifi-connected-no-websites.md)

Steps:

1. Read the ticket.
2. Trace the diagram from laptop to router.
3. Identify IP address, gateway, and DNS.
4. Match DNS to port 53 from `datasets/port-matching.csv`.
5. Write why Wi-Fi connection is not the same as internet access.
6. Document the likely next check.

Success condition:

```text
I can explain the path from laptop to website in plain language.
```

Checklist:

- [ ] I traced laptop to router.
- [ ] I identified gateway.
- [ ] I identified DNS.
- [ ] I matched DNS to port 53.
- [ ] I wrote a short explanation.

## Implementation

Materials:

- `diagrams/lab-topology.md`
- `datasets/port-matching.csv`
- router or simulator
- laptop or VM
- colored path cards

Kinesthetic activity:

Place cards on a table:

```text
Laptop -> Router -> DNS -> Website
```

Then move a "request" card through the path.

Checklist:

- [ ] Put each network card in order.
- [ ] Move the request card.
- [ ] Stop where the failure might happen.

## Assumptions

- Real router access may not be available.
- A paper model still teaches the flow.
- Commands are optional for the first pass.

Checklist:

- [ ] Use diagrams before commands.
- [ ] Add commands only after the path makes sense.

## Threat/Risk Notes

- Do not change shared router settings without permission.
- Do not publish real Wi-Fi names or public IPs.
- Do not scan networks you do not own.

Checklist:

- [ ] Use dummy addresses in notes.
- [ ] Keep lab network separate when possible.

## Validation Steps

Evidence to save:

- network path diagram
- ticket note for `APLUS-002`

Validation:

- [ ] The learner can explain IP, gateway, and DNS.
- [ ] The learner can identify one likely failure point.
- [ ] The learner can write a safe next step.

