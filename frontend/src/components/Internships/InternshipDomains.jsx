import { useEffect, useState } from "react";

function InternshipDomains() {

  const [domains, setDomains] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/domains")
      .then((res) => res.json())
      .then((data) => {
        setDomains(data);
      })
      .catch(console.error);

  }, []);

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Internship Domains
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

        {domains.map((domain) => (

          <div
            key={domain.domain_id}
            className="border border-slate-200 rounded-2xl p-5 hover:shadow-lg transition"
          >

            <h3 className="font-semibold text-lg text-[#1E3A8A]">
              {domain.domain_name}
            </h3>

            <p className="text-slate-500 mt-2">
              Duration: {domain.duration_months} Months
            </p>

            <p className="text-slate-400 text-sm mt-3">
              {domain.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default InternshipDomains;