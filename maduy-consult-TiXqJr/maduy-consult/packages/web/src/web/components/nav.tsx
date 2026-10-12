import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const LINKS: { href: string; label: string; page?: boolean }[] = [
	{ href: "/#what-we-do", label: "What we do" },
	{ href: "/alliance", label: "The Alliance", page: true },
	{ href: "/west-africa", label: "West Africa", page: true },
	{ href: "/funding", label: "Funding", page: true },
	{ href: "/#insights", label: "Insights" },
];

export function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [location] = useLocation();
	const isHome = location === "/";

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const solid = scrolled || !isHome;

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
				solid ? "bg-ink/95 backdrop-blur-md border-b border-ink-3" : "bg-transparent"
			}`}
		>
			<div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-6 lg:px-10">
				<Link href="/" className="flex items-center gap-3">
					<img src="/images/maduy-mark-mono.svg" alt="" className="h-8 w-8" />
					<span className="font-display text-[0.95rem] font-bold tracking-[0.14em] text-paper">
						MADUY CONSULT
					</span>
				</Link>

				<nav className="hidden items-center gap-7 lg:flex">
					{LINKS.map((l) =>
						l.page ? (
							<Link
								key={l.href}
								href={l.href}
								className={`text-[0.9rem] font-medium transition-colors hover:text-paper ${
									location === l.href ? "text-paper" : "text-brand-grey"
								}`}
							>
								{l.label}
							</Link>
						) : (
							<a
								key={l.href}
								href={l.href}
								className="text-[0.9rem] font-medium text-brand-grey transition-colors hover:text-paper"
							>
								{l.label}
							</a>
						),
					)}
					<a
						href="/#contact"
						className="border border-brand-orange px-5 py-2.5 text-[0.85rem] font-semibold tracking-[0.04em] text-brand-orange transition-colors hover:bg-brand-orange hover:text-paper"
					>
						Discuss your opportunity
					</a>
				</nav>

				<button
					type="button"
					aria-label={open ? "Close menu" : "Open menu"}
					onClick={() => setOpen((v) => !v)}
					className="text-paper lg:hidden"
				>
					{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
				</button>
			</div>

			{open && (
				<div className="border-t border-ink-3 bg-ink px-6 pb-6 lg:hidden">
					{LINKS.map((l) =>
						l.page ? (
							<Link
								key={l.href}
								href={l.href}
								onClick={() => setOpen(false)}
								className="block border-b border-ink-3 py-4 text-[0.95rem] text-brand-grey"
							>
								{l.label}
							</Link>
						) : (
							<a
								key={l.href}
								href={l.href}
								onClick={() => setOpen(false)}
								className="block border-b border-ink-3 py-4 text-[0.95rem] text-brand-grey"
							>
								{l.label}
							</a>
						),
					)}
					<a
						href="/#contact"
						onClick={() => setOpen(false)}
						className="mt-5 block border border-brand-orange px-5 py-3 text-center text-[0.9rem] font-semibold text-brand-orange"
					>
						Discuss your opportunity
					</a>
				</div>
			)}
		</header>
	);
}
