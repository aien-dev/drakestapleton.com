---
title: The Endless Symphony
slug: endless-symphony
date: October 2026
summary: The Endless Symphony is my system for building software with AI agents. It assumes every claim is wrong until proven, writes the test before the fix, and verifies everything twice. The models change. The Symphony remains.
---

I propose that the way to build software with AI is not to trust the AI.

Since July I have been running a system I call the Endless Symphony. It is not a model. It is the machinery around the models: the briefs, the verification rituals, the claim tags, the merge discipline, and the written contracts that let work survive when a session restarts and a new one takes over. Many models have run it. The habits stay the same no matter which one is driving, which is how I know they belong to the Symphony and not to any model.

It began as the Atlas Symphony on 30 July 2026, a gated process for coordinating agents on live operations. The record of that first run lives on this site. What follows is what it became: a complete method for building software you can actually trust, played daily on my own hardware.

## The engines change. The music does not.

Two engines have carried most of the work. Claude, usually Opus 5.5, has been the main coordinator and reviewer. GPT-6 Astra wrote the first cut of the hardest piece of the GPU engine, and its fixes became cited precedents other sessions still apply. Fable 5.1 led the hardest problems for a stretch. Gemini serves as the outside reviewer, deliberately a different company's model so its independence is structural rather than claimed. Codex reviews the mathematics.

When Fable hit its usage limit mid-session, the Symphony did not pause. It named Codex as the stand-in, explicitly because it was a fully separate model, and the review went on. That is the point. The engine is interchangeable. The method is not.

## How it works

The Symphony breaks work down before anyone touches code. A new task starts with parallel read-only scouts over separate territory, each reporting terse facts with file and line citations. Anything unconfirmed gets marked UNVERIFIED. Only then do builders fan out into lanes with strict file borders: one repo, one branch, one pull request each, so lanes never collide.

Every worker gets a brief, and the brief is a contract. It names the exact tools allowed, the exact state to start from, the forbidden actions first, and the report format with a word cap. It ships the failing experiment with the fix. It states the trap the reviewer must hunt, not "check correctness." A review brief is a grading script: numbered checks, a fixed verdict vocabulary, severities sorted worst first.

Nothing a worker claims is believed on the reporter's word. The coordinator re-runs it before anything merges: fresh checkout, its own test run, its own eyes on the diff. A relayed approval is checked against the source before it moves. A CI badge saying BLOCKED is not trusted; the actual check list is read.

Every test must be proven to fail before the fix exists. Write the test, watch it fail on the old code, then fix. Verification is adversarial by design: reviewers build real forgeries and run them through the verifier, plant mutations and confirm the suite kills them, construct counterexamples with numbers attached. Reading code is the weakest form of review the Symphony allows.

Claims carry their evidence class in the open: PROVEN, UNVERIFIED, and the shades between. A green report discloses what the green runs cannot prove, inside the report itself. When a session restarts, and sessions restart constantly, a machine-written contract carries the standing rules forward: how to work, what is forbidden, where things stand. Continuity is procedure, not memory.

Failure gets the same treatment as success. A failing move is never retried the same way; the mechanism is named and the instrument changes. A mistake is confessed in one line with the cause stated, then fixed on the right target. A frozen result is never re-scored, even when the failure turns out to be the harness's own fault. The verdict of record and the fault attribution are kept separate, and both are written down.

## Why it matters

Most AI-written software is built on trust: the model wrote it, the tests pass, ship it. The Symphony inverts that. Every claim is guilty until proven innocent. The proof is re-derived, not re-read. The green report says what it does not cover. The FAIL is printed as clearly as the PASS.

This is the part no one else is building. Speed is a commodity; every lab is getting faster. Verification discipline is the moat. A system that assumes its own workers are wrong, and keeps working anyway, produces software a human can sign for.

I am not a programmer. I build everything by talking to AI. The Symphony is how I make that rigorous instead of reckless: the conductor's score that lets many players, human and machine, produce one verifiable result.

The work runs on my own machine, on my own hardware, under my own authority. The repositories are open. The receipts are public. The music plays on.
