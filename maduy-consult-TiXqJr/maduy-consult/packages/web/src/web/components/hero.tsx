const STATS = [
	{
		figure: "C$15.6B",
		label: "Canadian mining assets in West Africa, held by 46 companies",
		source: "Natural Resources Canada, 2024",
	},
	{
		figure: "~1%",
		label: "Share of Canada's merchandise trade that goes to Africa",
		source: "That gap is the opportunity",
	},
	{
		figure: "12",
		label: "ECOWAS member states, a single market of over 400 million people",
		source: "As of 2025",
	},
];

export function Hero() {
	return (
		<section id="top" className="relative overflow-hidden bg-ink">
			<div className="hex-field absolute inset-0 opacity-70" aria-hidden="true" />
			<div
				className="pointer-events-none absolute -right-24 top-10 hidden w-[560px] opacity-[0.06] lg:block"
				aria-hidden="true"
			>
				<img src="/images/maduy-mark-mono.svg" alt="" className="w-full" />
			</div>
			<div
				className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink"
				aria-hidden="true"
			/>

			<div className="relative mx-auto max-w-[1240px] px-6 pb-24 pt-40 lg:px-10 lg:pb-32 lg:pt-52">
				<p className="eyebrow text-brand-grey">Toronto &nbsp;•&nbsp; Lagos</p>

				<h1 className="display-tight mt-7 max-w-[19ch] text-[2.6rem] font-extrabold text-paper sm:text-[3.4rem] lg:text-[4.4rem]">
					The senior West African team you can put to work
					<span className="text-brand-orange">
						{" "}
						before you can afford to build one.
					</span>
				</h1>

				<div className="mt-9 flex max-w-[62ch] gap-5">
					<span className="mt-1 w-[3px] shrink-0 bg-brand-orange" aria-hidden="true" />
					<p className="text-[1.05rem] leading-relaxed text-brand-grey lg:text-[1.15rem]">
						Maduy Consult helps Canadian companies enter and grow in Nigeria and West
						Africa. You contract in Canada, in Canadian dollars, under Ontario law. We
						carry the complexity on the ground.
					</p>
				</div>

				<div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
					<a
						href="#contact"
						className="bg-brand-orange px-8 py-4 text-center text-[0.92rem] font-semibold tracking-[0.03em] text-paper transition-opacity hover:opacity-90"
					>
						Start a conversation
					</a>
					<a
						href="#alliance"
						className="border border-ink-3 px-8 py-4 text-center text-[0.92rem] font-semibold tracking-[0.03em] text-paper transition-colors hover:border-brand-grey"
					>
						How the alliance works
					</a>
				</div>

				<dl className="mt-20 grid gap-px border-t border-ink-3 pt-px sm:grid-cols-3 sm:bg-ink-3">
					{STATS.map((s) => (
						<div key={s.figure} className="bg-ink px-0 py-8 sm:px-7">
							<dt className="display-tight text-[2.3rem] font-bold text-paper">
								{s.figure}
							</dt>
							<dd className="mt-3 max-w-[30ch] text-[0.92rem] leading-relaxed text-brand-grey">
								{s.label}
							</dd>
							<dd className="mt-2 text-[0.75rem] uppercase tracking-[0.1em] text-brand-grey/60">
								{s.source}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}
