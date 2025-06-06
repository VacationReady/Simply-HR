export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-sm border p-6 rounded shadow bg-white">
        <h2 className="text-xl font-semibold mb-4">Login to SimplyHR</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2 mt-1" />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input type="password" className="w-full border rounded px-3 py-2 mt-1" />
          </div>
          <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Log In</button>
        </form>
      </div>
    </main>
  );
}
