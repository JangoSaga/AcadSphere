import { pgTable, unique, uuid, text, foreignKey, check, date, integer, timestamp, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const userRole = pgEnum("user_role", ['STUDENT', 'FACULTY'])


export const users = pgTable("users", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	email: text().notNull(),
	password: text().notNull(),
	role: userRole().notNull(),
}, (table) => [
	unique("users_email_key").on(table.email),
]);

export const subjects = pgTable("subjects", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: text().notNull(),
	facultyId: uuid("faculty_id").notNull(),
	classId: uuid("class_id").notNull(),
}, (table) => [
	foreignKey({
			columns: [table.classId],
			foreignColumns: [classes.id],
			name: "subjects_class_id_fkey"
		}).onDelete("cascade"),
]);

export const classes = pgTable("classes", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: text().notNull(),
	section: text().notNull(),
});

export const attendance = pgTable("attendance", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	studentId: uuid("student_id").notNull(),
	subjectId: uuid("subject_id").notNull(),
	date: date().notNull(),
	status: text().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.subjectId],
			foreignColumns: [subjects.id],
			name: "attendance_subject_id_fkey"
		}).onDelete("cascade"),
	check("attendance_status_check", sql`status = ANY (ARRAY['present'::text, 'absent'::text])`),
]);

export const marks = pgTable("marks", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	studentId: uuid("student_id").notNull(),
	subjectId: uuid("subject_id").notNull(),
	marksObtained: integer("marks_obtained").notNull(),
	totalMarks: integer("total_marks").notNull(),
}, (table) => [
	foreignKey({
			columns: [table.subjectId],
			foreignColumns: [subjects.id],
			name: "marks_subject_id_fkey"
		}).onDelete("cascade"),
]);

export const feedback = pgTable("feedback", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	studentId: uuid("student_id").notNull(),
	facultyId: uuid("faculty_id").notNull(),
	rating: integer(),
	comment: text(),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
	check("feedback_rating_check", sql`(rating >= 1) AND (rating <= 5)`),
]);

export const faculty = pgTable("faculty", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	userId: uuid("user_id").notNull(),
	name: text().default('New Faculty').notNull(),
	department: text(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "faculty_user_id_fkey"
		}).onDelete("cascade"),
	unique("faculty_user_id_key").on(table.userId),
]);

export const students = pgTable("students", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	userId: uuid("user_id").notNull(),
	name: text().default('New Student').notNull(),
	classId: uuid("class_id"),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "students_user_id_fkey"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.classId],
			foreignColumns: [classes.id],
			name: "students_class_id_fkey"
		}),
	unique("students_user_id_key").on(table.userId),
]);
