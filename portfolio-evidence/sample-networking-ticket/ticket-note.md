# Ticket Note: APLUS-002

## What

A simulated user reports:

```text
Wi-Fi says connected, but websites do not load.
```

## Why

Connected Wi-Fi does not always mean the full network path is working.

The learner should check the path in small steps before changing settings.

Example:

If the device has Wi-Fi but DNS is wrong, a website name may fail even though the wireless connection looks active.

## How

Troubleshooting path:

1. Confirm the wireless connection shows connected.
2. Check whether the device has a valid network configuration.
3. Check gateway and DNS settings.
4. Trace the request path from device to router to DNS to website.
5. Document the result.

Checklist:

- [x] Start with the visible symptom.
- [x] Check the network path before guessing.
- [x] Use safe simulated data.
- [x] Move ticket to Done only after documentation.

## Implementation

Ticket stage movement:

```text
New -> Diagnose -> Fixing -> Document -> Done
```

Action taken:

```text
Checked IP configuration, gateway, and DNS order in a simulated lab.
```

Result:

```text
The likely issue was name resolution. The learner documented DNS as the first repair target.
```

## Assumptions

- This is a simulated training ticket.
- No real router settings were changed.
- No private screenshots were used.

Checklist:

- [x] Simulated ticket.
- [x] No real credentials.
- [x] No real customer data.

## Threat/Risk Notes

Risk:

Changing real network settings can break another person's access.

Response:

Use a lab network, simulator, or written scenario for this practice.

Checklist:

- [x] Do not change a shared router.
- [x] Do not publish private network data.
- [x] Keep the repair note general.

## Validation Steps

- [x] Symptom is clear.
- [x] First checks are listed.
- [x] Result is documented.
- [x] Ticket can be explained in one sentence.
