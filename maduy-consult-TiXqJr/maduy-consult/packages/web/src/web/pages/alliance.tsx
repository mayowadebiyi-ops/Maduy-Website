import { PageShell } from "../components/page-shell";

const FIRMS = [
	{
		firm: "Maduy Consult Limited",
		role: "Lead firm — prime contractor",
		principal: "Olayinka Adebiyi",
		title: "Managing Director / Lead Consultant",
		scope: [
			"Holds the client contract and carries the programme",
			"Origination, engagement leadership and coordination",
			"Finance, governance and West African execution",
		],
	},
	{
		firm: "AFS Consulting Network",
		role: "Strategy and implementation",
		principal: "Adekunle Salau",
		title: "Principal",
		scope: [
			"Strategy, transformation and implementation scope",
			"Subcontracted under the lead engagement",
			"Two decades building and running large advisory practices in the region",
		],
	},
	{
		firm: "Ehinlaiye Law Professional Corporation",
		role: "Ontario legal counsel",
		principal: "Olutoyin Ehinlaiye",
		title: "Partner",
		scope: [
			"Legal, documentation and governance",
			"Retained directly by the client, under its own engagement letter",
			"Corporate, commercial, M&A and real estate practice — called in Nigeria in 1987 and Ontario in 2012",
		],
	},
];

const WHY = [
	{
		n: "01",
		title: "One point of accountability",
		body: "You are not managing a committee of vendors across two continents. One firm holds the programme, sets the plan and answers for the result — and subcontracts the specialist scope behind that single line.",
	},
	{
		n: "02",
		title: "Canadian recourse, Canadian paperwork",
		body: "The contract is Canadian, the currency is Canadian, the governing law is Ontario. That is not a formality. It is the difference between a commercial disagreement you can actually resolve and one you cannot.",
	},
	{
		n: "03",
		title: "Principals do the work",
		body: "Every engagement is led by one of the three principals. We take two or three engagements at a time so that remains literally true rather than a claim on a website.",
	},
	{
		n: "04",
		title: "Local counsel, coordinated not resold",
		body: "West African local counsel is engaged per market as the work requires, and coordinated alongside the programme. It is never sub-contracted through the advisory scope.",
	},
];

