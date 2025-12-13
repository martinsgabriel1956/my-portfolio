"use server";

import { asc } from "drizzle-orm";
import { db } from "@/db";
import { experiences as experiencesSchema } from "@/db/schema";

export async function getExperiences() {
  const experiences = await db
    .select()
    .from(experiencesSchema)
    .orderBy(asc(experiencesSchema.id));
  return experiences;
}
