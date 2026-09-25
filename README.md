# Data Analytics & SQL Practice Quiz — Vercel version

This is the Google Apps Script quiz app (`Code.gs` + `index.html`) migrated
to a plain static site so it can be hosted on Vercel instead of
`script.google.com`.

## What changed from the Apps Script version

- **No backend needed.** The old `doGet()` / `getQuizData()` round-trip via
  `google.script.run` is gone. The 38-question bank that lived inside
  `Code.gs` is now `quiz-data.js`, a plain JS file loaded with a `<script>`
  tag, exactly like any static site.
- **Score logging is now local-only.** The old `logQuizAttempt()` only ever
  wrote to the Apps Script execution log (its Google Sheet write was
  commented out and unused), so nothing was actually lost. Each finished
  attempt is now saved to the browser's `localStorage` on the learner's own
  device via `logQuizAttemptLocally()`, and printed to the browser console.
  It is **not** sent anywhere. If you want a shared record of all 20
  learners' scores, see "Optional: central score logging" below.
- Removed `<base target="_top">` and the Apps Script `addMetaTag` viewport
  call — both were workarounds for running inside Google's iframe sandbox
  and aren't needed on Vercel; the viewport tag is now set directly in
  `index.html`.
- `Code.gs` itself is no longer used and is not part of this deployment
  (kept only as `Code.gs.bak` for reference — safe to delete).

## Files

```
index.html      the quiz UI (unchanged visually — same look, flow, and logic)
quiz-data.js    the 38-question bank, extracted from Code.gs
README.md       this file
```

Everything is static. There is no `package.json`, no build step, and no
server code — Vercel just serves these files as-is.

## Deploy to Vercel

**Option A — Vercel CLI (fastest for one person)**

1. Install the CLI once: `npm i -g vercel`
2. From inside this folder, run:
   ```
   vercel
   ```
3. Answer the setup prompts (link/create a project, keep defaults — Vercel
   auto-detects this as a static site, so no framework/build settings are
   needed). When it finishes you'll get a live `*.vercel.app` URL.
4. To publish updates later: `vercel --prod`

**Option B — GitHub + Vercel dashboard (best if others will help maintain it)**

1. Push this folder to a GitHub repo (e.g. `gabaypoz-quiz`).
2. In the [Vercel dashboard](https://vercel.com/new), import that repo.
3. Leave Framework Preset as **Other** and Build Command / Output Directory
   blank — there's nothing to build.
4. Click Deploy. Every future push to the repo auto-redeploys.

Either way, the result is a public link you can hand to your 20 learners —
no login, no Google account required, works the same on phone or laptop.

## Capacity for 20 learners

This is a static page with no server-side logic on the request path, so
Vercel serves it from its CDN — 20 concurrent learners (or a few hundred)
is well within the free tier, unlike the old Apps Script deployment which
could hit execution/quota limits under concurrent load.

## Optional: central score logging

If you later want everyone's scores collected in one place (e.g. a Google
Sheet or a small database) instead of staying in each learner's browser,
that needs a small serverless function (e.g. `api/log-attempt.js` on
Vercel) plus somewhere to write to. Ask and this can be added — it's a
small addition on top of what's here.
