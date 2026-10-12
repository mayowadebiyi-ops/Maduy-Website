import { PageShell } from "../components/page-shell";

const FIGURES = [
	{
		figure: "C$18.7B",
		label: "Canada–Africa two-way merchandise trade in 2025",
		source: "Global Affairs Canada",
	},
	{
		figure: "C$15.6B",
		label: "Canadian mining assets held in Western Africa in 2024",
		source: "Natural Resources Canada",
	},
	{
		figure: "C$833M",
		label: "Canadian merchandise exports to Nigeria in 2025",
		source: "Global Affairs Canada",
	},
	{
		figure: "C$427M",
		label: "Canadian merchandise exports to Ghana in 2025",
		source: "Global Affairs Canada",
	},
];

const SIGNALS = [
	{
		n: "01",
		title: "The Canada–Africa commercial relationship is accelerating",
		body: "Canada–Africa two-way merchandise trade reached C$18.7 billion in 2025, up 22.5% from 2024. Canadian merchandise exports to Africa also increased during the year. The corridor remains underdeveloped relative to its potential, but it is moving in the right direction.",
		source: "Global Affairs Canada, Annual State of Trade 2025",
	},
	{
		n: "02",
		title: "The mining base already exists",
		body: "Natural Resources Canada reported C$15.607 billion of Canadian mining assets in Western Africa in 2024, held by 46 Canadian companies. That figure describes companies holding mining assets, not 46 operating mines — an important distinction when sizing the addressable supplier market.",
		source: "Natural Resources Canada, Canadian Mining Assets 2023–2024",
	},
	{
		n: "03",
		title: "Nigeria is the primary opportunity in this programme",
		body: "Nigeria combines producing gold operations with broader opportunities in lithium and rare-metal pegmatites, tin, tantalum/niobium, lead-zinc, iron ore, barite and industrial minerals. Government-led exploration also covers emerging critical-mineral targets including nickel, cobalt, copper, rare earths and platinum-group metals. For several of these commodities, the near-term supplier opportunity is in exploration, geoscience, drilling, assay and processing technology rather than mine production.",
		source: "Nigerian Geological Survey Agency and NIMEP",
	},
	{
		n: "04",
		title: "Ghana is an established complementary mining platform",
		body: "Ghana remains one of Africa's established gold producers and also has operating manganese and bauxite sectors, an emerging lithium development pipeline, and recognised iron-ore and industrial-mineral potential. For Canadian suppliers, the market is often less about basic entry and more about finding a defined technical or commercial fit.",
		source: "Ghana Minerals Commission",
	},
	{
		n: "05",
		title: "Policy support helps — but it does not replace execution",
		body: "Canada's Africa Strategy, launched in March 2025, places greater emphasis on trade, investment, supply-chain resilience and economic cooperation. The opportunity still has to be converted into customers, partners, contracts, local support and repeat business.",
		source: "Global Affairs Canada, Canada's Africa Strategy",
	},
];

const TAX = [
	{
		h: "Withholding tax on professional fees",
		b: "For consultancy, technical, management and professional fees, published Nigerian guidance generally applies 5% withholding for resident recipients and 10% for non-resident recipients, subject to the transaction, taxpayer status and any applicable treaty relief.",
	},
	{
		h: "VAT",
		b: "Nigeria's standard VAT rate remains 7.5%. The tax reform enacted in 2025 changed several aspects of the wider regime, so transaction-specific treatment should be checked before implementation.",
	},
	{
		h: "DTA and FIPA are not the same thing",
		b: "The Canada–Nigeria income tax treaty is in force. The Canada–Nigeria Foreign Investment Promotion and Protection Agreement was signed in 2014 but has not entered into force. Neither should be described as providing protection beyond its actual legal effect.",
	},
];

const SOURCES = [
	{
		label: "Global Affairs Canada — Annual State of Trade 2025",
		url: "https://international.canada.ca/en/global-affairs/corporate/reports/chief-economist/annual/2025",
	},
	{
		label: "Natural Resources Canada — Canadian Mining Assets by Country and Region, 2023 and 2024",
		url: "https://natural-resources.canada.ca/maps-tools-publications/publications/canadian-mining-assets-cmas-country-region-2023-2024-p",
	},
	{
		label: "Global Affairs Canada — Canada's Africa Strategy",
		url: "https://international.canada.ca/en/global-affairs/corporate/reports/africa-strategy-2025",
	},
	{
		label: "Nigerian Geological Survey Agency — Mineral Exploration & Evaluation",
		url: "https://ngsa.gov.ng/mineral-exploration-evaluation/",
	},
	{
		label: "Nigerian Geological Survey Agency — National Integrated Mineral Exploration Programme",
		url: "https://ngsa.gov.ng/nimep/",
	},
	{
		label: "Ghana Minerals Commission — Minerals in Ghana",
		url: "https://www.mincom.gov.gh/minerals-in-ghana/",
	},
	{
		label: "Ghana Minerals Commission — Operating Mines",
		url: "https://www.mincom.gov.gh/operating-mines/",
	},
	{
		label: "PwC Worldwide Tax Summaries — Nigeria, withholding taxes",
		url: "https://taxsummaries.pwc.com/nigeria/corporate/withholding-taxes",
	},
	{
		label: "Government of Canada — Tax treaties in force",
		url: "https://www.canada.ca/en/department-finance/programs/tax-policy/tax-treaties/in-force.html",
	},
	{
		label: "UNCTAD Investment Policy Hub — Canada investment agreements",
		url: "https://investmentpolicy.unctad.org/international-investment-agreements/countries/35/canada",
	},
];

