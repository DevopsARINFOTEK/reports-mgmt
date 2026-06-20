import { useState } from "react";

function ReportsGrid() {
  const reports = [
    {
      name: "Student Report",
      category: "Student",
      status: "Completed",
      date: "18 Jun",
    },
    {
      name: "Revenue Report",
      category: "Finance",
      status: "Pending",
      date: "17 Jun",
    },
    {
      name: "Placement Report",
      category: "Placement",
      status: "Completed",
      date: "16 Jun",
    },
    {
      name: "Certificate Report",
      category: "Certification",
      status: "Pending",
      date: "15 Jun",
    },
    {
      name: "Internship Report",
      category: "Internship",
      status: "Completed",
      date: "14 Jun",
    },
    {
      name: "Monthly Report",
      category: "General",
      status: "Pending",
      date: "13 Jun",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredReports = reports.filter((report) =>
    report.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Controls */}
      <div className="bg-white rounded-3xl p-6 shadow-md mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <input
            type="text"
            placeholder="Search reports..."
            className="border rounded-2xl px-5 py-3 w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="border-2 border-[#0F3D91] text-[#0F3D91] px-6 py-3 rounded-2xl">
            Export CSV
          </button>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl">
            Generate Report
          </button>
        </div>
      </div>

      {/* Report Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredReports.map((report, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-bold text-xl">{report.name}</h2>
                <p className="text-slate-500 mt-1">{report.category}</p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  report.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-orange-100 text-orange-600"
                }`}
              >
                {report.status}
              </span>
            </div>

            <div className="mt-6">
              <p className="text-slate-500 text-sm">Generated Date</p>
              <h3 className="font-semibold mt-1">{report.date}</h3>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 bg-[#0F3D91] text-white py-3 rounded-2xl">
                View
              </button>

              <button className="flex-1 border border-slate-300 py-3 rounded-2xl">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ReportsGrid;