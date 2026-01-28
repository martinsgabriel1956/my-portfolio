import {
  boolean,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export type ExperienceProject = {
  name: string;
  description: string;
  techs: string[];
};

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }).notNull(),
  description: text("description"),
  startDate: timestamp("start_date", { mode: "date" }).notNull(),
  endDate: timestamp("end_date", { mode: "date" }),
  location: varchar("location", { length: 255 }),
  projects: jsonb("projects").$type<ExperienceProject[]>().default([]),
  technologies: jsonb("technologies").$type<string[]>().default([]),
  isCurrent: boolean("is_current").default(false),
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const skillCategories = pgTable("skill_categories", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
  icon: varchar("icon", { length: 50 }).notNull(),
  color: varchar("color", { length: 20 }).notNull().default("primary"),
  skills: jsonb("skills").$type<string[]>().notNull().default([]),
  order: integer("order").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  institution: varchar("institution", { length: 255 }).notNull(),
  degree: varchar("degree", { length: 255 }),
  fieldOfStudy: varchar("field_of_study", { length: 255 }),
  startDate: timestamp("start_date", { mode: "date" }).notNull(),
  endDate: timestamp("end_date", { mode: "date" }),
  isCurrent: boolean("is_current").default(false),
  description: text("description"),
  grade: varchar("grade", { length: 50 }),
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const certifications = pgTable("certifications", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  institution: varchar("institution", { length: 255 }).notNull(),
  issuer: varchar("issuer", { length: 255 }),
  startDate: timestamp("start_date", { mode: "date" }),
  endDate: timestamp("end_date", { mode: "date" }),
  issueDate: timestamp("issue_date", { mode: "date" }).notNull(),
  expirationDate: timestamp("expiration_date", { mode: "date" }),
  credentialId: varchar("credential_id", { length: 255 }),
  credentialUrl: varchar("credential_url", { length: 500 }),
  description: text("description"),
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  longDescription: text("long_description"),
  technologies: jsonb("technologies").$type<string[]>().default([]),
  githubUrl: varchar("github_url", { length: 500 }),
  liveUrl: varchar("live_url", { length: 500 }),
  imageUrl: varchar("image_url", { length: 500 }),
  featured: boolean("featured").default(false),
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  subject: varchar("subject", { length: 255 }),
  message: text("message").notNull(),
  status: varchar("status", { length: 50 }).default("unread"),
  ipAddress: varchar("ip_address", { length: 45 }),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  readAt: timestamp("read_at"),
  repliedAt: timestamp("replied_at"),
});

export type Experience = typeof experiences.$inferSelect;
export type NewExperience = typeof experiences.$inferInsert;

export type SkillCategory = typeof skillCategories.$inferSelect;
export type NewSkillCategory = typeof skillCategories.$inferInsert;

export type Education = typeof education.$inferSelect;
export type NewEducation = typeof education.$inferInsert;

export type Certification = typeof certifications.$inferSelect;
export type NewCertification = typeof certifications.$inferInsert;

export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;

export type Contact = typeof contacts.$inferSelect;
export type NewContact = typeof contacts.$inferInsert;
