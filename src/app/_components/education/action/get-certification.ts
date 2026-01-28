"use server";

import { asc } from "drizzle-orm";
import { db } from "@/db";
import { certifications as certificationsSchema } from "@/db/schema";

export async function getCertifications() {
  const certifications = await db
    .select()
    .from(certificationsSchema)
    .orderBy(asc(certificationsSchema.order));
  return certifications;
}
