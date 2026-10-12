import { PageShell } from "../components/page-shell";

const FIRMS = [
	{
		firm: "Maduy Consult Limited",
		role: "Market strategy & programme lead",
		principal: "Olayinka Adebiyi",
		title: "Managing Director",
		scope: [
			"Market assessment and commercial strategy",
			"Stakeholder coordination and partner evaluation",
			"Programme leadership and execution support",
		],
	},
	{
		firm: "AFS",
		role: "Strategy, transformation & delivery support",
		principal: "Adekunle “Kunle” Salau",
		title: "Founding Partner / senior adviser",
		scope: [
			"Strategy and transformation support",
			"Operating-model design and implementation",
			"Relevant legal entity identified in each engagement document",
		],
	},
	{
		firm: "Ehinlaiye Law Professional Corporation",
		role: "Canadian legal & governance counsel",
		principal: "Olutoyin Ehinlaiye",
		title: "Barrister & Solicitor",
		scope: [
			"Canadian legal, contractual and governance services",
			"Retained directly under a separate legal retainer",
			"Coordinates local counsel where market-specific advice is required",
		],
	},
];

const WHY = [
	{
		n: "01",
		title: "One coordinated programme",
		body: "The work is organised around a defined commercial objective, workplan and set of outcomes rather than a loose collection of advisers and introductions.",
	},
	{
		n: "02",
		title: "Clear professional responsibilities",
		body: "Commercial, operational and legal responsibilities are kept distinct and documented in the relevant engagement terms.",
	},
	{
		n: "03",
		title: "Senior involvement",
		body: "The principals stay close to the decisions that matter — market entry, partner choice, governance, risk and implementation.",
	},
	{
		n: "04",
		title: "Local knowledge with international discipline",
		body: "The model combines practical West African market understanding with the governance and documentation standards expected by international businesses.",
	},
];

const NOT = [
	"We are independent firms collaborating around defined client assignments; we are not a merged firm or joint venture.",
	"We are not importers or exporters. We help clients build and execute their own market presence.",
	"We are not contact brokers. An introduction is useful only when it contributes to a credible commercial process.",
	"Legal services are provided solely by Ehinlaiye Law Professional Corporation under a separate retainer.",
	"We do not present unverified market relationships as established partnerships.",
];

function Node({
	label,
	title,
	body,
	accent,
	dashed,
}: {
	label?: string;
	title: string;
	body: string;
	accent?: boolean;
	dashed?: boolean;
}) {
	return (
		<div
			className={`p-6 ${
				accent
					? "border-l-2 border-brand-orange bg-ink-2"
					: dashed
						? "border border-dashed border-ink-3 bg-ink"
						: "border border-ink-3 bg-ink-2"
			}`}
		>
			{label && <span className="eyebrow text-brand-orange">{label}</span>}
			<h3
				className={`font-display text-[1.02rem] font-bold text-paper ${label ? "mt-3" : ""}`}
			>
				{title}
			</h3>
			<p className="mt-2.5 text-[0.9rem] leading-relaxed text-brand-grey">{body}</p>
		</div>
	);
}

function Connector({ text }: { text: string }) {
	return (
		<div className="flex items-center gap-4 py-4 pl-1">
			<span className="h-px w-10 bg-brand-orange" aria-hidden="true" />
			<span className="text-[0.75rem] uppercase tracking-[0.14em] text-brand-grey">
				{text}
			</span>
		</div>
	);
}

