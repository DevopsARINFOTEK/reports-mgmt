import { useState } from "react";

function StudentsGrid() {
  const students = [
    { name: "Arun Kumar", course: "Full Stack Development", progress: 85, status: "Active" },
    { name: "Priya Sharma", course: "Data Science", progress: 72, status: "Active" },
    { name: "Rahul Verma", course: "AWS DevOps", progress: 100, status: "Completed" },
    { name: "Sneha Reddy", course: "Python Programming", progress: 60, status: "Active" },
    { name: "Kiran Raj", course: "Cloud Computing", progress: 95, status: "Completed" },
    { name: "Meena Devi", course: "UI/UX Design", progress: 78, status: "Active" },
  ];

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="bg-white rounded-3xl p-6 shadow-md mb-8">
        <input
          type="text"
          placeholder="Search students..."
          className="border rounded-2xl px-5 py-3 w-full outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredStudents.map((student, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 border border-slate-100 hover:border-blue-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-200/20 to-orange-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold group-hover:text-[#0F3D91] transition">
                {student.name}
              </h2>

              <p className="text-slate-500 mt-2">{student.course}</p>

              <div className="mt-5">
                <div className="flex justify-between mb-2">
                  <span>Progress</span>
                  <span>{student.progress}%</span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-orange-500 h-3 rounded-full"
                    style={{ width: `${student.progress}%` }}
                  ></div>
                </div>
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

              <button className="mt-6 w-full bg-[#0F3D91] text-white py-3 rounded-2xl font-medium group-hover:bg-orange-500 transition duration-300">
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