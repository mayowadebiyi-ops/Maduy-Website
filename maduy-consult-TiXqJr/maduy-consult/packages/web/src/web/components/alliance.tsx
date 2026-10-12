import { Link } from "wouter";

const FIRMS = [
	{
		firm: "Maduy Consult Limited",
		role: "Market strategy & programme lead",
		principal: "Olayinka Adebiyi",
		title: "Managing Director",
		bio: "Chartered Accountant and senior business executive with more than three decades of experience across banking, investment, governance, strategy and operations.",
		scope: "Market strategy, commercial execution, stakeholder coordination, partner assessment and programme leadership.",
	},
	{
		firm: "AFS",
		role: "Strategy, transformation & delivery support",
		principal: "Adekunle “Kunle” Salau",
		title: "Founding Partner / senior adviser",
		bio: "Senior strategy and transformation professional with extensive consulting experience across African markets and leadership roles in major international professional-services firms.",
		scope: "Strategy, transformation, operating-model design and implementation support, through the relevant AFS entity identified for each engagement.",
	},
	{
		firm: "Ehinlaiye Law Professional Corporation",
		role: "Canadian legal & governance counsel",
		principal: "Olutoyin Ehinlaiye",
		title: "Barrister & Solicitor",
		bio: "Ontario barrister and solicitor with corporate, governance, banking and legal experience in Canada and Nigeria.",
		scope: "Canadian legal, contractual, corporate and governance services, provided under a separate legal retainer.",
	},
];

const MECHANICS = [
	{
		n: "01",
		title: "One coordinated programme",
		body: "Commercial work is organised around a defined objective, workplan and set of outcomes rather than a collection of disconnected introductions.",
	},
	{
		n: "02",
		title: "Clear professional responsibilities",
		body: "Commercial, operational and legal responsibilities are allocated to the appropriate firm and documented in the relevant engagement terms.",
	},
	{
		n: "03",
		title: "Legal services stay separate",
		body: "Ehinlaiye Law Professional Corporation is retained separately for legal services. Legal advice is not bundled into the consulting scope.",
	},
];

export function Alliance() {
	return (
		<section id="alliance" className="relative overflow-hidden bg-ink py-24 lg:py-32">
			<div className="hex-field absolute inset-0 opacity-40" aria-hidden="true" />

			<div className="relative mx-auto max-w-[1240px] px-6 lg:px-10">
				<div className="max-w-[58ch]">
					<p className="eyebrow text-brand-orange">The Alliance</p>
					<h2 className="display-tight mt-5 text-[2rem] font-bold text-paper lg:text-[2.9rem]">
						Three independent firms. Complementary responsibilities.
					</h2>
					<p className="mt-6 text-[1.02rem] leading-relaxed text-brand-grey">
						The Canada–West Africa Expansion Alliance brings together senior
						business, strategy and legal professionals for companies that need more
						than a market report — while keeping each firm's responsibilities clear.
					</p>
				</div>

				<div className="mt-16 grid gap-px bg-ink-3 lg:grid-cols-3">
					{FIRMS.map((f) => (
						<article key={f.firm} className="flex flex-col bg-ink-2 p-8 lg:p-9">
							<span className="eyebrow text-brand-orange">{f.role}</span>
							<h3 className="display-tight mt-5 text-[1.3rem] font-bold text-paper lg:min-h-[2.75rem]">
								{f.firm}
							</h3>
							<div className="mt-6 h-px w-12 bg-brand-orange" aria-hidden="true" />
							<p className="mt-6 font-display text-[1rem] font-semibold text-paper">
								{f.principal}
							</p>
							<p className="mt-1 text-[0.85rem] text-brand-grey">{f.title}</p>
							<p className="mt-5 text-[0.92rem] leading-relaxed text-brand-grey">
								{f.bio}
							</p>
							<p className="mt-auto pt-7 text-[0.85rem] leading-relaxed text-brand-grey/75">
								{f.scope}
							</p>
						</article>
					))}
				</div>

				<div className="mt-24 grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
					<div>
						<p className="eyebrow text-brand-grey">How it works</p>
						<h3 className="display-tight mt-5 text-[1.7rem] font-bold text-paper lg:text-[2.1rem]">
							A coordinated programme, with the lines kept clear.
						</h3>
					</div>

					<div className="space-y-px bg-ink-3">
						{MECHANICS.map((m) => (
							<div key={m.n} className="flex gap-6 bg-ink py-7 lg:gap-8">
								<span className="font-display text-[0.8rem] font-bold tracking-[0.14em] text-brand-orange">
									{m.n}
								</span>
								<div>
									<h4 className="font-display text-[1.05rem] font-bold text-paper">
										{m.title}
									</h4>
									<p className="mt-2.5 max-w-[58ch] text-[0.94rem] leading-relaxed text-brand-grey">
										{m.body}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="mt-20 border-l-2 border-brand-orange bg-ink-2 p-8 lg:p-12">
					<p className="display-tight max-w-[50ch] text-[1.35rem] font-semibold leading-snug text-paper lg:text-[1.7rem]">
						Our current commercial beachhead is Canadian mining supply and services
						into Nigeria and Ghana. Mining is the starting point — not the limit of
						Maduy Consult's capabilities.
					</p>
					<Link
						href="/alliance"
						className="mt-8 inline-block border-b border-brand-orange pb-1 text-[0.92rem] font-semibold text-paper transition-colors hover:text-brand-orange"
					>
						Meet the Alliance →
					</Link>
				</div>
			</div>
		</section>
	);
}
