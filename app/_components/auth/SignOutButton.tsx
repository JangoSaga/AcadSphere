import { signOutAction } from "@/app/_lib/actions";

export default function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full">
        <span>Sign out</span>
      </button>
    </form>
  );
}
