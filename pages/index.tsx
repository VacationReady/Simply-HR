import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to SimplyHR</h1>
        <p className="mb-6">Login with your admin credentials</p>
        <button
          onClick={() => signIn("credentials", { callbackUrl: "/dashboard" })}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Log in as Admin
        </button>
      </div>
    </div>
  );
}
