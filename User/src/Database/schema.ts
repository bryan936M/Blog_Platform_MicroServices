import { datetime, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

const users = mysqlTable("users", {
  id: serial("id").autoincrement().primaryKey(),
  first_name: varchar("first_name", { length: 250 }).notNull(),
  last_name: varchar("last_name", { length: 250 }).notNull(),
  email: varchar("email", { length: 250 }).unique().notNull(),
  password: varchar("password", { length: 250 }).notNull(),
  created_at: datetime("created_at").notNull(),
});

export { users };
