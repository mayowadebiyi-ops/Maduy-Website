export const CONTACT_EMAIL = "yinka.adebiyi@maduyconsult.com";

/** Open the visitor's email app with a pre-filled message to Maduy Consult. */
export function openEmail(subject: string, body: string) {
	window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
