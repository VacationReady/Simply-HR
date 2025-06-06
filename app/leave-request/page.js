export default function LeaveRequest() {
  return (
    <main className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">Request Time Off</h2>
      <form className="flex flex-col gap-4">
        <div>
          <label className="block font-medium">Leave Type</label>
          <select className="w-full border rounded px-3 py-2 mt-1">
            <option>Annual Leave</option>
            <option>Sick Leave</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">From Date</label>
          <input type="date" className="w-full border rounded px-3 py-2 mt-1" />
        </div>
        <div>
          <label className="block font-medium">To Date</label>
          <input type="date" className="w-full border rounded px-3 py-2 mt-1" />
        </div>
        <div>
          <label className="block font-medium">Reason</label>
          <textarea rows="3" className="w-full border rounded px-3 py-2 mt-1"></textarea>
        </div>
        <button className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Submit</button>
      </form>
    </main>
  );
}
