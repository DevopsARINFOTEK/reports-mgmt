import { useState } from "react";

function CoursesGrid() {
  const courses = [
    {
      name: "Full Stack Development",
      students: 250,
      duration: "6 Months",
      progress: 85,
    },
    {
      name: "AWS DevOps",
      students: 180,
      duration: "4 Months",
      progress: 72,
    },
    {
      name: "Data Science",
      students: 300,
      duration: "8 Months",
      progress: 91,
    },
    {
      name: "Python Development",
      students: 220,
      duration: "5 Months",
      progress: 78,
    },
    {
      name: "UI/UX Design",
      students: 140,
      duration: "3 Months",
      progress: 65,
    },
    {
      name: "Power BI Analytics",
      students: 160,
      duration: "4 Months",
      progress: 82,
    },
  ];

  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Search Section */}
      <div className="bg-white rounded-3xl p-6 shadow-md mb-8">
        <input
          type="text"
          placeholder="Search courses..."
          className="border rounded-2xl px-5 py-3 w-full outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-pointer border border-slate-100 hover:border-blue-300 relative overflow-hidden"
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-200/20 to-orange-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10">
              {/* Course Title */}
              <h2 className="text-2xl font-bold group-hover:text-[#0F3D91] transition">
                {course.name}
              </h2>

              {/* Course Details */}
              <p className="text-slate-500 mt-4">
                Students Enrolled:{" "}
                <span className="font-semibold text-black">
                  {course.students}
                </span>
              </p>

              <p className="text-slate-500 mt-2">
                Duration:{" "}
                <span className="font-semibold text-black">
                  {course.duration}
                </span>
              </p>

              {/* Progress */}
              <div className="mt-5">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-slate-500">Completion</span>
                  <span className="text-sm font-semibold">
                    {course.progress}%
                  </span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-orange-500 h-3 rounded-full transition-all duration-700"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Button */}
              <button className="mt-6 w-full bg-[#0F3D91] text-white py-3 rounded-2xl font-medium group-hover:bg-orange-500 transition duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CoursesGrid;