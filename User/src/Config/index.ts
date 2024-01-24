import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: parseInt(process.env.DB_PORT!),
  database_URL: process.env.DATABASE_URL!,
};
