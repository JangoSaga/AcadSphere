"use client";
import { signInAction } from "@/app/_lib/actions";
import { redirect } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
type FormValues = {
  email: string;
  password: string;
  role: string;
};
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { success, error, role } = await signInAction(data);
    if (success) {
      console.log(success, "succesfull", role);
      redirect("/dashboard");
    } else {
      console.log(error);
    }
  };
  return (
    <div>
      {/* LOGIN FORM */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* ROLE */}
          <select id="role" {...register("role", { required: true })}>
            <option>Select your role</option>
            <option value="faculty">Faculty</option>
            <option value="student">Student</option>
          </select>
          {errors.role && (
            <p className="text-sm text-red-500">Role is required</p>
          )}
        </div>
        <div>
          {/* EMAIL */}
          <h1 className="text-2xl">Login page</h1>
          <div className="flex gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              placeholder="Enter your email adress"
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-500">Email is required</p>
          )}
          {/* PASSWORD */}
          <div className="flex gap-2">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
            />
          </div>
          {errors.password && (
            <p className="text-sm text-red-500">Password is required</p>
          )}
        </div>
        {/* SUBMIT */}
        <button type="submit">Log in</button>
        {/* ERROR */}
      </form>
    </div>
  );
}
