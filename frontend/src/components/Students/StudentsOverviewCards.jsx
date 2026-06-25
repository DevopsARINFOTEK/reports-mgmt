import { useEffect, useState } from "react";

function StudentsOverviewCards() {

  const [stats, setStats] = useState({
    totalStudents: 0,
    activeStudents: 0,
    completedStudents: 0,
    placedStudents: 0,
  });

  useEffect(() => {

    Promise.all([
      fetch("http://localhost:5000/interns"),
      fetch("http://localhost:5000/placements")
    ])
      .then(async ([internsRes, placementsRes]) => {

        const interns = await internsRes.json();
        const placements = await placementsRes.json();

        const activeCount = interns.filter(
          (intern) => intern.status === "Active"
        ).length;

        const completedCount = interns.filter(
          (intern) => intern.status === "Completed"
        ).length;

        setStats({
          totalStudents: interns.length,
          activeStudents: activeCount,
          completedStudents: completedCount,
          placedStudents: placements.length,
        });

      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  const cards = [
    {
      title: "Total Students",
      value: stats.totalStudents,
    },
    {
      title: "Active",
      value: stats.activeStudents,
    },
    {
      title: "Completed",
      value: stats.completedStudents,
    },
    {
      title: "Placed",
      value: stats.placedStudents,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {cards.map((card, index) => (

        <div
          key={index}
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-6 border border-slate-100 hover:scale-105 transition duration-300"
        >

          <p className="text-slate-500">
            {card.title}
          </p>

          <h2 className="text-4xl font-bold text-[#0F3D91] mt-3">
            {card.value}
          </h2>

        </div>

      ))}

    </div>
  );
}

export default StudentsOverviewCards;