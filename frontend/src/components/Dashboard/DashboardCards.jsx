import { useEffect, useState } from "react";

function DashboardCards() {

  const [stats, setStats] = useState({
    interns: 0,
    certificates: 0,
    placements: 0,
    reports: 0,
  });

  useEffect(() => {

    fetch("http://localhost:5000/dashboard-stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
      })
      .catch((error) => {
        console.error("Dashboard Stats Error:", error);
      });

  }, []);

  const dashboardStats = [
    {
      title: "Interns",
      value: stats.interns,
    },
    {
      title: "Reports",
      value: stats.reports,
    },
    {
      title: "Placements",
      value: stats.placements,
    },
    {
      title: "Certificates",
      value: stats.certificates,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {dashboardStats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition"
        >
          <p className="text-slate-500 text-lg">
            {stat.title}
          </p>

          <h1 className="text-4xl font-bold text-[#0F3D91] mt-3">
            {stat.value}
          </h1>
        </div>
      ))}

    </div>
  );
}

export default DashboardCards;