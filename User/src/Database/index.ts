import "dotenv/config";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import { config } from "../Config";

// create the connection
const connection = connect({
  url: config.database_URL!,
});

const db = drizzle(connection);

export { db };
