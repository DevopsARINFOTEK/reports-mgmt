

function DashboardCards() {
  const stats = [
    {
      title: "Total Students",
      value: "1250",
      color: "text-blue-600",
      icon: "fa-user-graduate",
    },
    {
      title: "Revenue",
      value: "₹2.5 L",
      color: "text-green-600",
      icon: "fa-indian-rupee-sign",
    },
    {
      title: "Placements",
      value: "56",
      color: "text-purple-600",
      icon: "fa-briefcase",
    },
    {
      title: "Certificates",
      value: "980",
      color: "text-orange-600",
      icon: "fa-certificate",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition"
        >
          <div className="flex justify-between items-center">

            <div>
              <p className="text-slate-500 text-sm">
                {stat.title}
              </p>

              <h2 className={`text-4xl font-bold mt-3 ${stat.color}`}>
                {stat.value}
              </h2>
            </div>

            <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center">
              <i className={`fa-solid ${stat.icon} ${stat.color} text-xl`} />
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;