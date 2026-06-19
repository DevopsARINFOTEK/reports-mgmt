import { useState } from "react";

function RecentReports() {
  const reportsData = [
    { name: "Student Report", date: "18 Jun", status: "Completed" },
    { name: "Revenue Report", date: "17 Jun", status: "Pending" },
    { name: "Placement Report", date: "16 Jun", status: "Completed" },
    { name: "Certificate Report", date: "15 Jun", status: "Pending" },
    { name: "Internship Report", date: "14 Jun", status: "Completed" },
    { name: "Monthly Report", date: "13 Jun", status: "Pending" },
    { name: "Weekly Report", date: "12 Jun", status: "Completed" },
    { name: "Annual Report", date: "11 Jun", status: "Pending" },
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const reportsPerPage = 5;

  const filteredReports = reportsData.filter((report) => {
    const matchesSearch = report.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || report.status === filter;

    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.ceil(filteredReports.length / reportsPerPage);

  const startIndex = (currentPage - 1) * reportsPerPage;
  const currentReports = filteredReports.slice(
    startIndex,
    startIndex + reportsPerPage
  );

  return (
    <div className="bg-white rounded-3xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Recent Reports</h2>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search reports..."
          className="border rounded-xl px-4 py-3 w-full"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        <select
          className="border rounded-xl px-4 py-3"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="pb-3">Report</th>
            <th className="pb-3">Date</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {currentReports.map((report, index) => (
            <tr key={index} className="border-b h-16">
              <td>{report.name}</td>
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
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <button
          className="px-4 py-2 bg-slate-200 rounded-lg disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        <p>
          Page {currentPage} of {totalPages || 1}
        </p>

        <button
          className="px-4 py-2 bg-slate-200 rounded-lg disabled:opacity-50"
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default RecentReports;