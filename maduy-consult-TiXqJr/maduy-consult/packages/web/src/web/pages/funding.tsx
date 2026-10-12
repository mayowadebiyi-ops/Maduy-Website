import { PageShell } from "../components/page-shell";

const PARAMETERS = [
	{
		figure: "Closed",
		label: "The 2026–27 CanExport SMEs intake closed on 31 August 2026",
	},
	{
		figure: "Up to C$50k",
		label: "Maximum contribution available under the most recent intake",
	},
	{
		figure: "Competitive",
		label: "Eligibility does not guarantee funding approval",
	},
	{
		figure: "Next intake",
		label: "Not yet announced — check the official programme page",
	},
];

const READINESS = [
	{
		h: "A credible market case",
		b: "Which country, customer segment and commercial problem justify management attention?",
	},
	{
		h: "A defined activity plan",
		b: "What will the company actually do to validate, enter and grow the market?",
	},
	{
		h: "Evidence and priorities",
		b: "What market, customer, competitor and partner information supports the proposal?",
	},
	{
		h: "An implementation framework",
		b: "Who will do what, on what timeline, toward which measurable commercial outcome?",
	},
];

const SUPPORT = [
	{
		tag: "Market case",
		h: "Build the commercial logic first",
		b: "A grant should support a sound expansion plan, not substitute for one. We help clients test the opportunity before significant resources are committed.",
	},
	{
		tag: "Funding fit",
		h: "Then assess programme alignment",
		b: "Once the commercial work is defined, specific activities can be tested against the current rules of CanExport or other relevant programmes.",
	},
];

const RULES = [
	{
		h: "The applicant owns the application",
		b: "The company remains responsible for programme eligibility, declarations, submissions and compliance with the current rules.",
	},
	{
		h: "Funding is not guaranteed",
		b: "Programme budgets are finite and applications are competitive. A market-entry decision should not depend on an assumed approval.",
	},
	{
		h: "Rules and eligible costs change",
		b: "Contribution levels, eligible expenses, project windows and target-market rules should always be checked against the latest official guidance.",
	},
	{
		h: "The next intake is not yet announced",
		b: "The 2026–27 intake is closed. Companies can still prepare the market case and execution plan so they are ready to assess the next intake when it opens.",
	},
];

export default function FundingPage() {
	return (
		<PageShell
			eyebrow="Funding"
			title={
				<>
					Funding can support expansion.{" "}
					<span className="text-brand-orange">It should never be the business case.</span>
				</>
			}
			standfirst="Public programmes can reduce some of the cost of international market development, but the commercial case should stand on its own. The 2026–27 CanExport SMEs intake is now closed; the next intake has not yet been announced."
		>
			<section className="bg-ink pb-24 lg:pb-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<div className="mb-10 border-l-2 border-brand-orange bg-ink-2 p-7">
						<p className="eyebrow text-brand-orange">Current status</p>
						<p className="mt-3 max-w-[72ch] text-[1rem] leading-relaxed text-paper">
							CanExport SMEs applications are currently closed. The most recent
							2026–27 intake closed at 12:00 p.m. ET on 31 August 2026. Do not commit
							expenditure on the assumption that a future intake will have the same rules.
						</p>
					</div>

					<dl className="grid gap-px border-t border-ink-3 sm:grid-cols-2 sm:bg-ink-3 lg:grid-cols-4">
						{PARAMETERS.map((p) => (
							<div key={p.figure} className="bg-ink py-8 sm:px-7">
								<dt className="display-tight text-[2rem] font-bold text-paper">{p.figure}</dt>
								<dd className="mt-3 max-w-[30ch] text-[0.9rem] leading-relaxed text-brand-grey">{p.label}</dd>
							</div>
						))}
					</dl>
				</div>
			</section>

			<section className="bg-paper py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
						<div>
							<p className="eyebrow text-brand-orange">Funding readiness</p>
							<h2 className="display-tight mt-5 max-w-[22ch] text-[2rem] font-bold text-ink lg:text-[2.4rem]">
								Prepare the expansion case before the programme opens.
							</h2>
							<p className="mt-6 max-w-[48ch] text-[1rem] leading-relaxed text-slate">
								A company with a clear export strategy can assess a future funding
								window quickly. A company without one is still starting from scratch.
							</p>
						</div>

						<div className="grid gap-px bg-[#e3e1de] sm:grid-cols-2">
							{READINESS.map((e) => (
								<div key={e.h} className="bg-paper p-7">
									<h3 className="font-display text-[1.02rem] font-bold leading-snug text-ink">{e.h}</h3>
									<p className="mt-3 text-[0.92rem] leading-relaxed text-slate">{e.b}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="bg-ink py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<div className="max-w-[58ch]">
						<p className="eyebrow text-brand-grey">Our role</p>
						<h2 className="display-tight mt-5 text-[1.9rem] font-bold text-paper lg:text-[2.3rem]">
							Funding readiness, not funding promises.
						</h2>
						<p className="mt-6 text-[1rem] leading-relaxed text-brand-grey">
							We help clients build the market-entry work that should exist whether
							or not a grant programme is open.
						</p>
					</div>

					<div className="mt-14 grid gap-px bg-ink-3 lg:grid-cols-2">
						{SUPPORT.map((c) => (
							<div key={c.tag} className="bg-ink-2 p-8 lg:p-10">
								<span className="eyebrow text-brand-orange">{c.tag}</span>
								<h3 className="display-tight mt-5 text-[1.25rem] font-bold text-paper">{c.h}</h3>
								<p className="mt-4 text-[0.96rem] leading-relaxed text-brand-grey">{c.b}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="bg-bone py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<div className="max-w-[58ch]">
						<p className="eyebrow text-brand-orange">The rules, stated plainly</p>
						<h2 className="display-tight mt-5 text-[2rem] font-bold text-ink lg:text-[2.4rem]">
							Treat programme rules as current facts, not permanent assumptions.
						</h2>
					</div>

					<div className="mt-14 grid gap-px bg-[#e3e1de] md:grid-cols-2">
						{RULES.map((r) => (
							<div key={r.h} className="bg-bone p-8">
								<h3 className="font-display text-[1.05rem] font-bold leading-snug text-ink">{r.h}</h3>
								<p className="mt-3 max-w-[52ch] text-[0.94rem] leading-relaxed text-slate">{r.b}</p>
							</div>
						))}
					</div>

					<div className="mt-12 flex flex-col gap-6 border-t border-[#e3e1de] pt-10 md:flex-row md:items-start md:justify-between">
						<p className="max-w-[76ch] text-[0.85rem] leading-relaxed text-slate/70">
							Programme availability, eligibility criteria, contribution levels and
							deadlines can change. Maduy Consult does not guarantee eligibility,
							approval or reimbursement. Applicants should rely on the current terms
							published by the programme administrator.
						</p>
						<a
							href="https://www.tradecommissioner.gc.ca/en/our-solutions/funding-financing-international-business/canexport-smes.html"
							target="_blank"
							rel="noopener noreferrer"
							className="shrink-0 border border-ink px-6 py-3 text-[0.88rem] font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
						>
							Check the official status →
						</a>
					</div>
				</div>
			</section>
		</PageShell>
	);
}
