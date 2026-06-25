import { useEffect, useState } from "react";

function RecentReports() {

  const [reportsData, setReportsData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {

    fetch("http://localhost:5000/reports")
      .then((res) => res.json())
      .then((data) => {
        setReportsData(data);
      })
      .catch((error) => {
        console.error("Reports Error:", error);
      });

  }, []);

  const reportsPerPage = 5;

  const filteredReports = reportsData.filter((report) => {

    const matchesSearch =
      report.report_name
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      report.status === filter;

    return matchesSearch && matchesFilter;

  });

  const totalPages = Math.ceil(
    filteredReports.length / reportsPerPage
  );

  const startIndex =
    (currentPage - 1) * reportsPerPage;

  const currentReports = filteredReports.slice(
    startIndex,
    startIndex + reportsPerPage
  );

  return (
    <div className="bg-white rounded-3xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Reports
      </h2>

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

      <table className="w-full">

        <thead>
          <tr className="border-b text-left">
            <th className="pb-3">Report</th>
            <th className="pb-3">Date</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>

        <tbody>

          {currentReports.map((report) => (

            <tr
              key={report.report_id}
              className="border-b h-16"
            >

              <td>
                {report.report_name}
              </td>

              <td>
                {report.generated_date
                  ? new Date(
                      report.generated_date
                    ).toLocaleDateString()
                  : "-"}
              </td>

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

      <div className="flex justify-between items-center mt-6">

        <button
          className="px-4 py-2 bg-slate-200 rounded-lg disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
        >
          Prev
        </button>

        <p>
          Page {currentPage} of {totalPages || 1}
        </p>

        <button
          className="px-4 py-2 bg-slate-200 rounded-lg disabled:opacity-50"
          disabled={
            currentPage === totalPages ||
            totalPages === 0
          }
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default RecentReports;