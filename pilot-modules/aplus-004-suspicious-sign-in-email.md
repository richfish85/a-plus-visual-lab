# Suspicious Sign-In Email
# Possible Phishing

## What Happened?

The user received an email that claims they must verify their account.

Symptoms:

- email creates urgency
- sender looks unfamiliar
- link does not match the claimed service
- message asks for password or MFA code
- user is unsure whether to click

Key idea:

The safe first step is to avoid the link and verify through a trusted path.

Response path:

```text
Report -> verify safely -> reset if needed -> enable MFA -> document
```

## Why Did It Happen?

Possible causes:

- phishing attempt
- fake sign-in alert
- compromised sender account
- legitimate alert with confusing wording
- user clicked a suspicious link earlier

Plain meaning:

The message may be trying to steal login details or MFA codes.

## How Do I Diagnose It?

Use safe checks first.

1. Do not click the link.

   Inspect the message without opening unknown links or attachments.

2. Check the sender.

   Look for spelling changes or strange domains.

3. Check the link text.

   Hover only if safe and allowed.

   Do not open the link.

4. Check the request.

   Treat password, MFA code, gift card, and urgent payment requests as high risk.

5. Check whether the user entered credentials.

   Ask calmly and clearly.

6. Use the approved reporting process.

   Forward or report only through the company-approved method.

Diagnosis guide:

```text
Urgency + unknown sender + login link -> likely phishing
User entered password -> password reset needed
User gave MFA code -> urgent escalation
Real service alert but no risky action taken -> verify through trusted site
```

## How Do I Fix It Safely?

Safe actions:

- tell the user not to click the link
- report the message using the approved process
- have the user sign in from a trusted bookmark or typed address
- reset the password from the trusted page if credentials were entered
- enable or confirm MFA
- escalate if the user gave a password or MFA code

Do not:

- click the suspicious link
- ask the user for their password
- ask the user for an MFA code
- forward the email to random people
- shame the user

## How Do I Document It?

Good ticket note:

```text
User reported suspicious sign-in email.
Advised user not to click the link.
Checked visible sender, urgency language, and link mismatch.
User confirmed no password or MFA code was entered.
Reported message through approved process.
Advised user to access account through trusted sign-in page.
No credentials collected by technician.
```

If credentials were entered:

```text
User reported suspicious sign-in email and confirmed credentials were entered.
Advised user not to use the link again.
Initiated password reset through trusted account page.
Confirmed MFA review required.
Escalated to security support for account activity check.
```
