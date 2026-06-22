import { useState } from "react";

function ReportsGrid() {
  const reports = [
    { name: "Student Report", category: "Student", status: "Completed", date: "18 Jun" },
    { name: "Revenue Report", category: "Finance", status: "Pending", date: "17 Jun" },
    { name: "Placement Report", category: "Placement", status: "Completed", date: "16 Jun" },
    { name: "Certificate Report", category: "Certification", status: "Pending", date: "15 Jun" },
    { name: "Internship Report", category: "Internship", status: "Completed", date: "14 Jun" },
    { name: "Monthly Report", category: "General", status: "Pending", date: "13 Jun" },
  ];

  const [search, setSearch] = useState("");

  const filteredReports = reports.filter((report) =>
    report.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="bg-white rounded-3xl p-6 shadow-md mb-8">
        <input
          type="text"
          placeholder="Search reports..."
          className="border rounded-2xl px-5 py-3 w-full outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredReports.map((report, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 border border-slate-100 hover:border-blue-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-200/20 to-orange-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10">
              <h2 className="font-bold text-xl group-hover:text-[#0F3D91] transition">
                {report.name}
              </h2>

              <p className="text-slate-500 mt-2">{report.category}</p>

              <div className="mt-5">
                <p className="text-slate-500 text-sm">Generated Date</p>
                <h3 className="font-semibold mt-1">{report.date}</h3>
              </div>

              <div className="mt-5">
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

              <button className="mt-6 w-full bg-[#0F3D91] text-white py-3 rounded-2xl font-medium group-hover:bg-orange-500 transition duration-300">
                View Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ReportsGrid;