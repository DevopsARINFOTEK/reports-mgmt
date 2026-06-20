function ReportCards() {
  const cards = [
    {
      title: "Total Students",
      value: "1,250",
      color: "text-blue-600",
    },
    {
      title: "Revenue",
      value: "₹12.4 L",
      color: "text-green-600",
    },
    {
      title: "Placements",
      value: "185",
      color: "text-purple-600",
    },
    {
      title: "Certificates",
      value: "980",
      color: "text-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 mb-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition"
        >
          <p className="text-sm font-medium text-slate-500">
            {card.title}
          </p>

          <h2 className={`mt-3 text-3xl font-bold ${card.color}`}>
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ReportCards;