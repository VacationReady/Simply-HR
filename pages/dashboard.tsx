import DashboardLayout from "../components/DashboardLayout";
import { getSession } from "next-auth/react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="max-w-xl mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Your Leave Balance</h1>
        <p>Annual Leave: 12 days</p>
        <p>Sick Leave: 5 days</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Who's Off Today</h2>
        <ul className="list-disc list-inside">
          <li>Alex Johnson – Annual Leave</li>
          <li>Priya Kumar – Sick Leave</li>
        </ul>
      </div>
    </DashboardLayout>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
