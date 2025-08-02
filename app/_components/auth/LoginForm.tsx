import SignInButton from "./SignInButton";
export default function LoginForm() {
  return (
    <div>
      {/* LOGIN FORM */}
      <form>
        <div>
          {/* ROLE */}
          <select name="role" id="role">
            <option>Select your role</option>
            <option value="faculty">Faculty</option>
            <option value="student">Student</option>
          </select>
        </div>
        <div>
          {/* EMAIL */}
          <h1 className="text-2xl">Login page</h1>
          <div className="flex gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email adress"
            />
          </div>
          {/* PASSWORD */}
          <div className="flex gap-2">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        {/* SUBMIT */}
        <button type="submit">Log in</button>
        {/* ERROR */}
        <div>
          <p className="text-sm text-red-500">error message</p>
        </div>
      </form>
      {/* PROVIDERS */}
      <div>
        <SignInButton />
      </div>
    </div>
  );
}
