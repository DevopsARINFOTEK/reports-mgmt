function DashboardCards() {
  const stats = [
    { title: "Students", value: "1250" },
    { title: "Revenue", value: "₹2.5L" },
    { title: "Placements", value: "56" },
    { title: "Certificates", value: "980" },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-3xl p-6 shadow-md">
          <p className="text-slate-500">{stat.title}</p>
          <h1 className="text-4xl font-bold text-[#0F3D91] mt-3">
            {stat.value}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;