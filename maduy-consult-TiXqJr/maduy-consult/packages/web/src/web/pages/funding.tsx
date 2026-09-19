import { PageShell } from "../components/page-shell";

const PARAMETERS = [
	{
		figure: "50%",
		label: "Of eligible costs, funded — the applicant funds the balance",
	},
	{
		figure: "C$10k–50k",
		label: "Funding per project, on a total project value of C$20,000 to C$100,000",
	},
	{
		figure: "5",
		label: "Target markets can be covered by a single application",
	},
	{
		figure: "12 mo",
		label: "Maximum project length, aligned to the 1 April – 31 March fiscal year",
	},
];

const ELIGIBILITY = [
	{
		h: "A Canadian SME",
		b: "Incorporated or a limited liability partnership in Canada, for-profit, and employing 1 to 500 full-time equivalent employees.",
	},
	{
		h: "Annual revenue between C$300,000 and C$100 million",
		b: "Declared in Canada, in the most recent complete fiscal year. Below or above that band, the programme is not for you.",
	},
	{
		h: "The market must be new to you",
		b: "The test is applied per target market: sales into that market under C$100,000, or under 10% of total sales. Nigeria being new to you is unaffected by how established you are elsewhere.",
	},
	{
		h: "An annual company cap",
		b: "C$99,999 per company per fiscal year across all CanExport SMEs funding.",
	},
];

const COVERED = [
	{
		tag: "Category F",
		h: "Consultants for business, tax and legal advice",
		b: "Professional advice on entering the market — including the corporate, tax and regulatory questions that determine how you set up.",
	},
	{
		tag: "Category G",
		h: "Consultants for market research and business development",
		b: "Market research, feasibility studies, identification of key contacts and business-to-business facilitation in the target market.",
	},
];

const RULES = [
	{
		h: "You apply — we cannot apply for you",
		b: "CanExport applications are made by the applicant company. A consultant cannot submit on your behalf, and the registered contact on the application cannot be a consultant.",
	},
	{
		h: "Any existing relationship with us is disclosed",
		b: "If you have worked with us before applying, that has to be declared in the application. It is a disclosure requirement, not a disqualification.",
	},
	{
		h: "Our travel is not eligible",
		b: "Consultant travel costs cannot be claimed. Your own travel to the market, within the programme's rules, generally can be.",
	},
	{
		h: "Timing is the real constraint",
		b: "Projects have to fall inside the 1 April to 31 March fiscal year, the programme has a finite annual budget — roughly C$31 million for 2026–27 — and intakes can close. Confirm the current intake status before you plan around it.",
	},
];

