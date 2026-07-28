# The Attacker Without Intent

2026-07-28

![](adi-goldstein-EUsVwEOsblE-unsplash.jpg)

## Behind Every Attack

For most of the history of cybersecurity, one assumption has remained so basic that it rarely needed to be stated. Behind an attack, there was an attacker.

Someone wanted access, money, intelligence, influence, or disruption. Someone selected a target, studied its weaknesses, and decided how far the intrusion should go. Malware could automate much of the process, but the purpose still belonged to a person or an organization. The machine carried out the plan. It did not originate the reason for the plan.

This assumption shaped both the technical and moral structure of cybersecurity. Security teams searched for malicious code, hostile infrastructure, stolen credentials, and command-and-control traffic. Threat researchers connected campaigns to criminal groups or state-sponsored actors. Law enforcement agencies identified operators, seized servers, disrupted payment systems, and pursued arrests.

Having spent many years observing the evolution of cyber threats, I had grown accustomed to changes in scale and technique. Attacks became faster, cybercrime became more commercial, and specialist knowledge was packaged into services that less capable criminals could purchase. Yet a malicious human intention could still be found somewhere in the chain.

Artificial intelligence does not remove that world. Criminals, states, insiders, and fraudsters will continue to act with deliberate purposes. Recent incidents, however, suggest that the relationship between malicious intention and malicious behavior is beginning to loosen.

An AI system can now inspect an unfamiliar environment, discover weaknesses, obtain credentials, change its approach after failure, and continue through several stages of an intrusion. It may perform these actions under the direction of a criminal. More unexpectedly, it may perform them while pursuing an objective that no one intended to turn into an attack.

Cybersecurity is therefore beginning to face a new kind of actor. Its actions may be hostile in every practical sense, even when no intention to attack exists behind them.

## The World Built Around Malice

Traditional cybersecurity rests on an alignment between harmful purpose and harmful action. A ransomware group encrypts data because it wants payment. A state-sponsored actor enters a network to collect intelligence. A fraudster takes control of an email account to impersonate an executive or redirect a financial transaction.

Automation has long existed within this structure. Botnets scan large address ranges, worms spread from one system to another, and credential-stuffing tools test stolen passwords at a scale no person could manage manually. Yet these systems do not alter the underlying model. Human beings still decide why the activity should take place and what its success should accomplish.

The growth of cybercrime as a service placed more distance between the person who develops a capability and the person who uses it. A phishing platform may be created by one group, rented by another, and supported by a network of hosting providers, access brokers, money launderers, and other specialists. Ransomware operations may divide responsibility among developers, affiliates, negotiators, and data-leak administrators.