export default function WestAfricaPage() {
	return (
		<PageShell
			eyebrow="The market"
			title={
				<>
					West African opportunity,{" "}
					<span className="text-brand-orange">with the evidence attached.</span>
				</>
			}
			standfirst="Our current commercial focus is Nigeria first, with Ghana as an established complementary mining market. The opportunity is multi-mineral and supplier-led — not a gold-only thesis."
		>
			<section className="bg-ink pb-24 lg:pb-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<dl className="grid gap-px border-t border-ink-3 sm:grid-cols-2 sm:bg-ink-3 lg:grid-cols-4">
						{FIGURES.map((s) => (
							<div key={s.figure} className="bg-ink py-8 sm:px-7">
								<dt className="display-tight text-[2.1rem] font-bold text-paper">{s.figure}</dt>
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

			<section className="bg-paper py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
						<div>
							<p className="eyebrow text-brand-orange">The addressable base</p>
							<h2 className="display-tight mt-5 max-w-[22ch] text-[2rem] font-bold text-ink lg:text-[2.5rem]">
								Canadian mining exposure is already material.
							</h2>
							<p className="mt-6 max-w-[50ch] text-[1rem] leading-relaxed text-slate">
								C$15.6 billion of Canadian mining assets in Western Africa provides a
								real commercial base for equipment, engineering, technology and
								services. The supplier opportunity, however, depends on matching a
								company's capability to specific projects and buyers.
							</p>
							<p className="mt-5 max-w-[50ch] text-[1rem] leading-relaxed text-slate">
								That is why we distinguish between verified activity, market fit and
								commercial intent rather than treating every company name as a prospect.
							</p>
						</div>
						<figure>
							<img
								src="/images/canadian-mining-assets-west-africa.png"
								alt="Bar chart comparing Canadian mining assets held in Africa and Western Africa in 2023 and 2024."
								className="w-full border border-[#e3e1de]"
							/>
						</figure>
					</div>
				</div>
			</section>

			<section className="bg-ink py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<p className="eyebrow text-brand-grey">What the evidence says</p>
					<h2 className="display-tight mt-5 max-w-[28ch] text-[1.8rem] font-bold text-paper lg:text-[2.3rem]">
						Five points to understand before committing time or capital.
					</h2>

					<div className="mt-14 space-y-px bg-ink-3">
						{SIGNALS.map((s) => (
							<div key={s.n} className="grid gap-4 bg-ink py-8 lg:grid-cols-[6rem_minmax(0,1fr)] lg:gap-8">
								<span className="font-display text-[0.8rem] font-bold tracking-[0.14em] text-brand-orange">
									{s.n}
								</span>
								<div>
									<h3 className="font-display text-[1.15rem] font-bold text-paper">{s.title}</h3>
									<p className="mt-3 max-w-[78ch] text-[0.96rem] leading-relaxed text-brand-grey">{s.body}</p>
									<p className="mt-3 text-[0.75rem] uppercase tracking-[0.1em] text-brand-grey/60">{s.source}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="bg-bone py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<div className="max-w-[58ch]">
						<p className="eyebrow text-brand-orange">Nigeria — structural points</p>
						<h2 className="display-tight mt-5 text-[2rem] font-bold text-ink lg:text-[2.4rem]">
							Three issues worth checking early.
						</h2>
						<p className="mt-6 text-[1rem] leading-relaxed text-slate">
							These are general public-source observations, not transaction-specific
							tax or legal advice.
						</p>
					</div>

					<div className="mt-14 grid gap-px bg-[#e3e1de] lg:grid-cols-3">
						{TAX.map((t) => (
							<div key={t.h} className="bg-bone p-8">
								<h3 className="font-display text-[1.05rem] font-bold leading-snug text-ink">{t.h}</h3>
								<p className="mt-3 text-[0.94rem] leading-relaxed text-slate">{t.b}</p>
							</div>
						))}
					</div>

					<p className="mt-10 max-w-[84ch] text-[0.85rem] leading-relaxed text-slate/70">
						Market data updated October 2026. Legal services are provided solely
						by Ehinlaiye Law Professional Corporation under a separate retainer.
						Company-specific tax and legal advice should be obtained before implementation.
					</p>
				</div>
			</section>

			<section className="bg-paper py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<p className="eyebrow text-brand-orange">Sources</p>
					<h2 className="display-tight mt-5 max-w-[26ch] text-[1.8rem] font-bold text-ink lg:text-[2.2rem]">
						Check the underlying sources yourself.
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