export default function AlliancePage() {
	return (
		<PageShell
			eyebrow="The Alliance"
			title={
				<>
					Senior West African execution.{" "}
					<span className="text-brand-orange">Clear professional boundaries.</span>
				</>
			}
			standfirst="The Canada–West Africa Expansion Alliance brings together experienced business, strategy and legal professionals to support Canadian companies entering and growing in West African markets. The firms remain independent, and each engagement identifies the legal entities and responsibilities involved."
		>
			<section className="bg-paper py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<p className="eyebrow text-brand-orange">How the programme is organised</p>
					<h2 className="display-tight mt-5 max-w-[28ch] text-[2rem] font-bold text-ink lg:text-[2.5rem]">
						One commercial objective. Clear professional responsibilities.
					</h2>

					<div className="mt-14 grid gap-px bg-[#e3e1de] lg:grid-cols-3">
						{[
							{
								n: "01",
								h: "Programme leadership",
								b: "Maduy Consult leads market assessment, commercial strategy, stakeholder coordination, partner evaluation and overall programme execution.",
							},
							{
								n: "02",
								h: "Strategy and delivery support",
								b: "AFS contributes strategy, transformation and implementation capability where an assignment requires deeper operating-model or delivery support.",
							},
							{
								n: "03",
								h: "Legal, separately retained",
								b: "Ehinlaiye Law Professional Corporation provides Canadian legal and governance services under its own legal retainer.",
							},
						].map((m) => (
							<div key={m.n} className="bg-paper p-8">
								<span className="font-display text-[0.8rem] font-bold tracking-[0.14em] text-brand-orange">
									{m.n}
								</span>
								<h3 className="mt-4 font-display text-[1.1rem] font-bold leading-snug text-ink">
									{m.h}
								</h3>
								<p className="mt-3 text-[0.94rem] leading-relaxed text-slate">{m.b}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="bg-ink py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<p className="eyebrow text-brand-grey">Delivery map</p>
					<h2 className="display-tight mt-5 max-w-[28ch] text-[1.8rem] font-bold text-paper lg:text-[2.2rem]">
						Commercial delivery and legal advice are coordinated, not blurred.
					</h2>

					<div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
						<div>
							<Node
								label="Commercial programme"
								title="You — the client"
								body="A company assessing or executing a West African market opportunity."
							/>
							<Connector text="Defined consulting engagement" />
							<Node
								title="Maduy Consult — programme lead"
								body="Market strategy, commercial execution, partner assessment, stakeholder coordination and programme leadership."
								accent
							/>
							<Connector text="Specialist scope as agreed" />
							<Node
								title="AFS"
								body="Strategy, transformation, operating-model and implementation support through the relevant AFS entity."
							/>
						</div>

						<div>
							<Node
								label="Legal line"
								title="You — the client"
								body="The same client, contracting separately for legal advice where required."
							/>
							<Connector text="Separate legal retainer" />
							<Node
								title="Ehinlaiye Law Professional Corporation"
								body="Canadian legal, contractual and governance advice relevant to the engagement."
							/>
							<Connector text="Per-market advice where required" />
							<Node
								title="Local counsel"
								body="Qualified in-market counsel may be engaged where local legal advice is required."
								dashed
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-bone py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<p className="eyebrow text-brand-orange">Who does what</p>
					<h2 className="display-tight mt-5 max-w-[24ch] text-[2rem] font-bold text-ink lg:text-[2.5rem]">
						Three firms, three defined roles.
					</h2>

					<div className="mt-14 grid gap-px bg-[#e3e1de] lg:grid-cols-3">
						{FIRMS.map((f) => (
							<article key={f.firm} className="flex flex-col bg-bone p-8">
								<span className="eyebrow text-brand-orange">{f.role}</span>
								<h3 className="display-tight mt-5 text-[1.25rem] font-bold text-ink lg:min-h-[2.6rem]">
									{f.firm}
								</h3>
								<div className="mt-6 h-px w-12 bg-brand-orange" aria-hidden="true" />
								<p className="mt-6 font-display text-[1rem] font-semibold text-ink">
									{f.principal}
								</p>
								<p className="mt-1 text-[0.85rem] text-slate/80">{f.title}</p>
								<ul className="mt-6 space-y-3">
									{f.scope.map((s) => (
										<li key={s} className="flex gap-3 text-[0.92rem] leading-relaxed text-slate">
											<span className="mt-2 h-px w-3 shrink-0 bg-brand-orange" aria-hidden="true" />
											{s}
										</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="bg-ink py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
						<div>
							<p className="eyebrow text-brand-grey">Why this shape</p>
							<h2 className="display-tight mt-5 text-[1.8rem] font-bold text-paper lg:text-[2.2rem]">
								Designed around execution, not labels.
							</h2>
							<p className="mt-6 max-w-[44ch] text-[0.98rem] leading-relaxed text-brand-grey">
								Market entry can involve commercial judgement, operating design and
								regulated professional advice. The structure is intended to keep those
								responsibilities clear while the client works toward one objective.
							</p>
						</div>

						<div className="space-y-px bg-ink-3">
							{WHY.map((w) => (
								<div key={w.n} className="flex gap-6 bg-ink py-7 lg:gap-8">
									<span className="font-display text-[0.8rem] font-bold tracking-[0.14em] text-brand-orange">
										{w.n}
									</span>
									<div>
										<h3 className="font-display text-[1.05rem] font-bold text-paper">
											{w.title}
										</h3>
										<p className="mt-2.5 max-w-[58ch] text-[0.94rem] leading-relaxed text-brand-grey">
											{w.body}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="bg-paper py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
						<div>
							<p className="eyebrow text-brand-orange">Where we start</p>
							<h2 className="display-tight mt-5 max-w-[24ch] text-[2rem] font-bold text-ink lg:text-[2.4rem]">
								Canadian mining supply and services into Nigeria and Ghana.
							</h2>
							<p className="mt-6 max-w-[54ch] text-[1rem] leading-relaxed text-slate">
								Nigeria is the principal focus of the current programme, with Ghana
								providing an established complementary mining market. The work is
								multi-mineral and supplier-led rather than limited to gold.
							</p>
							<a
								href="/west-africa"
								className="mt-8 inline-block border-b border-brand-orange pb-1 text-[0.92rem] font-semibold text-ink transition-colors hover:text-brand-orange"
							>
								See the market case →
							</a>
						</div>

						<div className="border-l-2 border-brand-orange bg-bone p-8 lg:p-10">
							<p className="eyebrow text-brand-grey">What we do not do</p>
							<ul className="mt-7 space-y-6">
								{NOT.map((n) => (
									<li key={n} className="text-[0.95rem] leading-relaxed text-slate">
										{n}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</PageShell>
	);
}
