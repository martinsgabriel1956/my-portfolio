import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { env } from "../util/env";
import * as schema from "./schema";

// Sem cache de fetch: o Next guardava as respostas do Neon por um ano, e a Vercel reaproveita esse
// cache entre deploys, então editar o banco não chegava ao site. Cada build lê o banco de novo.
const sql = neon(env.DATABASE_URL, { fetchOptions: { cache: "no-store" } });

export const db = drizzle(sql, { schema });
