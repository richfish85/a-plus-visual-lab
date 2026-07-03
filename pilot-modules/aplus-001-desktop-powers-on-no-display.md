# Desktop Powers On
# No Display

## What Happened?

The desktop turns on, but nothing appears on the monitor.

Symptoms:

- desktop fans spin
- power light is on
- monitor stays blank
- monitor light may be orange
- user cannot reach the sign-in screen

Key idea:

Power does not prove the display path works.

Display path:

```text
Desktop -> video port -> video cable -> monitor input -> screen
```

## Why Did It Happen?

Possible causes:

- monitor is off or asleep
- wrong monitor input is selected
- loose video cable
- cable is plugged into the wrong port
- RAM is loose
- graphics card is loose
- monitor or cable has failed
- desktop has a deeper hardware fault

Plain meaning:

The computer may have power, but the image is not reaching the screen.

## How Do I Diagnose It?

Use safe checks first.

1. Confirm the symptom.

   Ask what changed before the issue started.

2. Check the monitor.

   Confirm power is on.

   Confirm brightness is not set very low.

3. Check the monitor input.

   Confirm it is set to the port in use, such as HDMI or DisplayPort.

4. Check the cable.

   Confirm both ends are firmly connected.

   Try a known-good cable if one is available.

5. Check the display port.

   Confirm the cable is in the correct desktop port.

6. If allowed, power off before internal checks.

   Check RAM seating and graphics card seating only after shutdown and unplugging.

Diagnosis guide:

```text
Monitor menu appears -> monitor has power
Wrong input selected -> input issue
Known-good cable works -> cable issue
No display after external checks -> escalate or inspect internal hardware safely
```

## How Do I Fix It Safely?

Safe actions:

- select the correct monitor input
- reconnect the video cable
- swap to a known-good cable
- move cable to the correct video port
- power off and unplug before touching internal parts
- reseat RAM only if trained and allowed
- reseat graphics card only if trained and allowed
- escalate if the issue remains after safe checks

Do not:

- open a power supply
- touch internal parts while powered
- force RAM, cables, or cards into slots
- keep trying random ports without documenting what changed

## How Do I Document It?

Good ticket note:

```text
User reported desktop powers on but monitor shows no display.
Confirmed desktop power light and fans active.
Checked monitor power and selected input.
Checked video cable at monitor and desktop.
Reseated HDMI cable.
Display returned after input was changed to HDMI 1.
No internal hardware changes made.
```

If unresolved:

```text
Desktop powers on but monitor remains blank.
Monitor power confirmed.
Input and video cable checked.
Known-good cable did not resolve issue.
No internal parts touched.
Escalated for hardware inspection.
```
