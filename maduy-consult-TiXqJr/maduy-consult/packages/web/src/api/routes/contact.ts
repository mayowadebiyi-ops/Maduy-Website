import { z } from "zod";
import { desc } from "drizzle-orm";
import { base } from "../__core/app";
import { db } from "../database";
import * as schema from "../database/schema";

export const contact = {
	submit: base
		.input(
			z.object({
				name: z.string().min(1).max(120),
				company: z.string().max(160).optional(),
				email: z.email().max(160),
				interest: z.string().max(120).optional(),
				message: z.string().min(1).max(4000),
			}),
		)
		.handler(async ({ input }) => {
			const [row] = await db
				.insert(schema.contactSubmissions)
				.values({
					name: input.name.trim(),
					company: input.company?.trim() || null,
					email: input.email.trim().toLowerCase(),
					interest: input.interest?.trim() || null,
					message: input.message.trim(),
				})
				.returning({ id: schema.contactSubmissions.id });
			return { ok: true as const, id: row.id };
		}),

	list: base.handler(() =>
		db
			.select()
			.from(schema.contactSubmissions)
			.orderBy(desc(schema.contactSubmissions.createdAt))
			.limit(200),
	),
};
