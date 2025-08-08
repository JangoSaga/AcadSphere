import { relations } from "drizzle-orm/relations";
import {
  classes,
  subjects,
  attendance,
  marks,
  users,
  faculty,
  students,
} from "./schema";

export const subjectsRelations = relations(subjects, ({ one, many }) => ({
  class: one(classes, {
    fields: [subjects.classId],
    references: [classes.id],
  }),
  attendances: many(attendance),
  marks: many(marks),
}));

export const classesRelations = relations(classes, ({ many }) => ({
  subjects: many(subjects),
  students: many(students),
}));

export const attendanceRelations = relations(attendance, ({ one }) => ({
  subject: one(subjects, {
    fields: [attendance.subjectId],
    references: [subjects.id],
  }),
}));

export const marksRelations = relations(marks, ({ one }) => ({
  subject: one(subjects, {
    fields: [marks.subjectId],
    references: [subjects.id],
  }),
}));

export const facultyRelations = relations(faculty, ({ one }) => ({
  user: one(users, {
    fields: [faculty.userId],
    references: [users.id],
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  faculties: many(faculty),
  students: many(students),
}));

export const studentsRelations = relations(students, ({ one }) => ({
  user: one(users, {
    fields: [students.userId],
    references: [users.id],
  }),
  class: one(classes, {
    fields: [students.classId],
    references: [classes.id],
  }),
}));
