import { useState } from "react";

function ReportsTable() {
  const reportsData = [
    {
      name: "Student Report",
      category: "Student",
      date: "18 Jun",
      status: "Completed",
    },
    {
      name: "Revenue Report",
      category: "Finance",
      date: "17 Jun",
      status: "Pending",
    },
    {
      name: "Placement Report",
      category: "Placement",
      date: "16 Jun",
      status: "Completed",
    },
    {
      name: "Certificate Report",
      category: "Certification",
      date: "15 Jun",
      status: "Pending",
    },
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredReports = reportsData.filter((report) => {
    const matchesSearch = report.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || report.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white rounded-3xl shadow-md p-6">
      {/* Top Controls */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between mb-6">
        <div className="flex gap-4 w-full">
          <input
            type="text"
            placeholder="Search reports..."
            className="border rounded-xl px-4 py-3 w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border rounded-xl px-4 py-3"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl">
          Generate Report
        </button>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="pb-4">Report Name</th>
            <th className="pb-4">Category</th>
            <th className="pb-4">Date</th>
            <th className="pb-4">Status</th>
            <th className="pb-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredReports.map((report, index) => (
            <tr key={index} className="border-b h-16">
              <td>{report.name}</td>
              <td>{report.category}</td>
              <td>{report.date}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    report.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : "bg-orange-100 text-orange-600"
                  }`}
                >
                  {report.status}
                </span>
              </td>

              <td>
                <button className="text-blue-600 font-semibold">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReportsTable;