import { useMutation } from "@tanstack/react-query";
import { orpc } from "../lib/api";

export function useGuideSignup() {
	return useMutation(orpc.guide.signup.mutationOptions());
}
