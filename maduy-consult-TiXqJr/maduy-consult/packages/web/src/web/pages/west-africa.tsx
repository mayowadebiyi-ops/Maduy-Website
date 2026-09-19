import { PageShell } from "../components/page-shell";

const FIGURES = [
	{
		figure: "C$45.9B",
		label: "Canadian mining assets held in Africa, across 106 companies (2024)",
		source: "Natural Resources Canada",
	},
	{
		figure: "C$15.6B",
		label: "Of that, held in Western Africa, across 46 companies (2024)",
		source: "Natural Resources Canada",
	},
	{
		figure: "~1%",
		label: "Share of Canada's total merchandise trade that goes to Africa (2024)",
		source: "Foreign Policy Research Institute",
	},
	{
		figure: "53 / 20",
		label: "Canadian trade commissioners, across 20 offices in Africa (2025)",
		source: "Global Affairs Canada",
	},
];

const SIGNALS = [
	{
		n: "01",
		title: "The exposure already exists",
		body: "Canadian mining assets in Western Africa stood at C$15.6 billion across 46 companies in 2024, up from C$15.0 billion across 48 companies in 2023. These are Canadian companies with real West African operations today. Nobody has to create demand for the region — it is already on Canadian balance sheets.",
		source: "Natural Resources Canada, Canadian Mining Assets by Country and Region, 2023 and 2024",
	},
	{
		n: "02",
		title: "A Canadian operator is already producing in Nigeria",
		body: "Thor Explorations (TSXV: THX / AIM) operates the wholly-owned Segilola Gold Mine in southwest Nigeria, which produced 91,910 ounces in 2025, with a growth pipeline in Senegal and Côte d'Ivoire. It is the clearest available answer to the question every Canadian board asks first: does anyone Canadian actually do business in Nigeria?",
		source: "Thor Explorations Ltd",
	},
	{
		n: "03",
		title: "The policy direction changed in 2025",
		body: "Canada launched its Africa Strategy in March 2025, reorienting the relationship toward economic cooperation, trade diversification and supply-chain resilience. The Trade Commissioner Service now fields 53 trade commissioners across 20 offices on the continent. This is framing and timing rather than proof of demand — but the institutional support on the Canadian side is materially better than it was.",
		source: "Global Affairs Canada",
	},
	{
		n: "04",
		title: "The gap is the opportunity",
		body: "Africa accounts for just over 1% of Canada's total merchandise trade. Read honestly, that is not evidence of a booming corridor. It is the measure of how little Canadian commercial capacity is pointed at a market of well over a billion people — and the reason a firm with real operating history on both ends has something to sell.",
		source: "Foreign Policy Research Institute, March 2026",
	},
	{
		n: "05",
		title: "The regional bloc is smaller than most decks say",
		body: "ECOWAS now has 12 member states following the withdrawal of Burkina Faso, Mali and Niger on 29 January 2025. It remains a single market of over 400 million people, but any adviser still telling you it has fifteen members has not looked since 2024.",
		source: "ECOWAS, January 2025",
	},
];

const TAX = [
	{
		h: "Withholding tax on professional fees",
		b: "Nigeria applies withholding tax on consultancy and professional fees at 5% for residents and 10% for non-residents. If a Nigerian counterparty pays a Canadian entity directly, the 10% bites. How the engagement is routed determines whether that happens.",
	},
	{
		h: "VAT",
		b: "The standard Nigerian VAT rate is 7.5%, and the Nigeria Tax Act 2025 reworked significant parts of the regime. Anyone quoting you the pre-2025 position is quoting an out-of-date rulebook.",
	},
	{
		h: "The Canada–Nigeria treaty",
		b: "Canada and Nigeria have a double taxation agreement in force, so relief exists. It does not apply automatically — it has to be claimed correctly, with the right residence certification, at the right time.",
	},
];