const NOT = [
	"We are not a partnership, a joint venture or a merged firm. The three firms are separate legal entities and each is responsible for its own work.",
	"The alliance does not provide legal services. Legal services are provided solely by Ehinlaiye Law Professional Corporation, under a separate retainer signed directly with you.",
	"Legal fees never flow through the advisory contract, and are never marked up by it.",
	"We do not take on more work than the principals can lead personally. When we are full, we will tell you when we are next free.",
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
					One coordinated programme.{" "}
					<span className="text-brand-orange">
						Three separately accountable firms.
					</span>
				</>
			}
			standfirst="Most Canadian companies approaching West Africa are offered one of two things: an offshore consultant with no recourse, or a global firm that sells the engagement and staffs it with juniors. This page sets out exactly how our alternative is put together, who is responsible for what, and what you sign."
		>
			{/* Structure */}
			<section className="bg-paper py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<p className="eyebrow text-brand-orange">How you contract</p>
					<h2 className="display-tight mt-5 max-w-[24ch] text-[2rem] font-bold text-ink lg:text-[2.5rem]">
						You sign in Canada. We carry the complexity.
					</h2>

					<div className="mt-14 grid gap-px bg-[#e3e1de] lg:grid-cols-3">
						{[
							{
								n: "01",
								h: "One master services agreement",
								b: "A single agreement with Maduy Consult Limited, in Canadian dollars, governed by Ontario law. No naira invoice ever reaches your accounts payable.",
							},
							{
								n: "02",
								h: "One accountable lead",
								b: "Maduy Consult leads the engagement and subcontracts the strategy and implementation scope to AFS Consulting Network. You deal with the lead, not the chain behind it.",
							},
							{
								n: "03",
								h: "Legal, separately and properly",
								b: "You retain Ehinlaiye Law Professional Corporation directly under its own engagement letter. Its fees and its duty of care sit with you, not with us.",
							},
						].map((m) => (
							<div key={m.n} className="bg-paper p-8">
								<span className="font-display text-[0.8rem] font-bold tracking-[0.14em] text-brand-orange">
									{m.n}
								</span>
								<h3 className="mt-4 font-display text-[1.1rem] font-bold leading-snug text-ink">
									{m.h}
								</h3>
								<p className="mt-3 text-[0.94rem] leading-relaxed text-slate">
									{m.b}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Diagram */}
			<section className="bg-ink py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<p className="eyebrow text-brand-grey">Contracting map</p>
					<h2 className="display-tight mt-5 max-w-[26ch] text-[1.8rem] font-bold text-paper lg:text-[2.2rem]">
						Two engagement lines, kept deliberately separate.
					</h2>

					<div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
						<div>
							<Node
								label="Advisory line"
								title="You — the Canadian company"
								body="A mid-market company with a West African opportunity it does not yet have the people to pursue."
							/>
							<Connector text="Master services agreement" />
							<Node
								title="Maduy Consult Limited — lead"
								body="Prime contractor. Coordination, origination, finance and governance, and execution on the ground."
								accent
							/>
							<Connector text="Subcontract" />
							<Node
								title="AFS Consulting Network"
								body="Strategy, transformation and implementation, delivered under the lead engagement."
							/>
						</div>

						<div>
							<Node
								label="Legal line"
								title="You — the Canadian company"
								body="The same company, contracting separately and directly for legal advice."
							/>
							<Connector text="Separate legal retainer" />
							<Node
								title="Ehinlaiye Law Professional Corporation"
								body="Ontario legal, documentation and governance. Engaged directly by you. Not a marketing party to the alliance."
							/>
							<Connector text="Engaged per market as required" />
							<Node
								title="West African local counsel"
								body="Appointed in-market where the work requires it, coordinated with the programme rather than resold through it."
								dashed
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Firms */}
			<section className="bg-bone py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<p className="eyebrow text-brand-orange">Who does what</p>
					<h2 className="display-tight mt-5 max-w-[24ch] text-[2rem] font-bold text-ink lg:text-[2.5rem]">
						Three firms, three defined scopes.
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
										<li
											key={s}
											className="flex gap-3 text-[0.92rem] leading-relaxed text-slate"
										>
											<span
												className="mt-2 h-px w-3 shrink-0 bg-brand-orange"
												aria-hidden="true"
											/>
											{s}
										</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Why this shape */}
			<section className="bg-ink py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
						<div>
							<p className="eyebrow text-brand-grey">Why this shape</p>
							<h2 className="display-tight mt-5 text-[1.8rem] font-bold text-paper lg:text-[2.2rem]">
								The structure is the product.
							</h2>
							<p className="mt-6 max-w-[42ch] text-[0.98rem] leading-relaxed text-brand-grey">
								Everything a Canadian board worries about in West Africa — recourse,
								accountability, who actually shows up — is answered by how this is
								assembled, not by how it is described.
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

			{/* Where we start */}
			<section className="bg-paper py-24 lg:py-28">
				<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
					<div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
						<div>
							<p className="eyebrow text-brand-orange">Where we concentrate</p>
							<h2 className="display-tight mt-5 max-w-[22ch] text-[2rem] font-bold text-ink lg:text-[2.4rem]">
								Mining supply and services, into Nigeria and Ghana.
							</h2>
							<p className="mt-6 max-w-[52ch] text-[1rem] leading-relaxed text-slate">
								We deliberately lead with one sector rather than claiming all of
								them. Canadian mining companies already hold C$15.6 billion of
								assets across Western Africa, and every one of those operations buys
								equipment, engineering and services. The demand is documented, the
								buyers are named and reachable, and the entry questions are the ones
								we are built to answer.
							</p>
							<p className="mt-5 max-w-[52ch] text-[1rem] leading-relaxed text-slate">
								Energy, cleantech, agri-food and ICT are on the map and not on the
								sales plan. If your opportunity sits outside the beachhead, say so
								and we will tell you honestly whether we are the right firm for it.
							</p>
							<a
								href="/west-africa"
								className="mt-8 inline-block border-b border-brand-orange pb-1 text-[0.92rem] font-semibold text-ink transition-colors hover:text-brand-orange"
							>
								See the evidence behind that →
							</a>
						</div>

						<div className="border-l-2 border-brand-orange bg-bone p-8 lg:p-10">
							<p className="eyebrow text-brand-grey">What we do not do</p>
							<ul className="mt-7 space-y-6">
								{NOT.map((n) => (
									<li
										key={n}
										className="text-[0.95rem] leading-relaxed text-slate"
									>
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
