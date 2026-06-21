import { useState } from "react";

function StudentsGrid() {
  const students = [
    {
      name: "Arun Kumar",
      course: "Full Stack Development",
      progress: 85,
      status: "Active",
    },
    {
      name: "Priya Sharma",
      course: "Data Science",
      progress: 72,
      status: "Active",
    },
    {
      name: "Rahul Verma",
      course: "AWS DevOps",
      progress: 100,
      status: "Completed",
    },
    {
      name: "Sneha Reddy",
      course: "Python Programming",
      progress: 60,
      status: "Active",
    },
    {
      name: "Kiran Raj",
      course: "Cloud Computing",
      progress: 95,
      status: "Completed",
    },
    {
      name: "Meena Devi",
      course: "UI/UX Design",
      progress: 78,
      status: "Active",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Search */}
      <div className="bg-white rounded-3xl p-6 shadow-md mb-8">
        <input
          type="text"
          placeholder="Search students..."
          className="border rounded-2xl px-5 py-3 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Students Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredStudents.map((student, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300"
          >
            <h2 className="text-xl font-bold text-slate-800">
              {student.name}
            </h2>

            <p className="text-slate-500 mt-1">{student.course}</p>

            <div className="mt-5">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>{student.progress}%</span>
              </div>

              <div className="w-full bg-slate-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: `${student.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="mt-5 flex justify-between items-center">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  student.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {student.status}
              </span>

              <button className="bg-[#0F3D91] text-white px-4 py-2 rounded-xl hover:bg-blue-800">
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