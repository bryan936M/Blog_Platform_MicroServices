import { db } from "./Database";
import { sql } from "drizzle-orm";

const main = async () => {
    const result = await db.execute(sql`SELECT version()`);
    console.log(result.rows[0]);
};

main();
