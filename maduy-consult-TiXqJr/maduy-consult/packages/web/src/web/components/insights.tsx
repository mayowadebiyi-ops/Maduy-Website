import { useState, type FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";
import { useGuideSignup } from "../queries/guide";

const CONTENTS = [
	"Nigeria-first market entry, with Ghana as an established complementary mining market",
	"Multi-mineral opportunities beyond gold, including lithium, tin, tantalum/niobium, lead-zinc, iron ore, manganese and bauxite",
	"Entry routes, local-content readiness and partner due diligence",
	"A practical Market Opportunity Diagnostic and 90-day action framework",
];

export function Insights() {
	const [email, setEmail] = useState("");
	const [company, setCompany] = useState("");
	const [emailError, setEmailError] = useState("");
	const signup = useGuideSignup();

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (signup.isPending || signup.isSuccess) return;

		const value = email.trim();
		if (!value) {
			setEmailError("Enter an email and we'll send it over.");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
			setEmailError("That doesn't look like a valid email address.");
			return;
		}

		setEmailError("");
		signup.mutate({ email: value, company: company.trim() || undefined });
	};

	return (
		<section id="insights" className="bg-bone py-24 lg:py-32">
			<div className="mx-auto max-w-[1240px] px-6 lg:px-10">
				<p className="eyebrow text-brand-orange">Insights</p>
				<h2 className="display-tight mt-5 max-w-[22ch] text-[2rem] font-bold text-ink lg:text-[2.9rem]">
					Practical guidance for a real market-entry decision.
				</h2>

				<div className="mt-14 grid gap-px bg-[#e3e1de] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
					<div className="bg-paper p-9 lg:p-12">
						<div className="flex items-center gap-3">
							<span className="bg-brand-orange px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-paper">
								Available now
							</span>
						</div>
						<h3 className="display-tight mt-7 max-w-[26ch] text-[1.6rem] font-bold text-ink lg:text-[2rem]">
							The Canadian Mining Suppliers' West Africa Market Entry Guide
						</h3>
						<p className="mt-3 text-[0.92rem] font-semibold text-brand-orange">
							Nigeria & Ghana: Opportunities, Partnerships and Practical Execution
						</p>
						<p className="mt-5 max-w-[54ch] text-[1rem] leading-relaxed text-slate">
							A concise guide for Canadian equipment, technology, engineering and
							service companies assessing a West African mining opportunity.
						</p>

						<ul className="mt-9 space-y-3.5">
							{CONTENTS.map((c) => (
								<li key={c} className="flex gap-3.5 text-[0.94rem] leading-relaxed text-slate">
									<span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 bg-brand-orange" aria-hidden="true" />
									{c}
								</li>
							))}
						</ul>
					</div>

					<div className="flex flex-col justify-center bg-ink p-9 lg:p-12">
						{signup.isSuccess ? (
							<div>
								<Check className="h-8 w-8 text-brand-orange" />
								<h4 className="display-tight mt-6 text-[1.35rem] font-bold text-paper">
									One last step.
								</h4>
								<p className="mt-4 text-[0.94rem] leading-relaxed text-brand-grey">
									Your email app has opened with the request — press send and we'll
									reply with the guide. Nothing else — we don't add you to a mailing list.
								</p>
							</div>
						) : (
							<form onSubmit={onSubmit} noValidate>
								<h4 className="display-tight text-[1.35rem] font-bold text-paper">
									Request the guide.
								</h4>
								<p className="mt-3.5 text-[0.92rem] leading-relaxed text-brand-grey">
									Tell us where to send it.
								</p>

								<div className="mt-8 space-y-3">
									<div>
										<input
											type="email"
											required
											value={email}
											onChange={(e) => {
												setEmail(e.target.value);
												if (emailError) setEmailError("");
											}}
											placeholder="Work email"
											aria-label="Work email"
											aria-invalid={!!emailError}
											className={`w-full border bg-ink-2 px-4 py-3.5 text-[0.94rem] text-paper placeholder:text-brand-grey/70 focus:border-brand-orange focus:outline-none ${
												emailError ? "border-brand-orange" : "border-ink-3"
											}`}
										/>
										{emailError && <p className="mt-1.5 text-[0.8rem] text-brand-orange">{emailError}</p>}
									</div>
									<input
										type="text"
										value={company}
										onChange={(e) => setCompany(e.target.value)}
										placeholder="Company (optional)"
										aria-label="Company"
										className="w-full border border-ink-3 bg-ink-2 px-4 py-3.5 text-[0.94rem] text-paper placeholder:text-brand-grey/70 focus:border-brand-orange focus:outline-none"
									/>
								</div>

								<button
									type="submit"
									disabled={signup.isPending}
									className="mt-4 flex w-full items-center justify-center gap-2 bg-brand-orange px-6 py-3.5 text-[0.9rem] font-semibold tracking-[0.03em] text-paper transition-opacity hover:opacity-90 disabled:opacity-60"
								>
									{signup.isPending && <Loader2 className="h-4 w-4 animate-spin" />}
									{signup.isPending ? "Sending…" : "Request the guide"}
								</button>

								{signup.isError && (
									<p className="mt-3.5 text-[0.85rem] text-brand-orange">
										That didn't go through. Check the email address and try again.
									</p>
								)}
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
