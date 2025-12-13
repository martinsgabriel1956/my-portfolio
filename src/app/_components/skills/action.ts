"use server";

import { asc } from "drizzle-orm";
import { db } from "@/db";
import { skillCategories } from "@/db/schema";

export async function getSkillCategories() {
  const categories = await db
    .select()
    .from(skillCategories)
    .orderBy(asc(skillCategories.order));

  return categories;
}