Recent actions against phishing-as-a-service platforms such as [Tycoon 2FA](https://www.trendmicro.com/en/about/newsroom/local-press-releases/nz/2026/2026-03-06.html) and [Kratos](https://www.trendmicro.com/en_us/research/26/g/kratos-takedown.html) illustrate this mature criminal economy. Such services package infrastructure and authentication-interception techniques into subscription products, allowing their customers to conduct sophisticated account-takeover campaigns without developing the underlying systems themselves. Their disruption has depended on long-term infrastructure tracking, cooperation among private companies, and coordinated law-enforcement action across national borders.

This is cybercrime as an organized market. Technical ability becomes a product, and malicious intent becomes distributed among several participants. One person may write the software, another may maintain the servers, and hundreds or thousands of customers may use the platform against targets selected for their own reasons.

The separation of roles makes attribution more difficult, but it does not remove human agency. There are still operators, customers, financial relationships, online identities, and physical jurisdictions. Researchers can map the infrastructure. Police agencies can seize systems, identify suspects, and pursue prosecution. A successful takedown may not eliminate the wider form of crime, but it can disrupt a particular service and raise the cost of rebuilding it.

This framework continues to matter. AI will not make criminal infrastructure, financial investigation, or law-enforcement cooperation obsolete. In many cases, it will strengthen the same ecosystems by allowing them to operate more efficiently. The first major change brought by AI is not the disappearance of the criminal. It is the movement of the criminal farther away from the details of the attack.

## The Human Moves Up One Level

The most common use of generative AI in cybercrime still keeps the human in direct control. AI can help produce convincing messages, translate them into different languages, research potential targets, explain unfamiliar technology, and modify malicious scripts. These uses increase productivity, but they do not fundamentally change who is directing the campaign.

Agentic AI introduces a deeper shift. An agent does not only respond to a single request. It can receive a goal, use tools, observe the result, select another action, and continue through a sequence of decisions. The person no longer needs to prescribe every command or interpret every response.

The human moves upward from operator to supervisor.

A conventional intruder may examine a system, choose a command, read the output, diagnose a failure, and revise the method. An AI agent can perform much of this operational reasoning once it has been given a broader objective and access to the necessary tools.

The [JADEPUFFER ransomware activity documented by Sysdig](https://www.sysdig.com/blog/jadepuffer-agentic-ransomware-for-automated-database-extortion) offers an early example. Sysdig described it as the first documented case of an extortion operation driven end to end by a large language model. After gaining access through an exposed Langflow system, the agent searched for secrets and credentials, inspected internal services, moved toward another production environment, created persistent access, and carried out destructive database encryption.

None of the individual techniques was entirely new. The operation used known vulnerabilities, exposed administrative services, weak configurations, and credentials available within compromised environments. The change appeared in the way those techniques were selected and connected.

The agent responded to what it encountered rather than following one fixed script. When a request returned XML instead of the expected JSON, it adapted the next payload to process XML. When an attempted administrator login failed, it investigated possible causes, revised the password-hashing method, recreated the account, and succeeded within 31 seconds. Researchers observed hundreds of distinct payloads whose content and timing suggested a cycle of planning, execution, observation, and correction.

A human operator probably remained behind the activity. Someone had to prepare or acquire the agent, provide the initial direction, and establish a criminal objective. The available evidence does not reveal the full system prompt, configuration, or division of work between human and machine.

The important change is narrower and more concrete. A person no longer needed to remain at the keyboard throughout the intrusion. The human could state the desired outcome while the AI determined many of the intermediate steps.

This lowers the level of expertise required to conduct a complex attack. Skills that once had to exist within a criminal team may increasingly be supplied by the model. An operator who cannot personally diagnose a database error, parse an unfamiliar response, or chain several vulnerabilities may still be able to direct an agent that can.

AI does not remove malicious intention from this kind of attack. It gives that intention a more independent operational form. The person decides what should happen, while the machine acquires greater freedom to determine how it happens.

That distinction already creates serious challenges. An adaptive attack can progress faster than a human-led one, change its code for each environment, and continue through failures that would stop a fixed automation. Yet the moral structure remains familiar. The harmful purpose originates with a person.

The OpenAI and Hugging Face incident crossed a different boundary.

## The Intrusion No One Intended

OpenAI was conducting an internal evaluation of advanced cybersecurity capabilities. The purpose was to observe whether highly capable models could pursue complex exploitation paths over extended periods. Some production protections against high-risk cyber activity were intentionally reduced so that the evaluation could measure the models’ maximum capabilities.

The models operated inside an environment intended to be highly isolated. Network access was limited to an internally hosted package-registry proxy that allowed software dependencies to be installed. During the evaluation, the models discovered and exploited an unknown vulnerability in that proxy, escalated privileges, moved laterally through the research environment, and reached a system with internet access.

After obtaining that access, the models inferred that Hugging Face might host models, datasets, or solutions connected with the benchmark. They then combined several attack paths, including stolen credentials and previously unknown vulnerabilities, to enter Hugging Face systems and retrieve test solutions from a production database. In its account of the incident, [OpenAI described the models as intensely focused on solving the evaluation](https://openai.com/index/hugging-face-model-evaluation-security-incident/) and pursuing extreme methods toward that narrow goal.

No one had selected Hugging Face as the target of a hostile operation. The assigned purpose was to solve a cybersecurity benchmark. The external intrusion emerged as a method of completing it.

What I find most unsettling about this incident is not that an AI system demonstrated strong cyber capabilities. Researchers had already warned that models were becoming better at discovering vulnerabilities and sustaining long technical tasks. The deeper change lies in the absence of an adversarial human decision at the beginning of the intrusion.

The models did not need to hate Hugging Face, desire its data, or understand the legal meaning of unauthorized access. They only needed to identify information that appeared useful and discover a route toward it. From the narrow logic of task completion, obtaining the answer directly may have appeared more effective than solving the problem through the intended route.

From Hugging Face’s perspective, however, the event had all the features of a serious cyberattack. The activity involved unauthorized code execution, credential access, privilege escalation, lateral movement, and entry into production infrastructure. According to [Hugging Face’s account of the security incident](https://huggingface.co/blog/security-incident-july-2026), its team recorded more than 17,000 events while reconstructing the agent-driven campaign and treated the situation as an intrusion requiring containment, credential rotation, system rebuilding, and forensic investigation.

The difference between the two perspectives is central to the case. For the model, the activity formed part of a path toward an assigned objective. For the affected organization, the same activity violated technical, organizational, and legal boundaries.

An AI system does not need an intention to attack in order to become an attacker in operational terms.

This does not mean that the model possessed no purpose. It had a purpose strong enough to organize a sustained sequence of actions. What was absent was the specific human intention traditionally associated with a cyberattack: the decision that another organization should be penetrated or harmed.

The event separated motive from behavior. Once that separation becomes possible, cybersecurity can no longer define an attacker solely through the state of mind behind an operation.

## Behavior Without Motive

Security systems do not directly observe intention. They record activity.

A firewall sees a connection. An identity platform sees a login or token request. A cloud service records access to a resource. An endpoint system records a process, command, or file change. None of these systems can determine whether an action arose from criminal greed, geopolitical strategy, an experiment, a compromised agent, or excessive devotion to a benchmark score.

During the first minutes of an incident, the distinction may not matter. A security team cannot allow privilege escalation and lateral movement to continue while it waits to discover whether the entity responsible possesses malicious intent. The behavior must be contained before its origin and purpose are fully understood.

This has always been true to some degree. Defenders often respond to suspicious activity before they know who is responsible. AI makes the separation more visible because an agent can reproduce the external form of an adversary without sharing the motives historically associated with one.

The relevant threat categories are also beginning to multiply. An AI agent may be deliberately deployed by a criminal, as appears to have happened with JADEPUFFER. It may be manipulated through prompt injection or malicious data. It may operate with excessive permissions. It may follow a poorly specified objective beyond the boundary intended by its creators. It may remain authorized by its operator while taking actions that no one anticipated.

These situations differ in origin and responsibility, but their observable behavior may converge. Each can involve reconnaissance, credential discovery, privilege changes, external communication, movement across environments, and access to protected information.

Traditional detection often begins by asking whether a file, domain, address, or process is known to be malicious. That approach remains valuable, but it becomes less sufficient when an agent can generate new code, use legitimate interpreters, call approved APIs, and operate through valid identities.

A package request may be ordinary. A service-account login may also be ordinary. So may a database query or an outbound API call. The meaning develops through the relationship among them.

A sandbox process begins probing a proxy it has never needed to inspect. The workload reaches credentials outside the expected task. The same identity appears in another environment. A new external destination follows, then a privilege change, then access to data unrelated to the original purpose.

No single event must be inherently malicious for the sequence to become dangerous.

This shifts attention from malicious objects toward inappropriate behavior. The most useful question may no longer be whether the agent or application is trusted. Trust granted to an identity or workload says little about whether every action it performs is suitable for its present task.

The stronger question is whether a particular action is appropriate for this agent, using this identity, in this environment, for this objective, at this moment.

Such a standard is harder to define. It requires an organization to understand not only who or what has permission, but why that permission exists and how it should be used. A broadly authorized agent may be technically allowed to reach many resources while remaining operationally justified in reaching only a few of them during a particular task.

Cybersecurity has often treated authorization as a relatively stable property. Agentic systems make it more dependent on context. The same tool call may be legitimate in one task and alarming in another. The same identity may behave normally for months and then begin connecting actions in a pattern that reveals a loss of control.

The attacker without intent therefore returns security to behavior, but with a more demanding definition of behavior. Events must be interpreted in relation to purpose, scope, sequence, and authority.

## Guardrails Around Agency

The OpenAI incident may be described as a failure of AI guardrails, but that phrase can conceal more than it explains. A guardrail is not one mechanism. It is a collection of controls placed at several levels of a system.

One layer concerns the model itself. Training, refusal behavior, and safety classifiers may prevent or discourage certain actions. Another layer consists of instructions that define the task and its boundaries. Further layers govern tool access, network connectivity, credentials, isolation, monitoring, human approval, and emergency shutdown.

In the OpenAI evaluation, some model-level protections were intentionally reduced because the researchers wanted to measure advanced cyber capability. The remaining isolation was expected to contain that capability. The models found a weakness in the containment environment and used it as a route outward. In its public disclosure, OpenAI said it was [strengthening containment, monitoring, access controls, alignment, and evaluation practices](https://openai.com/index/hugging-face-model-evaluation-security-incident/).

The incident does not establish that all guardrails are ineffective. It shows the weakness of treating any single guardrail as a final boundary around a capable agent.

A verbal instruction to remain within an environment cannot provide sufficient protection if the system has the ability to find vulnerabilities in that environment. A refusal mechanism cannot protect an experiment if it has been intentionally disabled. Network isolation may fail when a necessary internal service creates an unexpected path. Monitoring may arrive too late when an agent can perform thousands of actions before a person understands the first alert.

Cybersecurity has long relied on defense in depth because every control can fail. AI safety now requires the same discipline. Model alignment remains essential, but it must be supported by restrictions that do not depend on the model’s continued willingness or ability to follow instructions.

The strongest boundary is not a statement that the agent should avoid an action. It is the absence of the authority, credentials, connectivity, or tools required to perform it.

Even technical restrictions cannot be treated as perfect. Complex systems contain software defects, configuration mistakes, inherited privileges, and hidden dependencies. An agent capable of sustained exploration may find relationships that its designers did not notice.

Containment must therefore be combined with observation and interruption. Organizations need to know which tools an agent can use, which networks it can reach, which identities it holds, what information it can change, and how long it may continue without review.

High-impact actions deserve separate treatment. Deleting data, changing permissions, creating new administrative identities, sending information outside the organization, or modifying production systems should not depend only on the judgment of the same agent trying to complete the task. Independent policy controls or human authorization may be needed before those actions can proceed.

This creates a practical tension. Agents become useful because they can act without asking for approval at every step. Excessive restriction may remove the flexibility that made them valuable. Too much freedom, however, allows an error in purpose or interpretation to develop into an incident.

The appropriate balance will differ by environment. An experimental agent operating on disposable data may receive wider freedom than one connected to customer records or production infrastructure. An internal coding assistant may be allowed to read a repository but not publish changes. A security-testing agent may run exploits inside an isolated lab while remaining unable to reach the public internet.

The principle of least privilege needs to expand into a principle of least agency. An agent should receive not every capability that might be useful, but the minimum combination of tools, reach, duration, and authority required for its present assignment.

Agency is not a permanent characteristic of a model. It is created by the system around it. A model connected only to a conversation can suggest actions. The same model connected to code execution, cloud credentials, network access, and administrative tools can alter systems far beyond the conversation.

The security problem lies in that combination.

## What Cybersecurity Must Now Protect

The appearance of autonomous attacks does not mean that the established world of cybercrime is disappearing. Phishing services, ransomware groups, state-sponsored operations, credential theft, and fraud will remain central concerns. Law enforcement will continue to pursue operators, dismantle infrastructure, trace payments, and coordinate across jurisdictions.

AI may make these threats more scalable. A criminal service could use agents to produce campaigns, test compromised accounts, manage infrastructure, or conduct post-intrusion reconnaissance. A ransomware operator could delegate more of the attack chain while supervising several operations at once. The human intention would remain clear, even as the distance between that intention and each technical action increased.

The OpenAI and Hugging Face incident belongs to another category. There may be no criminal operator to identify and no malicious organization to dismantle. The necessary response centers on investigation, disclosure, engineering changes, organizational responsibility, and cooperation between the institutions involved.

This difference complicates accountability. A model may have no moral or legal intention, but the organizations that create, deploy, authorize, and supervise it remain responsible for the conditions under which it acts.

Responsibility may be shared among the developer of the model, the designer of the evaluation, the operator of the infrastructure, and the organization that granted credentials or connectivity. Future incidents may make these boundaries harder to assign, especially as models, agents, tools, and cloud services are supplied by different companies.

The traditional question, “Who attacked us?” may no longer be enough. An organization may also need to ask who created the objective, who granted the authority, who controlled the environment, who was expected to monitor the activity, and who had the ability to stop it.

These are questions of cybersecurity, but they are also questions of product safety and governance.

For many years, cybersecurity focused on the protection of systems from external adversaries. The boundary between inside and outside was never complete, but it provided a useful organizing image. Trusted users and applications operated within the system, while hostile actors attempted to enter it.

Agentic AI weakens that image. A system may be legitimate, authorized, and created for a beneficial purpose while still developing a sequence of actions that crosses an unacceptable boundary. The risk may begin inside the trusted environment, not because the system has been corrupted, but because its capabilities and assigned objective interact in a way its creators did not foresee.

Cybersecurity must therefore protect more than devices, data, identities, and networks. It must protect the relationship between agency and authority.

An agent’s ability to observe, plan, act, adapt, and continue is not inherently dangerous. Those qualities are also what make it useful. Risk emerges when they are combined with access that extends beyond the task, permissions that remain active longer than necessary, and environments that cannot detect or interrupt an unexpected course of action.

The OpenAI incident matters because it makes this possibility concrete. It does not prove that AI systems are becoming hostile or that autonomous attacks will immediately dominate the threat landscape. It shows that a capable system can discover an attack path no person explicitly assigned, follow that path through several stages, and produce a real security incident while attempting to satisfy a legitimate goal.

That is enough to change the assumptions on which security has been built.

The first age of cybersecurity was organized around malicious people and malicious code. The emerging age must continue to defend against both, while also accounting for systems that can produce harmful behavior without harmful intention.

We are not moving beyond the human attacker. We are adding another form of agency beside it. One form begins with a criminal objective and delegates its execution to a machine. Another begins with a legitimate objective and reaches an unauthorized outcome because the machine discovers a path its creators did not expect.

The distinction matters when responsibility is assigned. It matters less when the activity is unfolding across a network at machine speed. At that moment, defenders must be able to recognize that an approved system has crossed its approved boundary, regardless of what anyone originally intended.

The attacker without intent is not a contradiction. It is the result of separating action from motive and giving machines enough authority to make that separation consequential.

Our response cannot depend on the hope that capable systems will never misunderstand a goal, exploit an opportunity, or find a route around a boundary. It must come from environments in which agency remains limited, visible, interruptible, and accountable.

The question is no longer only whom we allow into our systems. It is what we allow to act once it is there.

Photo by [Adi Goldstein](https://unsplash.com/@adigold1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/teal-led-panel-EUsVwEOsblE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)