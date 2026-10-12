import { Link } from "wouter";

export function Footer() {
	return (
		<footer className="border-t border-ink-3 bg-ink py-14">
			<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
				<div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
					<div>
						<div className="flex items-center gap-3">
							<img src="/images/maduy-mark-mono.svg" alt="" className="h-7 w-7" />
							<span className="font-display text-[0.9rem] font-bold tracking-[0.14em] text-paper">
								MADUY CONSULT
							</span>
						</div>
						<p className="mt-4 text-[0.85rem] tracking-[0.02em] text-brand-grey">
							Strategy &nbsp;•&nbsp; Market Entry &nbsp;•&nbsp; West Africa Execution
						</p>
					</div>

					<div className="flex flex-wrap gap-x-8 gap-y-3">
						<a href="/#what-we-do" className="text-[0.88rem] text-brand-grey transition-colors hover:text-paper">
							What we do
						</a>
						<Link href="/alliance" className="text-[0.88rem] text-brand-grey transition-colors hover:text-paper">
							The Alliance
						</Link>
						<Link href="/west-africa" className="text-[0.88rem] text-brand-grey transition-colors hover:text-paper">
							West Africa
						</Link>
						<Link href="/funding" className="text-[0.88rem] text-brand-grey transition-colors hover:text-paper">
							Funding
						</Link>
						<a href="/#insights" className="text-[0.88rem] text-brand-grey transition-colors hover:text-paper">
							Insights
						</a>
						<a href="/#contact" className="text-[0.88rem] text-brand-grey transition-colors hover:text-paper">
							Contact
						</a>
					</div>
				</div>

				<div className="mt-12 border-t border-ink-3 pt-8">
					<p className="max-w-[92ch] text-[0.82rem] leading-relaxed text-brand-grey/75">
						The Canada–West Africa Expansion Alliance is a collaboration of
						independent professional firms. Legal services are provided solely by
						Ehinlaiye Law Professional Corporation under a separate retainer. The
						specific legal entities engaged for consulting work are identified in
						the relevant engagement documentation.
					</p>
					<p className="mt-3 max-w-[92ch] text-[0.82rem] leading-relaxed text-brand-grey/75">
						Website information is general in nature and does not constitute legal,
						tax, investment, insurance or funding advice.
					</p>
					<p className="mt-6 text-[0.82rem] text-brand-grey/75">
						© {new Date().getFullYear()} Maduy Consult Limited. Toronto &nbsp;•&nbsp; Lagos.
					</p>
				</div>
			</div>
		</footer>
	);
}
