ALTER TABLE "experiences" RENAME COLUMN "position" TO "title";--> statement-breakpoint
ALTER TABLE "certifications" ALTER COLUMN "issuer" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "education" ALTER COLUMN "degree" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "experiences" ALTER COLUMN "description" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "certifications" ADD COLUMN "institution" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "education" ADD COLUMN "title" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "experiences" ADD COLUMN "projects" jsonb DEFAULT '[]'::jsonb;