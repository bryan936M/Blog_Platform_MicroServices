import type { Config } from "drizzle-kit";


export default {
  schema: "./src/Utils/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.NEON_CONNECTION_STRING!,
  }
} satisfies Config;