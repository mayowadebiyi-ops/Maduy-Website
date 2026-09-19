const PRACTICE = [
	{
		title: "Financial Advisory Services",
		body: "Transaction support, valuation, funding strategy and financial due diligence for owners and boards making a decision they cannot easily reverse.",
	},
	{
		title: "Corporate Finance",
		body: "Capital raising, structuring and negotiation — built by people who have sat on the institutional side of the table, not only the advisory side.",
	},
	{
		title: "Performance Improvement",
		body: "Operating reviews, cost and process work, and the governance that keeps a gain in place after the engagement ends.",
	},
];

const PILLARS = [
	{
		n: "01",
		title: "Market intelligence and entry strategy",
		body: "What the market actually rewards, who already occupies it, what a realistic first three years look like, and whether you should go at all.",
	},
	{
		n: "02",
		title: "Partner, customer and channel identification",
		body: "Named counterparties, checked properly. Ownership, standing, capacity and reputation — before you sign anything or ship anything.",
	},
	{
		n: "03",
		title: "Legal and regulatory navigation, transaction support",
		body: "Incorporation, licensing, local content requirements and contract architecture, handled under separate retainer by Ehinlaiye Law Professional Corporation.",
	},
	{
		n: "04",
		title: "Local execution, governance and scale-up",
		body: "Standing up the entity, hiring the first people, putting controls and reporting in place, and staying accountable while it takes hold.",
	},
];

export function WhatWeDo() {
	return (
		<section id="what-we-do" className="bg-paper py-24 lg:py-32">
			<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
				<div className="grid gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
					{/* Left — Maduy's own practice */}
					<div>
						<p className="eyebrow text-brand-orange">Our practice</p>
						<h2 className="display-tight mt-5 text-[2rem] font-bold text-ink lg:text-[2.5rem]">
							What Maduy Consult does.
						</h2>
						<p className="mt-5 max-w-[46ch] text-[1rem] leading-relaxed text-slate">
							A Toronto and Lagos advisory firm. Three practice lines, all of them
							delivered by principals with operating history in the institutions they
							advise.
						</p>

						<div className="mt-10 space-y-px bg-[#e3e1de]">
							{PRACTICE.map((p) => (
								<div key={p.title} className="bg-paper py-6">
									<h3 className="font-display text-[1.05rem] font-bold text-ink">
										{p.title}
									</h3>
									<p className="mt-2.5 max-w-[46ch] text-[0.94rem] leading-relaxed text-slate">
										{p.body}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Right — the Canada–West Africa offer */}
					<div className="lg:border-l lg:border-[#e3e1de] lg:pl-20">
						<p className="eyebrow text-brand-orange">Canada–West Africa expansion</p>
						<h2 className="display-tight mt-5 text-[2rem] font-bold text-ink lg:text-[2.5rem]">
							Helping Canadian companies enter and grow in West Africa.
						</h2>
						<p className="mt-5 max-w-[52ch] text-[1rem] leading-relaxed text-slate">
							Four things a Canadian board needs before it commits capital to Nigeria,
							Ghana or the wider region — and someone accountable for each of them.
						</p>

						<div className="mt-10 grid gap-px bg-[#e3e1de] sm:grid-cols-2">
							{PILLARS.map((p) => (
								<div key={p.n} className="bg-paper p-7">
									<span className="font-display text-[0.8rem] font-bold tracking-[0.14em] text-brand-orange">
										{p.n}
									</span>
									<h3 className="mt-4 font-display text-[1.05rem] font-bold leading-snug text-ink">
										{p.title}
									</h3>
									<p className="mt-3 text-[0.9rem] leading-relaxed text-slate">
										{p.body}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
