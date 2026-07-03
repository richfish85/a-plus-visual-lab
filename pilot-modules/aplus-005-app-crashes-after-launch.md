# App Opens
# Then Crashes

## What Happened?

An application closes or errors shortly after opening.

Symptoms:

- app starts then closes
- same error appears each time
- one user may be affected
- other apps may still work
- issue may have started after an update

Key idea:

An app crash can be caused by the app, the user profile, the operating system, or a recent change.

Check path:

```text
App -> user profile -> updates -> logs -> reinstall or escalate
```

## Why Did It Happen?

Possible causes:

- app update failed
- missing or damaged app files
- corrupted user profile settings
- Windows update changed a dependency
- low disk space
- permission issue
- security tool blocked the app

Plain meaning:

The app cannot complete its startup process.

## How Do I Diagnose It?

Use safe checks first.

1. Confirm the symptom.

   Open the app and record the exact error.

2. Restart the app.

   Close it fully and open it again.

3. Restart the computer if appropriate.

   Retest after restart.

4. Check whether other users are affected.

   Ask whether the issue happens for one user or many.

5. Check recent changes.

   Ask about updates, installs, or password changes.

6. Check logs if allowed.

   Use Event Viewer or the app's own logs.

Diagnosis guide:

```text
Only one user affected -> possible profile or user setting issue
Many users affected -> possible app, update, or service issue
Low disk space -> storage issue
Same error in logs -> use error text for escalation
```

## How Do I Fix It Safely?

Safe actions:

- restart the app
- restart the device
- check for app updates
- check disk space
- repair the app if the vendor supports repair
- reinstall only if approved
- escalate with the exact error and logs

Do not:

- delete user data without backup
- reinstall without checking impact
- disable security tools unless directed by policy
- ignore the exact error message

## How Do I Document It?

Good ticket note:

```text
User reported app crashes after launch.
Confirmed app opens then closes with same error.
Restarted app and device.
Checked disk space and recent changes.
Issue occurs only for this user.
Captured exact error text for escalation.
No user data deleted.
```

If resolved:

```text
User reported app crashing after launch.
Confirmed error on first test.
Restarted device and installed available app update.
Retested app successfully.
User confirmed app now opens normally.
No security settings changed.
```
