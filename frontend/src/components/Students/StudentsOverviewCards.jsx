function StudentsOverviewCards() {
  const stats = [
    { title: "Total Students", value: "1250" },
    { title: "Active", value: "980" },
    { title: "Completed", value: "210" },
    { title: "Placed", value: "60" },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-6 border border-slate-100 hover:scale-105 transition duration-300"
        >
          <p className="text-slate-500">{stat.title}</p>
          <h2 className="text-4xl font-bold text-[#0F3D91] mt-3">
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default StudentsOverviewCards;