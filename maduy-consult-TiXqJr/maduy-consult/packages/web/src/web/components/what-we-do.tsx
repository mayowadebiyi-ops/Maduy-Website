const PRACTICE = [
	{
		title: "Market & Entry Strategy",
		body: "Opportunity assessment, market sizing, route-to-market strategy and prioritised entry planning for management teams deciding where and how to grow.",
	},
	{
		title: "Partner & Stakeholder Strategy",
		body: "Partner and distributor assessment, stakeholder mapping, commercial introductions and relationship development grounded in due diligence.",
	},
	{
		title: "Governance & Risk",
		body: "Governance frameworks, operating controls, risk assessment, compliance coordination and decision support for boards and senior management.",
	},
	{
		title: "Operational Execution",
		body: "Implementation planning, operating-model development, performance management and senior-level support as a business becomes established.",
	},
];

const PILLARS = [
	{
		n: "01",
		title: "Assess",
		body: "Test the market, customer demand, competition, partner options and the commercial risks before significant capital is committed.",
	},
	{
		n: "02",
		title: "Structure",
		body: "Define the entry model, commercial pathway, partner strategy and implementation roadmap, with regulated advice provided separately where required.",
	},
	{
		n: "03",
		title: "Establish",
		body: "Coordinate stakeholder engagement, partner onboarding, banking and operating requirements, and the practical steps required to enter the market.",
	},
	{
		n: "04",
		title: "Grow",
		body: "Strengthen governance, performance, risk management and operating capability as the business gains traction.",
	},
];

export function WhatWeDo() {
	return (
		<section id="what-we-do" className="bg-paper py-24 lg:py-32">
			<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
				<div className="grid gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
					<div>
						<p className="eyebrow text-brand-orange">Our practice</p>
						<h2 className="display-tight mt-5 text-[2rem] font-bold text-ink lg:text-[2.5rem]">
							Strategy is only useful when it can be executed.
						</h2>
						<p className="mt-5 max-w-[48ch] text-[1rem] leading-relaxed text-slate">
							Maduy Consult works with boards, owners and management teams on the
							decisions that sit between an identified opportunity and a functioning
							business.
						</p>

						<div className="mt-10 space-y-px bg-[#e3e1de]">
							{PRACTICE.map((p) => (
								<div key={p.title} className="bg-paper py-6">
									<h3 className="font-display text-[1.05rem] font-bold text-ink">
										{p.title}
									</h3>
									<p className="mt-2.5 max-w-[48ch] text-[0.94rem] leading-relaxed text-slate">
										{p.body}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="lg:border-l lg:border-[#e3e1de] lg:pl-20">
						<p className="eyebrow text-brand-orange">Canada–West Africa expansion</p>
						<h2 className="display-tight mt-5 text-[2rem] font-bold text-ink lg:text-[2.5rem]">
							From first question to operating business.
						</h2>
						<p className="mt-5 max-w-[52ch] text-[1rem] leading-relaxed text-slate">
							Our cross-border work is organised around four practical stages, with
							clear professional responsibilities at each stage.
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
