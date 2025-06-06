export default function Dashboard() {
  const leaveBalance = { annual: 12, sick: 5 };
  const teamOnLeave = [
    { name: "Alex Johnson", type: "Annual Leave" },
    { name: "Priya Kumar", type: "Sick Leave" },
  ];

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Leave Balance</h2>
      <ul className="mb-6">
        <li>Annual Leave: {leaveBalance.annual} days</li>
        <li>Sick Leave: {leaveBalance.sick} days</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Who's Off Today</h3>
      <ul className="list-disc pl-6">
        {teamOnLeave.map((person, idx) => (
          <li key={idx}>{person.name} – {person.type}</li>
        ))}
      </ul>
    </main>
  );
}