const SOURCES = [
	{
		label: "Natural Resources Canada — Canadian Mining Assets by Country and Region, 2023 and 2024",
		url: "https://natural-resources.canada.ca/maps-tools-publications/publications/canadian-mining-assets-cmas-country-region-2023-2024-p",
	},
	{
		label: "Global Affairs Canada — Canada's Africa Strategy, March 2025",
		url: "https://international.canada.ca/en/global-affairs/corporate/reports/africa-strategy-2025",
	},
	{
		label: "Global Affairs Canada — Canada and Africa",
		url: "https://www.international.gc.ca/world-monde/international_relations-relations_internationales/africa-afrique/index.aspx?lang=eng",
	},
	{
		label: "Thor Explorations Ltd — Segilola Gold Project",
		url: "https://thorexpl.com/projects-operations/segilola-gold-project/",
	},
	{
		label: "Foreign Policy Research Institute — Canada and Africa: Bridging the Gap Between Potential and Policy, March 2026",
		url: "https://www.fpri.org/article/2026/03/canada-and-africa-bridging-the-gap-between-potential-and-policy/",
	},
	{
		label: "PwC Worldwide Tax Summaries — Nigeria, withholding taxes",
		url: "https://taxsummaries.pwc.com/nigeria/corporate/withholding-taxes",
	},
	{
		label: "PwC Worldwide Tax Summaries — Nigeria, other taxes (VAT)",
		url: "https://taxsummaries.pwc.com/nigeria/corporate/other-taxes",
	},
	{
		label: "EY Global Tax News — Nigeria Tax Act 2025, highlights",
		url: "https://globaltaxnews.ey.com/news/2025-5016-nigeria-tax-act-2025-has-been-signed-highlights",
	},
	{
		label: "Government of Canada Treaty Information — Canada–Nigeria double taxation agreement",
		url: "https://www.treaty-accord.gc.ca/text-texte.aspx?id=102399&Lang=eng",
	},
	{
		label: "MSTA Canada (formerly CAMESE) — What We Do",
		url: "https://mstacanada.ca/about-us/what-we-do/",
	},
];

