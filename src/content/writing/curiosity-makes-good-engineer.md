---
title: 'Curiosity Makes a Good Engineer'
description: 'On poking at systems, following questions, and why great engineers are professional wonderers'
date: 2025-03-13
cover: '/cover-curiosity.png'
---

Every good engineer I know has the same quiet superpower: they can't leave a confusing thing alone.

A flaky test, a weird latency spike, a log line that looks out of place most people move on when it's \"good enough\". 

Curious engineers don't. They pull the thread. They open one more file. 

They ask \"wait, but *why*?\" one more time than everyone else in the room. 

Over a decade, that extra question compounds.

## Curiosity as a Debugging Primitive

Most bugs are not mysterious. They're the surface symptoms of some deeper mismatch between how you think the system works and how it actually works. Curiosity is the force that drives you to close that gap.

You can feel the two approaches:

1. **Checklist mode**: try the usual fixes, clear the cache, restart the service, ...
2. **Curious mode**: \"Hold on. Why did this *ever* work?\" ,  \"What changed right before this started?\" , \"Where else in the codebase do we rely on this assumption?\"

The second mode is slower *today* and much faster over a career. You don't just patch the symptom but you update your internal model of the system. The next time something smells similar, you recognize it instantly.

## Building Internal Maps

Large systems are not things you memorize!

Curiosity is what makes you walk down unfamiliar streets instead of staying on the main avenue.

You can watch this in code review:

- A non-curious review looks only at the diff and say \"Looks fine, LGTM.\"
- A curious review asks: \"What calls this?\", \"What happens if this returns null?\", ...

Over time, the curious engineer accumulates a dense graph of connections in their head: how data flows, where the sharp edges are, which invariants actually matter. That graph is what we loosely call \"senior intuition\". It's not magic. It's just years of following small confusions instead of ignoring them.

## Curiosity vs. Outsourcing Your Thinking

There's a new version of a trap, and it's more seductive than Stack Overflow ever was. You describe a problem to an AI. It writes the code. It works. You ship it. 

And somewhere in that interaction, the most valuable part where you figure out \"why it works?\" got skipped entirely. 

I am not against coding agents. They're genuinely useful. But there's a difference between using them to move faster and using them to avoid thinking.

Curious engineers use these tools differently. 
They take the generated code and then:

- Delete a function and rewrite it themselves to understand what it was actually doing.
- Change a value to something extreme and watch what breaks.
- Ask the AI to explain a piece of code, then verify that explanation by reading the source.
- Use the output as a starting point, not a stopping point.

The goal was never to get something running. The goal was to absorb the shape of the tool so that later, under pressure, you can bend it without snapping it. 

Don't outsource your curiosity. Use every tool available but stay in the loop and ask questions.

## Curiosity and Career Surface Area

Curiosity also works at the macro scale: what you choose to learn at all.

You can be the person who only ever touches the ticket in front of them. Or you can be the person who asks:

- \"How does this service talk to the rest of the system?\"
- \"Where does this data ultimately end up?\"
- \"What would happen if this dependency suddenly disappeared?\"

Curiosity is how you grow that surface area without a formal roadmap. You follow the questions that tug at you, and they quietly pull you into new domains like performance, infra, product, ML, whatever is adjacent to your current work. 

## How to Practice Curiosity on Purpose

You can't force yourself to care about everything. But you can design your environment so that curiosity has more chances to fire.

Some concrete practices:

1. **Keep a \"confusions file\":** Any time something feels off, write it down no matter whatever it is an API that behaves strangely, a metric you don't understand, a code path that surprises you. Revisit the list weekly and pick one to chase down.

2. **Follow one question per day:** Allow yourself to read the source code of a library, track a request through three services, sketch a sequence diagram for a flow you've never diagrammed before.

3. **Ask \"why\" in postmortems:** Not just \"why did this break?\" but \"why was the system arranged so that this *could* break this way?\" That's where design-level learning lives.

None of this requires permission. It just requires leaving a few percent of your attention budget unallocated so that curiosity has somewhere to go.

## Curiosity and Taste

The last piece is subtle: curiosity shapes your *taste*.

As you see more designs, more failure modes, more clever hacks and elegant abstractions, you start to develop an internal sense of what \"good\" feels like. You notice when an interface is awkward. You feel uneasy when a critical invariant is only enforced by convention.

That taste is what lets you improve systems instead of just adding to them. It's what makes you say, \"before we add another feature, can we simplify this boundary?\" It's what makes you willing to delete code.

Taste isn't genetic. It's just curiosity plus time, pointed at real systems.

---

