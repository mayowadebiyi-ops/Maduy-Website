import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

/**
 * Maduy Consult site — two capture tables.
 * Apply with `bun run db:push` from packages/web.
 */

/** Enquiries submitted from the Contact section. */
export const contactSubmissions = sqliteTable("contact_submissions", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	company: text("company"),
	email: text("email").notNull(),
	interest: text("interest"),
	message: text("message").notNull(),
	createdAt: integer("created_at", { mode: "timestamp" })
		.notNull()
		.$defaultFn(() => new Date()),
});

/** Email captures for the Canadian Mining Supplier's Guide to West Africa. */
export const guideSignups = sqliteTable("guide_signups", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	email: text("email").notNull(),
	company: text("company"),
	createdAt: integer("created_at", { mode: "timestamp" })
		.notNull()
		.$defaultFn(() => new Date()),
});
