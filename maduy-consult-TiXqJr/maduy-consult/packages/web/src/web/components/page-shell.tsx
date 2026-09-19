import { useEffect } from "react";
import type { ReactNode } from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";

export function PageShell({
	eyebrow,
	title,
	standfirst,
	children,
}: {
	eyebrow: string;
	title: ReactNode;
	standfirst: string;
	children: ReactNode;
}) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="min-h-screen bg-ink">
			<Nav />
			<main>
				<section className="relative overflow-hidden bg-ink">
					<div className="hex-field absolute inset-0 opacity-50" aria-hidden="true" />
					<div className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-36 lg:px-10 lg:pb-24 lg:pt-44">
						<p className="eyebrow text-brand-orange">{eyebrow}</p>
						<h1 className="display-tight mt-6 max-w-[22ch] text-[2.3rem] font-extrabold text-paper sm:text-[3rem] lg:text-[3.6rem]">
							{title}
						</h1>
						<div className="mt-8 flex max-w-[68ch] gap-5">
							<span
								className="mt-1 w-[3px] shrink-0 bg-brand-orange"
								aria-hidden="true"
							/>
							<p className="text-[1.02rem] leading-relaxed text-brand-grey lg:text-[1.1rem]">
								{standfirst}
							</p>
						</div>
					</div>
				</section>
				{children}
				<CtaBand />
			</main>
			<Footer />
		</div>
	);
}

export function CtaBand() {
	return (
		<section className="border-t border-ink-3 bg-ink py-20 lg:py-24">
			<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
				<div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
					<div>
						<p className="eyebrow text-brand-grey">Next step</p>
						<h2 className="display-tight mt-5 max-w-[24ch] text-[1.8rem] font-bold text-paper lg:text-[2.4rem]">
							Tell us what you are weighing up.
						</h2>
						<p className="mt-5 max-w-[56ch] text-[1rem] leading-relaxed text-brand-grey">
							A first conversation costs nothing and usually settles whether West
							Africa is a real option for you this year or not.
						</p>
					</div>
					<a
						href="/#contact"
						className="shrink-0 bg-brand-orange px-8 py-4 text-center text-[0.92rem] font-semibold tracking-[0.03em] text-paper transition-opacity hover:opacity-90"
					>
						Start a conversation
					</a>
				</div>
			</div>
		</section>
	);
}
