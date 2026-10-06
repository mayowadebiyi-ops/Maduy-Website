import { useMutation } from "@tanstack/react-query";
import { openEmail } from "../lib/mailto";

type ContactInput = {
	name: string;
	company?: string;
	email: string;
	interest?: string;
	message: string;
};

// The site is hosted as static files (GitHub Pages), so there is no server to
// store enquiries. Hand the enquiry to the visitor's email app instead.
export function useSubmitContact() {
	return useMutation({
		mutationFn: async (input: ContactInput) => {
			const details = [
				`Name: ${input.name}`,
				input.company && `Company: ${input.company}`,
				`Email: ${input.email}`,
				input.interest && `About: ${input.interest}`,
			].filter(Boolean);
			openEmail(
				`Website enquiry${input.interest ? ` — ${input.interest}` : ""}`,
				`${details.join("\n")}\n\n${input.message}`,
			);
			return { ok: true as const };
		},
	});
}
