import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-bold">Welcome to SimplyHR</h1>
      <div className="flex gap-4">
        <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded">Login</Link>
        <Link href="/dashboard" className="bg-green-600 text-white px-4 py-2 rounded">Dashboard</Link>
        <Link href="/leave-request" className="bg-purple-600 text-white px-4 py-2 rounded">Leave Request</Link>
      </div>
    </main>
  );
}
