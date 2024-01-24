import type { Config } from "drizzle-kit";
import "dotenv/config"
import { config } from "./src/Config";

export default {
    schema: "./src/Database/schema.ts",
    driver: "mysql2",
    dbCredentials:{uri: config.database_URL as string},
    
} satisfies Config
