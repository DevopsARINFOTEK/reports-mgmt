import { useEffect, useState } from "react";

function InternshipOverviewCards() {

  const [stats, setStats] = useState({
    interns: 0,
    projects: 0,
    certificates: 0,
    placements: 0,
  });

  useEffect(() => {

    Promise.all([
      fetch("http://localhost:5000/interns"),
      fetch("http://localhost:5000/projects"),
      fetch("http://localhost:5000/certificates"),
      fetch("http://localhost:5000/placements")
    ])
      .then(async ([
        internsRes,
        projectsRes,
        certificatesRes,
        placementsRes
      ]) => {

        const interns = await internsRes.json();
        const projects = await projectsRes.json();
        const certificates = await certificatesRes.json();
        const placements = await placementsRes.json();

        setStats({
          interns: interns.length,
          projects: projects.length,
          certificates: certificates.length,
          placements: placements.length
        });

      })
      .catch(console.error);

  }, []);

  const cards = [
    {
      title: "Active Interns",
      value: stats.interns
    },
    {
      title: "Projects",
      value: stats.projects
    },
    {
      title: "Certificates",
      value: stats.certificates
    },
    {
      title: "Placements",
      value: stats.placements
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card, index) => (

        <div
          key={index}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <p className="text-slate-500">
            {card.title}
          </p>

          <h2 className="text-4xl font-bold text-[#1E3A8A] mt-2">
            {card.value}
          </h2>

        </div>

      ))}

    </div>
  );
}

export default InternshipOverviewCards;