
## 👤 SMIT – (UI Developer)

1. Initialize the React project (using Vite or CRA).
2. Setup project folder structure (`components`, `pages`, etc.).
3. Install and configure `react-router-dom` for routing.
4. Design the base layout (Header, Sidebar, Content wrapper).
5. Build static **Login Page** (basic form, no logic).
6. Build **Student Dashboard** UI (card layout or grid view).
7. Create **Attendance Page UI** (Chart container + subject attendance cards).
8. Create **Marks Page UI** (subject-wise marks table).
9. Design **Class Details Page** (table with class info, static list).
10. Build **Feedback Page UI** (rating input, comment textarea, submit button).
11. Build **Faculty Dashboard** layout (reuse layout from student dashboard).
12. Build **Subject Management Page UI** (form for subject add/edit + subject list).
13. Build **Student Management Page UI** (table with student list, assign options).
14. Build **Attendance Form Page UI** (select subject, select student, mark attendance).
15. Build **Feedback Viewer Page UI** (list of feedbacks in card/table).
16. Create reusable components: `Button`, `Table`, `FormInput`, `Modal`, etc.
17. Style all components using **CSS** or Tailwind (if desired).
18. Ensure responsiveness for all pages and components.
19. Implement conditional rendering based on user role using props/context (placeholder).
20. Coordinate with Person B to bind APIs where required (provide props, callbacks).

---

## 👤 KARAN – (Backend Integration & Infra)

1. Setup Supabase project with required tables:

   * `users`, `students`, `faculty`, `subjects`, `classes`, `attendance`, `marks`, `feedback`
2. Setup Supabase **auth** (email/password) and **role-based redirection**.
3. Implement Supabase **Row Level Security (RLS)** for user-level data access.
4. Integrate Supabase client into React project.
5. Handle **Login** and **Signup** functionality (connect with Supabase auth).
6. Implement **user context** and **auth state management**.
7. Setup protected routing (role-based navigation).
8. Create service functions for:

   * Fetching user role and profile
   * Fetch/Add/Edit/Delete subjects
   * Fetch/Add students and assign to subjects
   * Mark attendance, fetch attendance
   * Submit/view marks
   * Submit/view feedback
9. Integrate attendance data with chart component in Student Dashboard.
10. Integrate marks data with table in Student Dashboard.
11. Integrate feedback form submission and display.
12. Create reusable API hooks like `useSubjects`, `useStudents`, `useAttendance`.
13. Configure and apply Tailwind CSS in project.
14. Setup **Shadcn UI components** (Buttons, Cards, Dialogs).
15. Replace raw HTML elements with Shadcn components where needed.
16. Handle errors, loading states, and toast notifications.
17. Write clean code for scalability (separate logic from views).
18. Final data flow testing and edge case handling.
19. Help with deployment (if needed) using Netlify/Vercel/Supabase hosting.

---

## 📊 Supabase Table Schema

| Table Name   | Description                           | Key Fields                                                                          |
| ------------ | ------------------------------------- | ----------------------------------------------------------------------------------- |
| `users`      | Auth users with roles                 | `id`, `email`, `role` (`student` / `faculty`)                                       |
| `students`   | Student profile info                  | `id`, `user_id (FK)`, `name`, `class_id`                                            |
| `faculty`    | Faculty profile info                  | `id`, `user_id (FK)`, `name`, `department`                                          |
| `classes`    | Class info                            | `id`, `name`, `section`                                                             |
| `subjects`   | Subjects mapped to class and faculty  | `id`, `name`, `class_id (FK)`, `faculty_id (FK)`                                    |
| `attendance` | Attendance records                    | `id`, `student_id (FK)`, `subject_id (FK)`, `date`, `status` (`present` / `absent`) |
| `marks`      | Marks of students per subject         | `id`, `student_id (FK)`, `subject_id (FK)`, `marks_obtained`, `total_marks`         |
| `feedback`   | Feedback given by students to faculty | `id`, `student_id (FK)`, `faculty_id (FK)`, `rating`, `comment`, `created_at`       |


## 🌐 React Routes

Use `react-router-dom`. Example route map:

| Path                     | Component             | Role    |
| ------------------------ | --------------------- | ------- |
| `/login`                 | `LoginPage`           | Public  |
| `/signup`                | `SignupPage`          | Public  |
| `/student/dashboard`     | `StudentDashboard`    | Student |
| `/student/attendance`    | `StudentAttendance`   | Student |
| `/student/marks`         | `StudentMarks`        | Student |
| `/student/feedback`      | `StudentFeedback`     | Student |
| `/student/class-details` | `StudentClassDetails` | Student |
| `/faculty/dashboard`     | `FacultyDashboard`    | Faculty |
| `/faculty/subjects`      | `SubjectManagement`   | Faculty |
| `/faculty/students`      | `StudentManagement`   | Faculty |
| `/faculty/attendance`    | `FacultyAttendance`   | Faculty |
| `/faculty/feedback`      | `FeedbackViewer`      | Faculty |
| `*`                      | `NotFound`            | All     |

---

## 📁 Project Structure (React)

```
/src
 ├── /assets             # Static files (images, icons)
 ├── /components
 │   ├── Sidebar.js
 │   ├── Navbar.js
 │   ├── Table.js
 │   ├── ChartContainer.js
 │   └── Button.js
 ├── /pages
 │   ├── /auth
 │   │   ├── LoginPage.jsx
 │   │   └── SignupPage.jsx
 │   ├── /student
 │   │   ├── Dashboard.jsx
 │   │   ├── Attendance.jsx
 │   │   ├── Marks.jsx
 │   │   ├── Feedback.jsx
 │   │   └── ClassDetails.jsx
 │   ├── /faculty
 │   │   ├── Dashboard.jsx
 │   │   ├── Subjects.jsx
 │   │   ├── Students.jsx
 │   │   ├── Attendance.jsx
 │   │   └── Feedback.jsx
 ├── /services           # Supabase API functions
 │   ├── authService.js
 │   ├── studentService.js
 │   ├── facultyService.js
 │   └── feedbackService.js
 ├── /context
 │   ├── AuthContext.js
 │   └── UserRoleContext.js
 ├── /hooks
 │   ├── useAuth.js
 │   ├── useStudentData.js
 │   └── useFacultyData.js
 ├── /layouts
 │   ├── StudentLayout.jsx
 │   └── FacultyLayout.jsx
 ├── /router
 │   └── AppRoutes.jsx
 ├── App.jsx
 ├── index.js
 └── tailwind.config.js
```

---
