function CoursesOverviewCards() {
  const stats = [
    { title: "Total Courses", value: "24" },
    { title: "Active Courses", value: "18" },
    { title: "Completed", value: "6" },
    { title: "Enrollments", value: "2.4K" },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-3xl shadow-lg p-6">
          <p className="text-slate-500">{stat.title}</p>
          <h2 className="text-4xl font-bold text-[#0F3D91] mt-3">
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default CoursesOverviewCards;