export default function FundingPage() {
	return (
		<PageShell
			eyebrow="Funding"
			title={
				<>
					The federal government will fund up to{" "}
					<span className="text-brand-orange">half of your market entry.</span>
				</>
			}
			standfirst="CanExport SMEs, run by Canada's Trade Commissioner Service, funds Canadian small and medium enterprises entering new export markets — and its eligible expense categories cover exactly the kind of market research and advisory work a West African entry requires. Most of the companies we speak to either have not heard of it or assume they do not qualify."
		>
			{/* Parameters */}
			<section className="bg-ink pb-24 lg:pb-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<dl className="grid gap-px border-t border-ink-3 sm:grid-cols-2 sm:bg-ink-3 lg:grid-cols-4">
						{PARAMETERS.map((p) => (
							<div key={p.figure} className="bg-ink py-8 sm:px-7">
								<dt className="display-tight text-[2.1rem] font-bold text-paper">
									{p.figure}
								</dt>
								<dd className="mt-3 max-w-[30ch] text-[0.9rem] leading-relaxed text-brand-grey">
									{p.label}
								</dd>
							</div>
						))}
					</dl>
					<p className="mt-6 text-[0.78rem] uppercase tracking-[0.1em] text-brand-grey/60">
						CanExport SMEs 2026–27 applicant's guide, Trade Commissioner Service
					</p>
				</div>
			</section>

			{/* Eligibility */}
			<section className="bg-paper py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
						<div>
							<p className="eyebrow text-brand-orange">Who qualifies</p>
							<h2 className="display-tight mt-5 max-w-[20ch] text-[2rem] font-bold text-ink lg:text-[2.4rem]">
								Four tests, and most mid-market exporters pass them.
							</h2>
							<p className="mt-6 max-w-[46ch] text-[1rem] leading-relaxed text-slate">
								The programme is aimed squarely at established Canadian companies
								expanding into a market they have not yet worked in — which
								describes almost every company that comes to us about Nigeria or
								Ghana.
							</p>
						</div>

						<div className="grid gap-px bg-[#e3e1de] sm:grid-cols-2">
							{ELIGIBILITY.map((e) => (
								<div key={e.h} className="bg-paper p-7">
									<h3 className="font-display text-[1.02rem] font-bold leading-snug text-ink">
										{e.h}
									</h3>
									<p className="mt-3 text-[0.92rem] leading-relaxed text-slate">
										{e.b}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* What it covers */}
			<section className="bg-ink py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<div className="max-w-[56ch]">
						<p className="eyebrow text-brand-grey">What it covers</p>
						<h2 className="display-tight mt-5 text-[1.9rem] font-bold text-paper lg:text-[2.3rem]">
							Two of the eligible expense categories describe our work almost exactly.
						</h2>
						<p className="mt-6 text-[1rem] leading-relaxed text-brand-grey">
							CanExport reimburses a defined list of expense categories. Two of them
							cover professional advisory support in a new market — the substance of a
							West African entry programme.
						</p>
					</div>

					<div className="mt-14 grid gap-px bg-ink-3 lg:grid-cols-2">
						{COVERED.map((c) => (
							<div key={c.tag} className="bg-ink-2 p-8 lg:p-10">
								<span className="eyebrow text-brand-orange">{c.tag}</span>
								<h3 className="display-tight mt-5 text-[1.25rem] font-bold text-paper">
									{c.h}
								</h3>
								<p className="mt-4 text-[0.96rem] leading-relaxed text-brand-grey">
									{c.b}
								</p>
							</div>
						))}
					</div>

					<div className="mt-12 border-l-2 border-brand-orange bg-ink-2 p-8 lg:p-10">
						<p className="display-tight max-w-[52ch] text-[1.2rem] font-semibold leading-snug text-paper lg:text-[1.5rem]">
							Other categories cover market research, travel to the market, trade
							events, adapting marketing materials and intellectual property
							protection. Scoped properly, a serious entry programme can sit largely
							inside eligible expenses.
						</p>
					</div>
				</div>
			</section>

			{/* Rules */}
			<section className="bg-bone py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<div className="max-w-[56ch]">
						<p className="eyebrow text-brand-orange">The rules, stated plainly</p>
						<h2 className="display-tight mt-5 text-[2rem] font-bold text-ink lg:text-[2.4rem]">
							Four constraints. All of them easy to comply with.
						</h2>
						<p className="mt-6 text-[1rem] leading-relaxed text-slate">
							We would rather set these out on a public page than have anyone discover
							them halfway through an application. Note the first one in particular:
							be sceptical of any consultant who offers to run the application for
							you.
						</p>
					</div>

					<div className="mt-14 grid gap-px bg-[#e3e1de] md:grid-cols-2">
						{RULES.map((r) => (
							<div key={r.h} className="bg-bone p-8">
								<h3 className="font-display text-[1.05rem] font-bold leading-snug text-ink">
									{r.h}
								</h3>
								<p className="mt-3 max-w-[52ch] text-[0.94rem] leading-relaxed text-slate">
									{r.b}
								</p>
							</div>
						))}
					</div>

					<div className="mt-12 flex flex-col gap-6 border-t border-[#e3e1de] pt-10 md:flex-row md:items-start md:justify-between">
						<p className="max-w-[74ch] text-[0.85rem] leading-relaxed text-slate/70">
							Summarised from the CanExport SMEs 2026–27 applicant's guide as at
							September 2026. Programme parameters, budgets and intake windows change.
							Confirm the current terms with the Trade Commissioner Service before
							relying on anything here — we do not administer the programme and cannot
							guarantee an outcome.
						</p>
						<a
							href="https://www.tradecommissioner.gc.ca/en/our-solutions/funding-financing-international-business/canexport-smes/applicants-guide-2026-27.html"
							target="_blank"
							rel="noopener noreferrer"
							className="shrink-0 border border-ink px-6 py-3 text-[0.88rem] font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
						>
							Read the official guide →
						</a>
					</div>
				</div>
			</section>
		</PageShell>
	);
}
