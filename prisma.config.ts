import "dotenv/config";
import { defineConfig, env } from "prisma/config";

// Если переменной нет в окружении (например, при сборке Docker), используем заглушку
const dbUrl = env("DATABASE_URL") || "postgresql://placeholder:placeholder@localhost:5432/portfolio_db";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: dbUrl
  }
});