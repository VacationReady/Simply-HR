import { signOut } from "next-auth/react";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex justify-end items-center p-4 bg-white shadow">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Log out
        </button>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
