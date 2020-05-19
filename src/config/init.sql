CREATE DATABASE remember_me;

CREATE TABLE "users" (
    "id" int   NOT NULL,
    "name" varchar(255)   NOT NULL,
    "password" varchar(255)   NOT NULL,
    "created_at" timestamp   NOT NULL,
    "updated_at" timestamp   NULL,
    CONSTRAINT "pk_users" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "remembers" (
    "id" int   NOT NULL,
    "id_sender" int   NOT NULL,
    "id_receiver" int   NOT NULL,
    "audio_path" varchar(255)   NOT NULL,
    "created_at" timestamp   NOT NULL,
    "updated_at" timestamp   NULL,
    CONSTRAINT "pk_remembers" PRIMARY KEY (
        "id"
     )
);

ALTER TABLE "remembers" ADD CONSTRAINT "fk_remembers_id_sender" FOREIGN KEY("id_sender")
REFERENCES "users" ("id");

ALTER TABLE "remembers" ADD CONSTRAINT "fk_Remembers_id_receiver" FOREIGN KEY("id_receiver")
REFERENCES "users" ("id");

CREATE INDEX "idx_users_name"
ON "users" ("name");
