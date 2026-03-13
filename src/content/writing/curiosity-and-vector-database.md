---
title: 'Deep Dive into Vector Databases'
description: 'From embeddings to approximate nearest neighbors: how retrieval by similarity actually works'
date: 2025-03-13
takeaways:
  - 'RAG = retrieve relevant chunks first, then let the LLM read and answer'
  - 'Chunking and recall knobs often matter more than the embedding model'
  - 'If answers are wrong, inspect retrieval before blaming the LLM'
---

There’s a new default architecture for “apps that know your stuff”.

It looks like this:

1. Take your documents.
2. Chop them into chunks.
3. Turn each chunk into a vector (an embedding).
4. Store those vectors somewhere searchable.
5. When a question arrives, turn the question into a vector too.
6. Retrieve the nearest chunks.
7. Give the chunks to an LLM and ask it to answer.

That loop is Retrieval-Augmented Generation (RAG). The Langbase explainer [`What is RAG?`](https://langbase.com/blog/rag-explained) is a good mental model for it: retrieval first, generation second. A vector database is the retrieval engine in the middle.

This post is a deep dive into what that engine is actually doing, and what you need to get right so it works reliably.

## The one-sentence definition

A **vector database** stores embeddings and returns the nearest neighbors to a query embedding.

Everything else is detail.

But the details matter because if you get them wrong you end up with:

- retrieval that “kinda works but feels flaky”
- an LLM that hallucinates anyway
- a system that is slow, expensive, and hard to debug

So let’s build the correct mental model.

## Step 0: Why keyword search fails (and why vectors help)

Keyword search is brittle because it assumes you know the right words.

But user questions are not keyword queries. They’re fuzzy:

- “Can I get a refund if I cancel late?”
- “What’s our policy on charging back?”
- “Do we support invoice-based billing?”

You can see how a pure string match loses here. Different words, same intent.

Embeddings give you a different primitive: **search by meaning**, not by surface form.

## Step 1: Embeddings are “meaning as geometry”

Take a piece of text and run it through an embedding model. You get a vector:

\[
\text{text} \rightarrow \mathbb{R}^d
\]

This vector is a point in a high-dimensional space. The key property is:

> similar meanings land near each other

Not identical. Not “contains the word”. Just… near.

We measure “near” with cosine similarity (common) or Euclidean distance (also fine).

At this point you should have a simple picture in your head: your corpus becomes a cloud of points, and your query becomes another point. Retrieval is just “find nearby points”.

## Step 2: Chunking is where most RAG systems succeed or die

You don’t embed entire PDFs. You embed **chunks**. Why?

- LLMs have context limits. You can’t stuff whole documents in.
- Retrieval wants granularity. “Find the relevant paragraph”, not “find the relevant 50-page file”.

Chunking sounds boring, but it is a first-class design choice.

Good chunking:

- chunks are small enough to be specific
- but big enough to have context
- boundaries align with meaning (headings / paragraphs), not arbitrary character counts
- each chunk carries metadata (source URL, title, section, date, etc.)

Bad chunking:

- splits sentences mid-way
- mixes unrelated sections
- creates chunks that are “too small to answer anything”
- strips away where the chunk came from (no sources)

If retrieval feels random, look here first.

## Step 3: The vector database (what it stores)

Conceptually, each row is:

```text
id
embedding: float[d]
text: string
metadata: { source, title, tags, updated_at, ... }
```

That’s it.

Then you build an index over the embeddings so you can do fast nearest-neighbor search.

## Step 4: Approximate Nearest Neighbor (ANN) is the real reason vector DBs exist

If you have \(N\) embeddings and you want the nearest neighbors, the dumb way is:

- compute distance from query to all \(N\)
- sort
- take top-k

That is \(O(N)\) per query. It’s fine for \(N=10k\). It’s dead for \(N=10M\).

So vector DBs use **Approximate Nearest Neighbor** indexing:

- you trade a tiny amount of accuracy for a lot of speed
- you get “very likely the nearest neighbors” instead of “provably the nearest neighbors”

The big intuition: the index is a structure that lets you **avoid looking at most vectors**.

This is also why vector DBs expose tuning knobs: “search depth”, “ef”, “probes”, etc. Those knobs adjust the recall/speed trade-off.

If your system sometimes misses obvious results, you might not need a new embedding model. You might need to turn the recall dial.

## Step 5: The RAG query path (the loop)

At query time you do:

1. Embed the question
2. Retrieve top-k chunks from the vector DB
3. Build a prompt containing the chunks + the question
4. Ask the LLM to answer using the chunks

In pseudocode:

```python
q = "Can I get a refund if I cancel late?"
q_vec = embed(q)

chunks = vectordb.search(q_vec, top_k=6)

prompt = render_prompt(context=chunks, question=q)
answer = llm(prompt)
```

This is the RAG pipeline described in Langbase’s guide [`What is RAG?`](https://langbase.com/blog/rag-explained): retrieval first, generation second.

Notice what changed:

- the model is no longer forced to “know” your policy
- it’s given the policy, and asked to *read it*

When RAG is working, hallucinations drop sharply because the model is grounded.

When RAG is not working, hallucinations return because the model is guessing again.

## Step 6: Filters, hybrid search, and reranking (how to make it not dumb)

Pure vector search is powerful, but you usually want three upgrades:

### 1) Metadata filters

Only search within the right subset:

- “policy docs only”
- “last 90 days”
- “only this customer’s workspace”

This improves precision and reduces the chance you retrieve irrelevant-but-similar chunks.

### 2) Hybrid search

Sometimes keywords matter. “Error code E042” is not a semantic question; it’s a literal token.

Hybrid search combines:

- lexical retrieval (BM25 / full-text)
- semantic retrieval (vectors)

It’s not either-or. The best systems do both.

### 3) Reranking

Vector search gives you candidates. A reranker (often a cross-encoder) gives you the final ordering.

This is the difference between “top-k kinda relevant” and “top-k *exactly* what you need.”

## Step 7: Evaluation (the part everyone skips)

If you can’t measure retrieval, you can’t improve it.

The most useful question to ask is:

> For a set of real user questions, do we retrieve chunks that contain the answer?

Common metrics:

- **Recall@k**: “is an answer-containing chunk in the top-k?”
- **MRR**: “how high does the first good chunk appear?”

Then do ablations:

- chunk size 300 vs 600
- overlap 0 vs 100
- embedding model A vs B
- ANN settings higher recall vs faster
- reranker on vs off

RAG is engineering. Treat it like engineering.

## Failure modes (so you can debug like an adult)

When the final answer is wrong, the cause is usually one of:

1. **Bad retrieval**: the correct chunk was never retrieved.
2. **Bad context packing**: the chunk was retrieved but not included (too many, too long, truncated).
3. **Bad instruction**: the model ignored context and “answered anyway”.
4. **Bad source text**: the docs themselves are outdated or contradictory.

The trick is to log the retrieved chunks and look at them. If they’re wrong, don’t blame the LLM. Fix retrieval.

## Why vector databases matter

Vector DBs aren’t a trendy new database category. They’re a new retrieval primitive.

They let you build systems where users can ask questions in natural language and get grounded answers from their own data, because you can retrieve by *meaning*.

And if you take one thing away from this post, it’s this:

> In a RAG system, retrieval quality is the ceiling on answer quality.

The LLM can’t answer from context it never saw.

---
