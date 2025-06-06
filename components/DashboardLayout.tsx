import { signOut } from "next-auth/react";
import type { ReactNode } from "react";
import AdminSidebar from "./AdminSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <header className="flex justify-end items-center p-4 bg-white shadow">
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Log out
          </button>
        </header>

        <main className="p-6 bg-gray-100 flex-1">{children}</main>
      </div>
    </div>
  );
}
