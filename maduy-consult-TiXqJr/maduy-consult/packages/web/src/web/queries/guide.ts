import { useMutation } from "@tanstack/react-query";
import { openEmail } from "../lib/mailto";

// Static hosting: send the guide request via the visitor's email app.
export function useGuideSignup() {
	return useMutation({
		mutationFn: async (input: { email: string; company?: string }) => {
			openEmail(
				"Guide request — Canadian Mining Supplier's Guide to West Africa",
				[
					"Please send me the guide when it publishes.",
					"",
					`Email: ${input.email}`,
					input.company ? `Company: ${input.company}` : "",
				]
					.join("\n")
					.trim(),
			);
			return { ok: true as const };
		},
	});
}
