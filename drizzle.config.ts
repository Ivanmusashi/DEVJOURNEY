import "dotenv/config";
import type { Config } from "drizzle-kit";

// Log the environment variables to verify they are being loaded correctly
console.log("DATABASE_URL:", process.env.DATABASE_URL);

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql", // Add this line to specify the dialect
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT!),
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : undefined,
  },
} satisfies Config;