import { sql } from "drizzle-orm";
import { pgTable, varchar, timestamp, uuid, text, unique, boolean } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  name: varchar('name', { length: 256 }),
  email: varchar('email', { length: 256 }).notNull(),
  password: text('password').notNull(),
  verify_code: varchar('verify_code', { length: 6 }),
  verify_date: timestamp('verify_date'),
  lang: varchar('lang', { length: 256 }),
  timezone: varchar('timezone', { length: 256 }),
  avatar_url: text('avatar_url'),
  createdAt: timestamp('created_at').defaultNow(),
  active: boolean('active').notNull().default(true),
}, (t) => [
  unique('un_users_01').on(t.email),
]);

