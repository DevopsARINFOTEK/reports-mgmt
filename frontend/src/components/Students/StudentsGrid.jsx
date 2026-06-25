import { useEffect, useState } from "react";

function StudentsGrid() {

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetch("http://localhost:5000/interns")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.error("Intern Fetch Error:", error);
      });

  }, []);

  const filteredStudents = students.filter((student) =>
    student.intern_name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <div className="bg-white rounded-3xl p-6 shadow-md mb-8">

        <input
          type="text"
          placeholder="Search interns..."
          className="border rounded-2xl px-5 py-3 w-full outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredStudents.map((student) => (

          <div
            key={student.intern_id}
            className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 border border-slate-100 hover:border-blue-300 relative overflow-hidden"
          >

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-200/20 to-orange-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10">

              <h2 className="text-2xl font-bold group-hover:text-[#0F3D91] transition">
                {student.intern_name}
              </h2>

              <p className="text-slate-500 mt-2">
                {student.department}
              </p>

              <div className="mt-4 space-y-2">

                <p>
                  <span className="font-semibold">
                    Email:
                  </span>{" "}
                  {student.email}
                </p>

                <p>
                  <span className="font-semibold">
                    Mobile:
                  </span>{" "}
                  {student.mobile}
                </p>

                <p>
                  <span className="font-semibold">
                    College:
                  </span>{" "}
                  {student.college}
                </p>

              </div>

              <div className="mt-5">

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    student.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {student.status}
                </span>

              </div>

              <button className="mt-6 w-full bg-[#0F3D91] text-white py-3 rounded-2xl font-medium hover:bg-orange-500 transition duration-300">
                View Profile
              </button>

            </div>

          </div>

        ))}

      </div>
    </>
  );
}

export default StudentsGrid;