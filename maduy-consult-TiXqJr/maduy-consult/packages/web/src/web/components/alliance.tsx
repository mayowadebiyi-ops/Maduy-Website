import { Link } from "wouter";

const FIRMS = [
	{
		firm: "Maduy Consult Limited",
		role: "Lead firm",
		principal: "Olayinka Adebiyi",
		title: "Managing Director / Lead Consultant",
		bio: "A career in Nigerian banking through the sector's consolidation, including service as Acting Managing Director of Global Bank. Now advises from Toronto and Lagos on financial advisory, corporate finance and performance improvement.",
		scope: "Origination, engagement leadership, finance, governance and West African execution.",
	},
	{
		firm: "AFS Consulting Network",
		role: "Strategy and implementation",
		principal: "Adekunle Salau",
		title: "Principal",
		bio: "Former consulting partner at PwC and former Partner-in-Charge and Advisory Leader for West Africa at EY. Two decades building and running large advisory practices across the region.",
		scope: "Strategy, transformation and implementation, subcontracted under the lead engagement.",
	},
	{
		firm: "Ehinlaiye Law Professional Corporation",
		role: "Ontario legal counsel",
		principal: "Olutoyin Ehinlaiye",
		title: "Partner",
		bio: "Called to the Nigerian Bar in 1987 and to the Ontario Bar in 2012. Executive Director at Intercontinental Bank and Managing Director of Gateway Bank in Lagos, and a participant in the four-bank merger that formed Intercontinental. Corporate and commercial law, mergers and acquisitions and real estate practice in Ontario.",
		scope: "Legal, documentation and governance — retained directly by the client under its own engagement letter.",
	},
];

const MECHANICS = [
	{
		n: "01",
		title: "One contract, in Canada",
		body: "You sign a single master services agreement with Maduy Consult Limited, in Canadian dollars, governed by Ontario law. No naira invoice ever reaches your accounts payable.",
	},
	{
		n: "02",
		title: "One accountable lead",
		body: "Maduy Consult leads every engagement and subcontracts the strategy and implementation scope to AFS Consulting Network. You have one point of accountability, not a committee.",
	},
	{
		n: "03",
		title: "Legal, separately and properly",
		body: "Ehinlaiye Law Professional Corporation is retained directly by you under its own engagement letter. Legal fees never flow through the advisory contract.",
	},
];

export function Alliance() {
	return (
		<section id="alliance" className="relative overflow-hidden bg-ink py-24 lg:py-32">
			<div className="hex-field absolute inset-0 opacity-40" aria-hidden="true" />

			<div className="relative mx-auto max-w-[1240px] px-6 lg:px-10">
				<div className="max-w-[54ch]">
					<p className="eyebrow text-brand-orange">The Alliance</p>
					<h2 className="display-tight mt-5 text-[2rem] font-bold text-paper lg:text-[2.9rem]">
						Three independent firms. One line of accountability.
					</h2>
					<p className="mt-6 text-[1.02rem] leading-relaxed text-brand-grey">
						Most Canadian companies approaching West Africa are offered one of two
						things: an offshore consultant with no recourse, or a global firm that sells
						the engagement and staffs it with juniors. This is neither.
					</p>
				</div>

				{/* Firms */}
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

				{/* How it works */}
				<div className="mt-24 grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
					<div>
						<p className="eyebrow text-brand-grey">How it works</p>
						<h3 className="display-tight mt-5 text-[1.7rem] font-bold text-paper lg:text-[2.1rem]">
							You contract in Canada. We carry the complexity.
						</h3>
					</div>

					<div className="space-y-px bg-ink-3">
						{MECHANICS.map((m) => (
							<div
								key={m.n}
								className="flex gap-6 bg-ink py-7 lg:gap-8"
							>
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

				{/* Capacity */}
				<div className="mt-20 border-l-2 border-brand-orange bg-ink-2 p-8 lg:p-12">
					<p className="display-tight max-w-[46ch] text-[1.35rem] font-semibold leading-snug text-paper lg:text-[1.7rem]">
						Principals lead every engagement — they do not sell it and hand it to
						juniors. We take two or three engagements at a time so that stays true.
					</p>
					<Link
						href="/alliance"
						className="mt-8 inline-block border-b border-brand-orange pb-1 text-[0.92rem] font-semibold text-paper transition-colors hover:text-brand-orange"
					>
						How the alliance is structured, in full →
					</Link>
				</div>
			</div>
		</section>
	);
}