export default function WestAfricaPage() {
	return (
		<PageShell
			eyebrow="The market"
			title={
				<>
					The case for West Africa,{" "}
					<span className="text-brand-orange">with the sources attached.</span>
				</>
			}
			standfirst="Everything on this page is drawn from public, citable sources — Natural Resources Canada, Global Affairs Canada, company filings and published tax guidance. We would rather show you where the numbers come from than ask you to take a consultancy's word for them."
		>
			{/* Figures */}
			<section className="bg-ink pb-24 lg:pb-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<dl className="grid gap-px border-t border-ink-3 sm:grid-cols-2 sm:bg-ink-3 lg:grid-cols-4">
						{FIGURES.map((s) => (
							<div key={s.figure} className="bg-ink py-8 sm:px-7">
								<dt className="display-tight text-[2.1rem] font-bold text-paper">
									{s.figure}
								</dt>
								<dd className="mt-3 max-w-[30ch] text-[0.9rem] leading-relaxed text-brand-grey">
									{s.label}
								</dd>
								<dd className="mt-2 text-[0.72rem] uppercase tracking-[0.1em] text-brand-grey/60">
									{s.source}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</section>

			{/* Chart */}
			<section className="bg-paper py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
						<div>
							<p className="eyebrow text-brand-orange">The addressable base</p>
							<h2 className="display-tight mt-5 max-w-[20ch] text-[2rem] font-bold text-ink lg:text-[2.5rem]">
								The money is already there.
							</h2>
							<p className="mt-6 max-w-[46ch] text-[1rem] leading-relaxed text-slate">
								C$15.6 billion of Canadian mining assets across 46 companies in
								Western Africa is not a projection or a forecast. It is a published
								federal statistic, and it means the companies we serve are already
								exposed to the region — they are deciding how to operate there, not
								whether the region exists.
							</p>
							<p className="mt-5 max-w-[46ch] text-[1rem] leading-relaxed text-slate">
								Behind every one of those operations sits a supply chain: equipment,
								engineering, logistics, environmental and technical services, much
								of it Canadian. That supply chain is our beachhead.
							</p>
						</div>
						<figure>
							<img
								src="/images/canadian-mining-assets-west-africa.png"
								alt="Bar chart comparing Canadian mining assets held in Africa and Western Africa in 2023 and 2024. Africa total: C$41.0 billion across 107 companies in 2023, rising to C$45.9 billion across 106 companies in 2024. Western Africa: C$15.0 billion across 48 companies in 2023, rising to C$15.6 billion across 46 companies in 2024."
								className="w-full border border-[#e3e1de]"
							/>
						</figure>
					</div>
				</div>
			</section>

			{/* Signals */}
			<section className="bg-ink py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<p className="eyebrow text-brand-grey">What the evidence says</p>
					<h2 className="display-tight mt-5 max-w-[26ch] text-[1.8rem] font-bold text-paper lg:text-[2.3rem]">
						Five things a Canadian board should know before it decides.
					</h2>

					<div className="mt-14 space-y-px bg-ink-3">
						{SIGNALS.map((s) => (
							<div
								key={s.n}
								className="grid gap-4 bg-ink py-8 lg:grid-cols-[6rem_minmax(0,1fr)] lg:gap-8"
							>
								<span className="font-display text-[0.8rem] font-bold tracking-[0.14em] text-brand-orange">
									{s.n}
								</span>
								<div>
									<h3 className="font-display text-[1.15rem] font-bold text-paper">
										{s.title}
									</h3>
									<p className="mt-3 max-w-[76ch] text-[0.96rem] leading-relaxed text-brand-grey">
										{s.body}
									</p>
									<p className="mt-3 text-[0.75rem] uppercase tracking-[0.1em] text-brand-grey/60">
										{s.source}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Tax detail */}
			<section className="bg-bone py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<div className="max-w-[54ch]">
						<p className="eyebrow text-brand-orange">The detail that costs money</p>
						<h2 className="display-tight mt-5 text-[2rem] font-bold text-ink lg:text-[2.4rem]">
							Nigeria: three tax points worth getting right first.
						</h2>
						<p className="mt-6 text-[1rem] leading-relaxed text-slate">
							None of this is exotic. It is simply the kind of detail that is cheap to
							handle before money moves and expensive to unpick afterwards.
						</p>
					</div>

					<div className="mt-14 grid gap-px bg-[#e3e1de] lg:grid-cols-3">
						{TAX.map((t) => (
							<div key={t.h} className="bg-bone p-8">
								<h3 className="font-display text-[1.05rem] font-bold leading-snug text-ink">
									{t.h}
								</h3>
								<p className="mt-3 text-[0.94rem] leading-relaxed text-slate">
									{t.b}
								</p>
							</div>
						))}
					</div>

					<p className="mt-10 max-w-[80ch] text-[0.85rem] leading-relaxed text-slate/70">
						General information current as at September 2026, drawn from published
						sources. It is not tax or legal advice and should not be relied on for any
						transaction. Legal advice is provided solely by Ehinlaiye Law Professional
						Corporation under separate retainer.
					</p>
				</div>
			</section>

			{/* Sources */}
			<section className="bg-paper py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<p className="eyebrow text-brand-orange">Sources</p>
					<h2 className="display-tight mt-5 max-w-[26ch] text-[1.8rem] font-bold text-ink lg:text-[2.2rem]">
						Check any of it yourself.
					</h2>
					<ul className="mt-12 grid gap-px bg-[#e3e1de] md:grid-cols-2">
						{SOURCES.map((s) => (
							<li key={s.url} className="bg-paper p-6">
								<a
									href={s.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-[0.92rem] leading-relaxed text-slate underline decoration-[#d5d2ce] underline-offset-4 transition-colors hover:text-brand-orange hover:decoration-brand-orange"
								>
									{s.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</section>
		</PageShell>
	);
}
