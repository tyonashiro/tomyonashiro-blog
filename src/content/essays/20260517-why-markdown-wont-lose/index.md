---
title: Why Markdown Won't Lose
date: 2026-05-17
---

# Why Markdown Won't Lose

2026-05-17

![](beatriz-perez-moya-XN4T2PVUUgk-unsplash.jpg)

## The Headline That Misled Everyone

In early May 2026, three names in the AI developer community pulled in the same direction within forty-eight hours. Thariq Shihipar, on the Claude Code team at Anthropic, published a piece called "[The Unreasonable Effectiveness of HTML](https://thariqs.github.io/html-effectiveness/)," arguing that he had stopped using Markdown as his default agent output format. Simon Willison, who has been writing about LLMs longer and more consistently than almost anyone, [posted a short reconsideration of his own habits](https://simonwillison.net/2026/May/8/unreasonable-effectiveness-of-html/): he had been defaulting to Markdown since the GPT-4 days, and Thariq's piece had given him pause. Andrej Karpathy, around the same time, [suggested asking your LLM to structure its response as HTML and then viewing it in a browser](https://x.com/karpathy/status/2053872850101285137).

Three voices, one direction. The internet did what the internet does. Within forty-eight hours, Thariq's post had crossed 750,000 views on X, and the headlines started writing themselves. Markdown is dead. HTML wins. The format war is over.

The framing was wrong, or at least misleading. Read Thariq's piece carefully and the argument is much narrower than the viral reception made it sound. He is not saying replace your notes, your README files, your codebase documentation, or your agent instructions. He is saying that when your agent hands you a finished artifact (a code review, a status report, a research explainer, an implementation plan), ask for it as a single HTML file rather than a wall of Markdown. The deliverable. The thing meant to be opened, scrolled, shared with a colleague. Not the source.

The distinction matters because if you collapse it, you end up arguing the wrong question. The real question is not "which format wins?" It is "which layer of the workflow are we talking about?" And once you ask that, the answer becomes obvious, and most of the apparent disagreement dissolves.

## Markdown Lives in a Quadrant of Its Own

To see why Markdown's position is more secure than the headlines suggested, it helps to drop the linear ranking that people instinctively reach for. Markdown, HTML, Word, PDF are not arranged on a single axis from "lightweight" to "heavyweight." They are arranged on two axes that have nothing to do with each other.

The first axis is whether the format is plain text or a binary container. Plain text means you can open the file in any text editor on any operating system for the next fifty years and see something meaningful. Binary container means the file is a compressed bundle of XML or proprietary bytes that requires specific software to interpret. Markdown is plain text. HTML is plain text. Word documents (.docx) are binary containers (technically zipped XML, but that distinction matters only to people who like to argue on the internet). PDF is a binary container designed for visual rendering.

The second axis is whether the format is readable in its source state or whether it requires a rendering step to make sense. Markdown is readable in its source state. A heading written as `# Introduction` is recognizable as a heading without any rendering at all. HTML is plain text, but try reading a real-world HTML file in a text editor and you are swimming in `<div class="container-fluid">` noise. The structure is there, but the signal-to-noise ratio for human reading is poor. Word and PDF need their host applications to mean anything to a human reader.

|                       | Source-readable | Requires rendering |
| --------------------- | --------------- | ------------------ |
| **Plain text**        | Markdown        | HTML               |
| **Binary container**  | (none)          | Word, PDF          |

Plot the two axes against each other and Markdown lands in a cell that nothing else occupies. Plain text, source-readable. HTML is one cell over (plain text, but really wants rendering). Word and PDF are diagonally opposite (binary container, requires rendering). The cell where Markdown lives is genuinely unique, and no amount of improvement in LLM capability changes that. The property is structural.

This is why the "HTML displaces Markdown" framing does not work. HTML cannot displace Markdown from a cell HTML does not occupy. The two formats are doing different jobs even when they look like they are competing.

## HTML Is the Closest Cousin, Not a Rival

There is a piece of history that clarifies the relationship. John Gruber designed Markdown in 2004 as a shorthand for a subset of HTML. That was the explicit goal. Write naturally, get HTML. Every Markdown parser ever written is, at its core, a Markdown-to-HTML converter. `# Heading` is just a more typeable way to write `<h1>Heading</h1>`. The two formats share the same underlying document model, which is a nested tree of semantic elements: headings, paragraphs, lists, emphasis, links, code blocks.

So when you "convert" Markdown to HTML, you are not really transforming the document. You are making the implicit tags explicit. The semantic structure was already there. The converter just expands the shorthand.

Compare that to converting Markdown into Word or PDF. Both of those formats carry document-model concepts that Markdown does not have. Word's model includes pages, page breaks, headers and footers, styles defined separately from content, section breaks, columns, tracked changes, comments as anchored objects, footnotes with specific numbering schemes, embedded charts. None of these exist in Markdown. The Markdown-to-Word converter has to invent defaults for all of them.

PDF is further still. Its document model is, at root, a description of visual marks on fixed-size pages. There is no semantic structure underneath unless you explicitly add tagged PDF, which most documents do not. The Markdown-to-PDF converter (usually via an intermediate HTML and CSS layer, through tools like Pandoc with wkhtmltopdf, or Typst, or LaTeX) has to make hundreds of presentation decisions: font, size, margins, page size, line height, paragraph spacing, where to break pages, how to handle tables that exceed page width.

This is why every Markdown-to-PDF tool feels slightly different and slightly wrong. The conversion is not deterministic in any meaningful sense. It depends entirely on the rendering choices baked into the toolchain. Two people running the same Markdown through two different exporters will get visibly different artifacts.

The asymmetry matters for workflow design. If your output target is HTML, the path from source to render is short and predictable. If your output target is Word or PDF, the path is long, opinionated, and full of places where the rendering can surprise you.

## The Output Folder Gets a New Default

Static site generators have understood this pattern for over a decade. You write in Markdown, the generator produces HTML, and the HTML lives in an `output/` or `_site/` or `dist/` folder. The source is durable and editable. The output is disposable and regeneratable. If you change the source, you rerun the build and the output folder gets rewritten.

The same pattern can be applied to almost any knowledge workflow, and the recent discussion in the AI dev community is, in effect, an invitation to apply it more deliberately. The canonical layer stays Markdown. Your notes, your drafts, your README files, your agent instruction files, the prompts and skill definitions you maintain over time. All Markdown. All plain text. All in Git or its equivalent.

The output folder is where rendering happens. Until recently, this layer was a bit neglected because Markdown rendered well enough in chat windows, in GitHub previews, in document editors with Markdown support. People skipped the rendering step because the source format was good enough to read as-is. The deliverable and the source were the same file.

What has changed is that LLMs can now produce richer artifacts cheaply. A well-crafted HTML report with collapsible sections, inline SVG diagrams, a small chart, and a sidebar of definitions is no longer a custom job. You ask for it, the agent writes it, you open the file in your browser. The rendering step has become so easy that not doing it starts to look like a missed opportunity.

The practical life-hack from Thariq's piece is worth stealing as-is. When you finish a Claude Code session and you want a plan, a code review, or a report you will actually read, ask for it as a single HTML file. The phrasing is simple: "make this as a single HTML file." Save it to your output folder, open it in your browser, share the file or the URL with whoever needs it. The Markdown source (your prompt, your notes, your task description) stays where it was. The HTML artifact is a fresh render of the conversation.

Word and PDF do not disappear from the output folder. They retreat to the contexts where their constraints are features rather than bugs. PDF wins when the artifact needs to not change: contracts, signed documents, archival records, anything where pixel-perfect reproducibility across time and platforms matters more than editability. Word wins where organizational workflows are built around it: tracked changes for legal review, comments in collaborative editing, mail merge, templates with corporate branding that compliance has signed off on. For everything else, HTML is becoming the natural first-choice render target.

## The Vestige of Paper

There is a deeper reason HTML is taking over the output folder, and it is older than any LLM. The reason has to do with what the page is for.

The page is a print artifact. It exists because paper is physical and finite. Page size, page breaks, page numbers, headers and footers, margins, the very concept of "fitting" content into a fixed area: every page-based convention is downstream of "this will be printed on a sheet of paper of a specific size." Word and PDF inherit this entire mental model. They are, at heart, descriptions of what would happen if you sent the document to a printer. The screen view is a preview of the printed object.

Once a document lives entirely on screens, this inheritance becomes actively hostile to the reading experience. The most obvious symptom is the one anyone who has ever read a long PDF on a phone has felt: tables split across two pages, with the column headers on one page and the data on the next. Lists where the last item lands alone on a new page. Headings that float at the bottom of a page, separated from the content they introduce. Footnotes that get separated from their references by a page boundary.

Page numbers in a scrolling environment are not just useless. They are misleading, because they imply a stable structure that the scrolling interface has already broken. Headers and footers consume real estate on small screens. Two-column layouts force constant up-and-down scrolling. Content gets artificially shortened or padded to fit a page that the reader will never see as a page.

Markdown and HTML have none of this baggage. They are streams of content, not arrangements on pages. The rendering surface adapts to the device: phone width on a phone, wider on a laptop, narrower in a sidebar. The content does not fight the device because the content has no opinion about the device.

The page concept is hard to kill in some contexts because it is load-bearing for specific functional reasons. A contract has page numbers because lawyers need to reference "page 14, clause 3." Regulatory submissions specify page limits. Academic papers have page counts. In these domains, the page is not a vestige. It is a unit of accountability. But these are specific functional uses, not the default for ordinary communication. The fact that "send me the document as a PDF" is still the reflexive way most professionals share information is a vestige of an era when documents had to be printable by default, because some recipient might print them. Almost nobody prints anything anymore.

The pageless quadrant is where digital-native content lives. The paged quadrant is where print-derived artifacts live. The defaults have not caught up to the reality of how people actually read. They will, eventually, but the lag is measured in years and shaped by corporate habit.

## What This Means for Knowledge Work

The "Anthropic re-popularizes HTML" framing is too strong. Anthropic did not popularize Markdown in the first place. Markdown was already the default for developer documentation, README files, static site generators, Reddit, Discord, GitHub, Stack Overflow, and Slack long before any LLM existed. When ChatGPT and Claude started outputting Markdown, they were meeting their users where those users already lived. The LLM-Markdown pairing was downstream of Markdown's pre-existing dominance among technical readers, not a result of any single company's design choice.

What is actually happening is smaller and more interesting than a format war. The recent voices are not declaring Markdown obsolete. They are re-articulating an older principle that had been temporarily lost: source and output should be different files.

Markdown-as-everything was a shortcut that worked because the source format rendered well enough in the consumption contexts of the early LLM era. Chat windows, GitHub previews, IDE markdown viewers. The shortcut let people skip the rendering step entirely. The source was the deliverable.

As LLMs produce richer artifacts, the rendering step becomes worth doing again. HTML is the natural place for it to land, because HTML and Markdown share a document model, because HTML opens in any browser without specialized software, because HTML is still plain text underneath, which means the artifact can be diffed, copied, regenerated, or fed back into another agent without crossing a binary boundary. Word and PDF live further out, in their own niches.

The lesson is not to abandon Markdown for HTML. The lesson is to remember that the output folder exists, and to be deliberate about what crosses into it. If you have been treating your Markdown notes as both the source and the deliverable, the shift worth making is not a format change. It is a workflow change: separate the two layers, and use whatever render target fits the consumption context.

For most things, that render target is now HTML. For the things that need to be archived, signed, or printed, it stays PDF. For the things that need to live inside an organization's editing and review conventions, it stays Word. The output folder gets crowded with multiple formats, each chosen for a reason. The source folder stays clean, plain text, durable, and one file per idea.

The page format will keep retreating, gradually, as the contexts that required it shrink. The browser will keep being the most universal piece of software in the world. The canonical layer will stay in plain text, because plain text is the only format that survives the next thirty years of software change without translation loss. And the rendered output, whatever it looks like, will keep being a fresh build from a stable source. That is the workflow worth keeping, regardless of which formats win this week's discussion.

Photo by [Beatriz Pérez Moya](https://unsplash.com/@beatriz_perez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/a-stack-of-thick-folders-on-a-white-surface-XN4T2PVUUgk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
