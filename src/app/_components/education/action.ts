"use server";

import { db } from "@/db";
import { education as educationSchema } from "@/db/schema";

export async function getEducation() {
  const education = await db.select().from(educationSchema);
  return education;
}
