import type { Config } from "drizzle-kit";
import "dotenv/config"
import { config } from "./src/Config";

export default {
    schema: "./src/Database/schema.ts",
    dbCredentials: {
        uri: config.database_URL as string,
    },
    driver: "mysql2",
    
} satisfies Config
