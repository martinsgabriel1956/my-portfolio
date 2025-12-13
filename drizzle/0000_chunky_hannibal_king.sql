CREATE TABLE "certifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"issuer" varchar(255) NOT NULL,
	"issue_date" timestamp NOT NULL,
	"expiration_date" timestamp,
	"credential_id" varchar(255),
	"credential_url" varchar(500),
	"description" text,
	"order" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "contacts" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"subject" varchar(255),
	"message" text NOT NULL,
	"status" varchar(50) DEFAULT 'unread',
	"ip_address" varchar(45),
	"user_agent" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"read_at" timestamp,
	"replied_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "education" (
	"id" serial PRIMARY KEY NOT NULL,
	"institution" varchar(255) NOT NULL,
	"degree" varchar(255) NOT NULL,
	"field_of_study" varchar(255),
	"start_date" timestamp NOT NULL,
	"end_date" timestamp,
	"is_current" boolean DEFAULT false,
	"description" text,
	"grade" varchar(50),
	"order" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "experiences" (
	"id" serial PRIMARY KEY NOT NULL,
	"company" varchar(255) NOT NULL,
	"position" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"start_date" timestamp NOT NULL,
	"end_date" timestamp,
	"location" varchar(255),
	"technologies" jsonb DEFAULT '[]'::jsonb,
	"is_current" boolean DEFAULT false,
	"order" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"long_description" text,
	"technologies" jsonb DEFAULT '[]'::jsonb,
	"github_url" varchar(500),
	"live_url" varchar(500),
	"image_url" varchar(500),
	"featured" boolean DEFAULT false,
	"order" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "skills" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"category" varchar(50) NOT NULL,
	"level" varchar(50),
	"icon" varchar(100),
	"order" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now() NOT NULL
);
