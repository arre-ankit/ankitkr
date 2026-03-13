---
title: 'Curiosity Makes a Good Engineer'
description: 'On poking at systems, following questions, and why great engineers are professional wonderers'
date: 2025-03-13
takeaways:
  - 'Curiosity is a debugging primitive: it updates your mental model'
  - 'Senior “intuition” is just compounded questions over time'
  - 'Practice: chase one confusion per day and log what you learn'
---

Every good engineer I know has the same quiet superpower: they can't leave a confusing thing alone.

A flaky test, a weird latency spike, a log line that looks out of place—most people move on when it's \"good enough\". Curious engineers don't. They pull the thread. They open one more file. They ask \"wait, but *why*?\" one more time than everyone else in the room. Over a decade, that extra question compounds.

This post is about that compounding.

## Curiosity as a Debugging Primitive

Most bugs are not mysterious. They're the surface symptoms of some deeper mismatch between how you think the system works and how it actually works. Curiosity is the force that drives you to close that gap.

You can feel the two approaches:

- **Checklist mode**: try the usual fixes, clear the cache, restart the service, rubber-stamp the incident postmortem.
- **Curious mode**: \"Hold on. Why did this *ever* work?\" \"What changed right before this started?\" \"Where else in the codebase do we rely on this assumption?\"

The second mode is slower *today* and much faster over a career. You don't just patch the symptom; you update your internal model of the system. The next time something smells similar, you recognize it instantly.

## Building Internal Maps

Large systems are not things you memorize. They're spaces you develop a map of. Curiosity is what makes you walk down unfamiliar streets instead of staying on the main avenue.

You can watch this in code review:

- A non-curious review looks only at the diff. \"Looks fine, LGTM.\"
- A curious review asks: \"What calls this?\" \"What happens if this returns null?\" \"Why is this special-cased here and not in the shared layer?\"

Over time, the curious engineer accumulates a dense graph of connections in their head: how data flows, where the sharp edges are, which invariants actually matter. That graph is what we loosely call \"senior intuition\". It's not magic. It's just years of following small confusions instead of ignoring them.

## Curiosity vs. Tutorial-Driven Development

The opposite of curiosity is cargo-culting.

You copy a snippet from Stack Overflow. You paste a config from a blog post. You reproduce a framework's README example line by line. It works. You ship. But under the surface, you learned almost nothing about *why* it works.

Curious engineers treat tutorials as starting points, not endpoints. They run the code, then:

- Delete a line and see what breaks.
- Change a parameter to an extreme value and watch what happens.
- Add a `console.log` in the middle of some library function just to see the shape of the data.

This is play, but it's serious play. You're not just trying to get something running. You're trying to absorb the shape of the tool so that later, under pressure, you can bend it without snapping it.

## Curiosity and Career Surface Area

Curiosity also works at the macro scale: what you choose to learn at all.

You can be the person who only ever touches the ticket in front of them. Or you can be the person who asks:

- \"How does this service talk to the rest of the system?\"
- \"Where does this data ultimately end up?\"
- \"What would happen if this dependency suddenly disappeared?\"

The first path keeps you inside a narrow box. The second steadily increases your *surface area*—the number of problems you can even perceive, let alone solve. Promotions, interesting projects, early invitations to ambiguous efforts—those accumulate around people with large surface area.

Curiosity is how you grow that surface area without a formal roadmap. You follow the questions that tug at you, and they quietly pull you into new domains: performance, infra, product, ML, whatever is adjacent to your current work.

## How to Practice Curiosity on Purpose

You can't force yourself to care about everything. But you can design your environment so that curiosity has more chances to fire.

Some concrete practices:

1. **Keep a \"confusions\" file.** Any time something feels off, write it down: an API that behaves strangely, a metric you don't understand, a code path that surprises you. Revisit the list weekly and pick one to chase down.

2. **Read code that is not on your critical path.** Open a file two hops away from what you're working on and skim it. Ask: \"What problem is this trying to solve?\" \"Is there a simpler way now?\"

3. **Follow one question per day.** Allow yourself a small digression: read the source of a library function, track a request through three services, sketch a sequence diagram for a flow you've never diagrammed before.

4. **Ask \"why\" in postmortems.** Not just \"why did this break?\" but \"why was the system arranged so that this *could* break this way?\" That's where design-level learning lives.

None of this requires permission. It just requires leaving a few percent of your attention budget unallocated so that curiosity has somewhere to go.

## Curiosity and Taste

The last piece is subtle: curiosity shapes your *taste*.

As you see more designs, more failure modes, more clever hacks and elegant abstractions, you start to develop an internal sense of what \"good\" feels like. You notice when an interface is awkward. You wince when two concepts that want to be one are implemented as three. You feel uneasy when a critical invariant is only enforced by convention.

That taste is what lets you improve systems instead of just adding to them. It's what makes you say, \"before we add another feature, can we simplify this boundary?\" It's what makes you willing to delete code.

Taste isn't genetic. It's just curiosity plus time, pointed at real systems.

---

*If you want one lever to become a better engineer, start here: pick one confusing thing each day, and refuse to let it stay confusing. The codebase won't change overnight. But you will.*

