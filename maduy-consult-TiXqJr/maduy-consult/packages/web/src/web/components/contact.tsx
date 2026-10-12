import { useState, type FormEvent } from "react";
import { Check, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useSubmitContact } from "../queries/contact";

const INTERESTS = [
	"Mining supplier market entry — Nigeria / Ghana",
	"Market Opportunity Diagnostic",
	"Market entry — Nigeria",
	"Market entry — wider West Africa",
	"Partner or distributor assessment",
	"Governance / operating-model support",
	"Alliance / referral collaboration",
	"Something else",
];

export function Contact() {
	const [form, setForm] = useState({
		name: "",
		company: "",
		email: "",
		interest: "",
		message: "",
	});
	const [errors, setErrors] = useState<Record<string, string>>({});
	const submit = useSubmitContact();

	const set = (k: keyof typeof form) => (v: string) => {
		setForm((f) => ({ ...f, [k]: v }));
		setErrors((e) => (e[k] ? { ...e, [k]: "" } : e));
	};

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (submit.isPending || submit.isSuccess) return;

		const next: Record<string, string> = {};
		if (!form.name.trim()) next.name = "Please tell us your name.";
		if (!form.email.trim()) next.email = "We need an email to reply to.";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
			next.email = "That doesn't look like a valid email address.";
		if (!form.message.trim()) next.message = "Tell us briefly what you're considering.";

		setErrors(next);
		if (Object.keys(next).length > 0) return;

		submit.mutate({
			name: form.name.trim(),
			company: form.company.trim() || undefined,
			email: form.email.trim(),
			interest: form.interest || undefined,
			message: form.message.trim(),
		});
	};

	const field =
		"w-full border border-ink-3 bg-ink-2 px-4 py-3.5 text-[0.94rem] text-paper placeholder:text-brand-grey/70 focus:border-brand-orange focus:outline-none";
	const errNote = "mt-1.5 text-[0.8rem] text-brand-orange";

	return (
		<section id="contact" className="relative overflow-hidden bg-ink py-24 lg:py-32">
			<div className="hex-field absolute inset-0 opacity-40" aria-hidden="true" />

			<div className="relative mx-auto max-w-[1240px] px-6 lg:px-10">
				<div className="grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
					<div>
						<p className="eyebrow text-brand-orange">Contact</p>
						<h2 className="display-tight mt-5 max-w-[17ch] text-[2rem] font-bold text-paper lg:text-[2.9rem]">
							Start with the opportunity.
						</h2>
						<p className="mt-6 max-w-[48ch] text-[1.02rem] leading-relaxed text-brand-grey">
							A first discussion is usually enough to determine whether an
							opportunity deserves a structured assessment. Tell us what you are
							considering and what is currently blocking a decision.
						</p>

						<div className="mt-12 space-y-px bg-ink-3">
							<div className="flex gap-4 bg-ink py-6">
								<MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-orange" />
								<div>
									<p className="font-display text-[0.95rem] font-semibold text-paper">
										Toronto &nbsp;•&nbsp; Lagos
									</p>
									<p className="mt-2 max-w-[34ch] text-[0.9rem] leading-relaxed text-brand-grey">
										House 8, Riviera Court, Yesuf Abiodun Way, Oniru Estate,
										Victoria Island, Lagos, Nigeria
									</p>
								</div>
							</div>

							<div className="flex gap-4 bg-ink py-6">
								<Phone className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-orange" />
								<div className="space-y-1">
									<a href="tel:+2348033370366" className="block text-[0.95rem] text-brand-grey transition-colors hover:text-paper">
										+234 803 337 0366
									</a>
									<a href="tel:+2348055219193" className="block text-[0.95rem] text-brand-grey transition-colors hover:text-paper">
										+234 805 521 9193
									</a>
								</div>
							</div>

							<div className="flex gap-4 bg-ink py-6">
								<Mail className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-orange" />
								<a
									href="mailto:yinka.adebiyi@maduyconsult.com"
									className="text-[0.95rem] break-all text-brand-grey transition-colors hover:text-paper"
								>
									yinka.adebiyi@maduyconsult.com
								</a>
							</div>
						</div>
					</div>

					<div className="bg-ink-2 p-8 lg:p-11">
						{submit.isSuccess ? (
							<div className="flex h-full flex-col justify-center py-8">
								<Check className="h-9 w-9 text-brand-orange" />
								<h3 className="display-tight mt-7 text-[1.6rem] font-bold text-paper">
									Almost there.
								</h3>
								<p className="mt-4 max-w-[40ch] text-[0.97rem] leading-relaxed text-brand-grey">
									Thank you, {form.name.trim().split(" ")[0]}. Your email app has opened
									with your message to Olayinka. Press send there and you'll hear back
									within two business days. If nothing opened, email{" "}
									<a href="mailto:yinka.adebiyi@maduyconsult.com" className="text-paper underline">
										yinka.adebiyi@maduyconsult.com
									</a>.
								</p>
							</div>
						) : (
							<form onSubmit={onSubmit} noValidate className="space-y-3">
								<div className="grid gap-3 sm:grid-cols-2">
									<div>
										<input
											type="text"
											required
											value={form.name}
											onChange={(e) => set("name")(e.target.value)}
											placeholder="Name"
											aria-label="Name"
											aria-invalid={!!errors.name}
											className={`${field} ${errors.name ? "border-brand-orange" : ""}`}
										/>
										{errors.name && <p className={errNote}>{errors.name}</p>}
									</div>
									<input
										type="text"
										value={form.company}
										onChange={(e) => set("company")(e.target.value)}
										placeholder="Company"
										aria-label="Company"
										className={field}
									/>
								</div>

								<div>
									<input
										type="email"
										required
										value={form.email}
										onChange={(e) => set("email")(e.target.value)}
										placeholder="Work email"
										aria-label="Work email"
										aria-invalid={!!errors.email}
										className={`${field} ${errors.email ? "border-brand-orange" : ""}`}
									/>
									{errors.email && <p className={errNote}>{errors.email}</p>}
								</div>

								<select
									value={form.interest}
									onChange={(e) => set("interest")(e.target.value)}
									aria-label="What this is about"
									className={`${field} ${form.interest ? "" : "text-brand-grey/70"}`}
								>
									<option value="">What is this about?</option>
									{INTERESTS.map((i) => (
										<option key={i} value={i} className="text-ink">
											{i}
										</option>
									))}
								</select>

								<textarea
									required
									rows={5}
									value={form.message}
									onChange={(e) => set("message")(e.target.value)}
									placeholder="What are you considering, and what's the timeline?"
									aria-label="Message"
									className={`${field} resize-none`}
								/>

								<button
									type="submit"
									disabled={submit.isPending}
									className="flex w-full items-center justify-center gap-2 bg-brand-orange px-6 py-4 text-[0.92rem] font-semibold tracking-[0.03em] text-paper transition-opacity hover:opacity-90 disabled:opacity-60"
								>
									{submit.isPending && <Loader2 className="h-4 w-4 animate-spin" />}
									{submit.isPending ? "Sending…" : "Send"}
								</button>

								{submit.isError && (
									<p className="text-[0.85rem] text-brand-orange">
										That didn't send. Check the required fields and try again, or email us directly.
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
