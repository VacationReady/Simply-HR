import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 h-screen bg-white shadow-md p-6">
      <nav className="flex flex-col space-y-4">
        <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
          Dashboard Home
        </Link>
        <Link href="/dashboard/employees" className="text-gray-700 hover:text-blue-600">
          Manage Employees
        </Link>
        <Link href="/dashboard/leave" className="text-gray-700 hover:text-blue-600">
          Leave Requests
        </Link>
        <Link href="/dashboard/settings" className="text-gray-700 hover:text-blue-600">
          Settings
        </Link>
      </nav>
    </aside>
  );
}
