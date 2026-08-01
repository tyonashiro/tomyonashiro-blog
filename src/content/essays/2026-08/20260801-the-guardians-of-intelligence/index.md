---
title: "The Guardians of Intelligence"
date: 2026-08-01
---

# The Guardians of Intelligence

2026-08-01

![](luke-hales-fN3HqYX3MBg-unsplash.jpg)

## When Security Became a Question of Authority

On July 27, 2026, NVIDIA announced the [Open Secure AI Alliance](https://blogs.nvidia.com/blog/open-secure-ai-alliance/), bringing together companies from artificial intelligence, cloud computing, cybersecurity, enterprise software, and open-source development. Its stated purpose was practical: build and share open technologies that can protect software and AI agents. The proposed work included identity, permissions, isolation, model formats, scanning systems, secure coding workflows, logging, evaluation, and the agent harnesses that connect models to the world.

The announcement rested on a broader argument. Cyber defenders should not have to depend entirely on a few closed services whose behavior they cannot fully inspect or adapt. They need models and tools that can run inside their own infrastructure, work with sensitive data, and be adjusted to local requirements. Openness, in this account, is not a concession made after safety has been achieved. It is part of the means by which safety is built.

Read by itself, the alliance might appear to be another industry consortium with an ambitious membership list and a familiar promise of collaboration. Yet the timing gave it a different weight. During the preceding months, Anthropic had restricted access to its most capable cybersecurity model. The United States government had then restricted Anthropic. Chinese developers had continued to release increasingly capable open-weight systems, culminating in Moonshot AI's Kimi K3. OpenAI had also returned to open weights through its [gpt-oss models](https://openai.com/index/introducing-gpt-oss/) while keeping its leading hosted systems closed.

These events turned a technical debate into a question of authority. Who should decide which capabilities are too dangerous to distribute? Should that judgment belong to the company that built the model, the government responsible for national security, the customers who need to defend their own systems, or a wider technical community? Each participant claimed to be protecting society, but each placed the right to protect it in different hands.

The disagreement was often described as a choice between open and closed AI. That language was too narrow. The real contest concerned guardianship. Artificial intelligence had become powerful enough that every major institution wanted a guardian, while no institution agreed on who the guardian should be.

## The Company That Chose to Guard the Frontier

Anthropic had already given this question a dramatic form through [Project Glasswing](https://www.anthropic.com/glasswing). In April 2026, it introduced Claude Mythos Preview, a general-purpose model with exceptional abilities in software engineering and cybersecurity. The model could do more than identify suspicious code patterns. According to Anthropic's evaluations, it could discover complex vulnerabilities, reproduce them, construct exploit components, and combine those components into complete attack chains.

These abilities offered a clear defensive benefit. Open-source projects and critical software systems contain more vulnerabilities than human security teams can find and fix. With Mythos Preview, participating organizations reported major increases in the rate of discovery. By May, [Anthropic and roughly fifty partners](https://www.anthropic.com/research/glasswing-initial-update) said that they had identified more than ten thousand high-severity or critical vulnerabilities across important software systems.

That success created a second problem. Discovery was no longer the slowest part of the process. Human beings still had to verify each finding, determine its severity, contact maintainers, develop a patch, test the repair, release it, and wait for users to install it. Anthropic described a security environment in which AI could produce findings faster than institutions could responsibly absorb them. The scarce resource had shifted from detection to judgment and repair.

Anthropic therefore withheld Mythos Preview from general release. Selected cybersecurity teams, infrastructure providers, and trusted partners received access, while the wider public did not. Technical details about newly discovered vulnerabilities were also delayed until patches were available and widely deployed. This followed established coordinated disclosure practices, but the volume and speed of the discoveries made the imbalance more visible.

The reasoning was credible. Publishing an unpatched vulnerability can help attackers faster than defenders, especially when millions of devices remain exposed. A model capable of building full attack chains cannot be treated in the same way as a conventional writing assistant. Anthropic's caution was supported by evidence, not only by speculative fear.

At the same time, Project Glasswing established Anthropic in several roles at once. The company developed the capability, evaluated its danger, selected the trusted users, controlled access, and decided which information could safely be released. It became both the producer of the new power and the interpreter of the risks created by that power.

This dual role gave Anthropic's public language a distinctive character. Its announcements did more than describe a product. They explained how society should understand the product, how seriously people should regard its danger, and why Anthropic should be trusted to manage it. The message could be sincere while also strengthening the company's authority. Corporate interest does not require deception. It often works more effectively when conviction and advantage point in the same direction.

Anthropic's position contained an implicit claim: those who understand the technology best are the people most qualified to govern it. That claim has considerable force in a field where policymakers can misunderstand technical details. It also begins to resemble a political philosophy, one in which expertise becomes the basis for guardianship.

## When the Guardian Was Guarded

That philosophy met its limits in June. Anthropic released Claude Fable 5 for general use and reserved the full capabilities of Claude Mythos 5 for a smaller group of approved organizations. The underlying intelligence was closely related, but Fable included stricter safeguards. Requests involving advanced cybersecurity, biology, chemistry, or model distillation could be detected by separate classifiers and redirected to Claude Opus 4.8. Most users would experience the full general capabilities of Fable, while sensitive areas received additional control.

Three days after the June 9 release, the United States government applied export restrictions to both models. The order required Anthropic to prevent access by foreign nationals inside and outside the United States. Because the company could not verify nationality in real time, it suspended Fable 5 and Mythos 5 for every customer.

What followed had the form of a technological parable. Anthropic had argued that frontier intelligence required a guardian. The government accepted the premise but claimed a higher authority to perform the role. The corporate guardian was itself placed under guard, and its carefully designed access system came to a halt because it had not been built to enforce the government's definition of an authorized person.

Anthropic complied but objected. In its [June 12 statement](https://www.anthropic.com/news/fable-mythos-access), the company argued that a narrow potential jailbreak did not justify recalling a commercial model used by hundreds of millions of people. Applying the same standard across the industry, it warned, could stop the deployment of every new frontier model. The restrictions were lifted on June 30, and [access was restored](https://www.anthropic.com/news/redeploying-fable-5) on July 1.

A real contradiction remained, though it was more refined than ordinary hypocrisy. Anthropic had previously supported government authority to block or deter dangerous deployments. It did not renounce that principle when its own models were stopped. Instead, it disputed the government's threshold, evidence, and proportionality. The company wanted public oversight, but it wanted oversight informed by what it considered a technically sound assessment.

No safety framework can settle the question that followed. When the company and the state disagree, whose judgment should prevail? Anthropic could claim deeper knowledge of its models. The government could claim democratic and legal authority, together with responsibility for risks extending beyond Anthropic's customers. Neither form of authority was complete. Expertise without public legitimacy can become private rule. State power without technical understanding can become blunt and disruptive.

Advanced AI had also moved beyond ordinary product governance. Decisions about access were now entangled with nationality, export controls, cybersecurity, strategic competition, and state power. A model release could be interrupted in the way a weapons system or controlled technology might be restricted. The age in which an AI company could define its own safety perimeter had begun to close.

## Openness Has a Business Model

NVIDIA's response placed confidence somewhere else. Its argument did not deny the need for safeguards, evaluations, or rules against malicious use. It challenged the assumption that capable systems become safer when they remain under the exclusive control of a few providers. Closed models can be breached, misused, or misconfigured. They can also become single points of failure. If a provider blocks a legitimate forensic investigation, changes its terms, loses service, or falls under a national restriction, customers may discover that they never controlled a capability on which they had come to depend.

Open weights offer a different distribution of power. Organizations can operate models within their own networks, retain sensitive data, inspect behavior, create specialized controls, and avoid permanent dependence on one vendor. Cybersecurity teams can adapt models to defensive environments that a general commercial service may not recognize. Governments and companies can preserve a degree of technological sovereignty.

NVIDIA's position also has a direct commercial logic. The wider the number of organizations training, adapting, and running AI models, the greater the demand for processors, networking, servers, and AI infrastructure. A world dominated by a few centralized model providers concentrates purchasing decisions. A world filled with open models allows thousands of businesses, universities, cloud services, governments, and developers to become infrastructure customers.

Model competition does not threaten NVIDIA in the same way that it threatens an AI laboratory. Its strongest position is not necessarily to own the leading model, but to supply the computational foundation beneath many competing models. According to the company's [fiscal 2026 results](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2026/), annual revenue reached $215.9 billion, while fourth-quarter data center revenue alone reached $62.3 billion. Open-weight AI expands the territory in which that core business can continue to grow.

This does not make NVIDIA's argument false. Open systems can expand competition, reduce dependency, and support defensive research. Economic interest and public benefit are not mutually exclusive. Capitalism often advances through arrangements in which a social value also creates a profitable market. The relevant question is whether the public language acknowledges the full set of incentives or presents commercial advantage as disinterested principle.

The companies that supported the July 24 [open-weight statement](https://images.nvidia.com/pdf/Open-Weights-and-American-AI-Leadership.pdf) also had varied reasons for doing so. Cloud providers could host more models. Software companies could avoid dependence on a single API. Security firms could tune systems for their own environments. Meta, OpenAI, and other developers could spread their models and standards across the global ecosystem. Even AMD, a direct competitor to NVIDIA in advanced processors, appeared among the signatories.

The coalition was therefore broader than loyalty to NVIDIA. It represented an industrial alignment against a future in which frontier intelligence remained concentrated within a small number of closed laboratories. The participants spoke of democratic access and competition, but they also recognized that openness could rearrange markets in their favor.

## The Model That Changed the Cost of Closing

Kimi K3 brought new urgency to the debate. Moonshot AI announced the [model](https://github.com/MoonshotAI/Kimi-K3) on July 16 as a 2.8-trillion-parameter, natively multimodal system with a one-million-token context window. Its sparse mixture-of-experts architecture activates about 104 billion parameters for each token, allowing a very large model to use only part of its capacity during any single operation.

K3 was designed for long-horizon coding, reasoning, visual understanding, tool use, research, and knowledge work. It could work with large software repositories, operate terminal tools, produce dashboards and visualizations, and handle text and images within the same system. Most consequentially, Moonshot released the model weights, allowing other organizations to download, deploy, modify, and fine-tune the system under its license.

Claims that K3 had equaled the best American models required care. Moonshot's own evaluations showed a mixed result. K3 surpassed Claude Fable 5 and GPT-5.6 Sol on some coding, search, spreadsheet, and agent benchmarks. It remained behind them on other tests of reasoning, software engineering, and professional knowledge work. Different models were also tested through different agent harnesses, which can materially affect performance.

A stronger conclusion did not require declaring that K3 had defeated every American frontier model. It had entered the same competitive group. An open-weight Chinese model could now perform many of the same categories of work as the leading closed systems from OpenAI and Anthropic. It also gave customers something those systems did not: possession of the weights and the ability to run the model under their own authority.

That combination changed the cost of restraint. If American companies withheld advanced capabilities for safety reasons while Chinese companies released systems approaching the same level, the capabilities would still spread. American providers might surrender global adoption without preventing the underlying risk. Governments, universities, and companies with limited budgets could choose Chinese models because they were adaptable, locally deployable, and less dependent on expensive foreign APIs.

K3 therefore strengthened NVIDIA's case. A closed American ecosystem could lose developers, standards, and influence to an open Chinese alternative. Yet the same release also supported Anthropic's warning. Once weights have been distributed, the original developer cannot reliably recall them, monitor every use, or preserve the original safeguards. An artifact designed for research and business can be modified for purposes its creator would reject.

The word open also needs qualification. K3 is technically open-weight, though its license includes conditions for large commercial services. Its training process and institutional environment are not open in the same sense. Chinese AI companies operate under [rules for public generative AI services](https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm) that require adherence to state-defined political values, protection of national security, and restrictions on prohibited content. Development occurs within a political system that retains substantial authority over companies, infrastructure, data, and public expression.

Technical openness and political openness can therefore move in opposite directions. A model produced within a state-directed environment can be distributed in a form that foreign users may inspect and alter. Once downloaded abroad, a copy is not under the immediate control of the Chinese government. Its architecture, training choices, and original behavior still carry traces of the institution that produced it.

K3 was not an answer to the debate. It was a forcing event. It showed that no American company could decide the future of model access by itself. Closing one frontier would not prevent another frontier from opening elsewhere.

## Four Claims to the Right to Decide

By this stage, four different guardians had appeared. Anthropic placed authority in expert stewardship. The company that understood the model's capabilities and failure modes would control access until safeguards became strong enough for broader release. The United States government placed authority in political sovereignty and national security. Private expertise remained valuable, but the state claimed the legal right to intervene when a model affected strategic interests.

NVIDIA and its partners placed greater trust in a distributed technical and commercial ecosystem. Many defenders, researchers, developers, and institutions would inspect and strengthen open systems rather than depend on a few closed providers. China combined open-weight distribution with state direction, allowing its models to spread internationally while preserving domestic political authority over development and public deployment.

Each guardian protected something real. Anthropic protected against misuse that might become irreversible after release. The government protected national security interests that no private company was elected to define. NVIDIA's coalition protected competition, customer control, and the ability of defenders to act without asking a model provider for permission. China protected national technological development while offering other countries an alternative to American platforms.

Each guardian also protected itself. Anthropic retained control over a scarce capability. Governments retained sovereign authority. NVIDIA expanded the market for computing infrastructure. China increased the reach of its technical ecosystem and reduced dependence on American technology. Noble language and self-interest occupied the same institutional space.

This mixture should not produce an easy cynicism in which every public principle is dismissed as marketing. Institutions act through incentives, and durable public goods often require an economic or political structure that can sustain them. The danger appears when an institution treats its own interest as proof of universal benefit. A company may believe that its technical competence gives it moral authority. A government may treat national power as public safety. A market leader may identify openness with freedom while benefiting from the infrastructure demand that openness creates.

The dispute crosses several levels that are often gathered under the broad label of AI ethics. At the model level, designers ask what an AI should say or refuse. Professional ethics asks what engineers and researchers should build. Corporate ethics concerns release decisions, safety investment, customer obligations, and profit. Political philosophy asks who has the legitimate authority to make decisions whose consequences extend across borders and generations.

That final level cannot be resolved inside a laboratory. Technical knowledge can describe risks, but it cannot determine whose values should govern society. Market success can demonstrate demand, but it cannot establish justice. Government authority can create enforceable rules, but it does not guarantee wisdom. Openness can distribute capability, but distribution alone does not create accountability.

The ancient question returns in a technological form: who guards the guardians? Any adequate answer must do more than select the most intelligent institution. It must create ways to review decisions, contest authority, correct errors, and hold power responsible for consequences.

## The Executive Who Can Think Before Power Speaks

AI companies have begun bringing philosophical ideas and people with philosophical training into their work. Google DeepMind has used John Rawls's veil of ignorance to explore how fair principles might guide AI behavior. At Anthropic, Amanda Askell has led work on Claude's character and served as the principal author of [Claude's Constitution](https://www.anthropic.com/news/claude-new-constitution), which describes the model as an agent that should aspire to be good, wise, and virtuous.

These efforts deserve serious attention. They address difficult questions about moral uncertainty, disagreement, honesty, autonomy, and the values expressed by a model in daily interactions. They show that AI behavior cannot be designed through engineering measurements alone.

Employing philosophers, however, does not make corporate leadership philosophical. A philosopher inside a company may be asked how the model should express the company's values without being given authority to ask whether the company should possess a certain power. Philosophy can become a sophisticated instrument for product design, policy enforcement, or reputational trust. It may improve the exercise of corporate power without examining the legitimacy of that power.

The larger need is for executives who can think philosophically about their own institutions. Technology leadership has long rewarded speed, action, experimentation, and scale. Those habits are productive when errors can be repaired through another software release. They become less reliable when a decision distributes model weights that cannot be recalled, changes employment across an economy, alters national security, or gives autonomous systems access to real infrastructure.

Philosophical speed is not paralysis. It is the capacity to move between urgent action and longer responsibility. A reflective leader can make a decision while preserving uncertainty about it. Such a leader can state which evidence would change the policy, whose interests may have been excluded, how dissent will be heard, and what institution can reverse the decision if the company is wrong.

Dario Amodei stands apart from many technology executives in his willingness to publish long essays about AI, national security, human progress, and catastrophic risk. His writing shows an effort to place technical development within a larger account of history. Yet reflective language has its own temptation. A leader who believes that deeper knowledge produces better moral judgment can drift toward the role of a philosopher-king, convinced that understanding the danger also grants the right to govern it.

Technical knowledge and political legitimacy are different possessions. The people who build an advanced model may understand its operation better than legislators, citizens, or customers. They do not therefore acquire the right to decide alone which risks everyone else must accept. Knowledge should increase responsibility, not settle the distribution of authority.

A philosophically serious company would demonstrate its principles through institutions, not only through essays or constitutions for its models. It would give internal dissent practical force, accept independent evaluation, publish failures that weaken its preferred narrative, and create procedures through which outsiders can challenge important decisions. It would sometimes allow a declared principle to limit revenue, speed, or executive discretion.

Philosophy becomes credible in corporate life when it can constrain the corporation. Otherwise, it risks providing elevated language for decisions already chosen by competition and self-interest.

No single guardian can safely govern intelligence of this scale. Companies possess expertise but have commercial interests. Governments possess legal authority but remain bounded by national priorities and political limits. Open communities distribute knowledge but can also distribute harm. States that promote open weights may retain firm control over the institutions producing them.

The task for leadership is therefore not to prove that one guardian deserves complete trust. It is to build arrangements in which different forms of authority can examine, limit, and correct one another. The most thoughtful executive will not be the person who speaks most confidently about humanity's future. It will be the person willing to create a system strong enough to question the executive's own judgment.

Photo by [Luke Hales](https://unsplash.com/@lukehales?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/an-abstract-metallic-sculpture-with-spheres-and-bars-fN3HqYX3MBg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)