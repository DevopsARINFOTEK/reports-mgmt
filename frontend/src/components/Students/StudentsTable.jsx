import { useState } from "react";

function StudentsTable() {
  const studentsData = [
    {
      name: "Arun Kumar",
      course: "React",
      joined: "12 Jun",
      status: "Active",
    },
    {
      name: "Priya",
      course: "Python",
      joined: "10 Jun",
      status: "Completed",
    },
    {
      name: "Rahul",
      course: "DevOps",
      joined: "08 Jun",
      status: "Active",
    },
    {
      name: "Divya",
      course: "AI/ML",
      joined: "05 Jun",
      status: "Completed",
    },
    {
      name: "Karthik",
      course: "React",
      joined: "03 Jun",
      status: "Active",
    },
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || student.course === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white rounded-3xl shadow-md p-6">
      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between mb-6">
        <div className="flex gap-4 w-full">
          <input
            type="text"
            placeholder="Search students..."
            className="border rounded-xl px-4 py-3 w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border rounded-xl px-4 py-3"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>React</option>
            <option>Python</option>
            <option>DevOps</option>
            <option>AI/ML</option>
          </select>
        </div>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-xl">
          Add Student
        </button>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="pb-4">Name</th>
            <th className="pb-4">Course</th>
            <th className="pb-4">Joined</th>
            <th className="pb-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index} className="border-b h-16">
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.joined}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    student.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {student.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsTable;