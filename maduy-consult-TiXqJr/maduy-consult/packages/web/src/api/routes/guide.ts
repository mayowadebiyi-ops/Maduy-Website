import { z } from "zod";
import { desc } from "drizzle-orm";
import { base } from "../__core/app";
import { db } from "../database";
import * as schema from "../database/schema";

export const guide = {
	signup: base
		.input(
			z.object({
				email: z.email().max(160),
				company: z.string().max(160).optional(),
			}),
		)
		.handler(async ({ input }) => {
			const [row] = await db
				.insert(schema.guideSignups)
				.values({
					email: input.email.trim().toLowerCase(),
					company: input.company?.trim() || null,
				})
				.returning({ id: schema.guideSignups.id });
			return { ok: true as const, id: row.id };
		}),

	list: base.handler(() =>
		db
			.select()
			.from(schema.guideSignups)
			.orderBy(desc(schema.guideSignups.createdAt))
			.limit(500),
	),
};
