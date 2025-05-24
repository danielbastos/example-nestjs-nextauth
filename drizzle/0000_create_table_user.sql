CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256),
	"email" varchar(256) NOT NULL,
	"password" text NOT NULL,
	"verify_code" varchar(6),
	"verify_date" timestamp,
	"lang" varchar(256),
	"timezone" varchar(256),
	"avatar_url" text,
	"created_at" timestamp DEFAULT now(),
	"active" boolean DEFAULT true NOT NULL,
	CONSTRAINT "un_users_01" UNIQUE("email")
);
