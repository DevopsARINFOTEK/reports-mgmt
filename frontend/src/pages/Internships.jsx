import MainLayout from "../components/layout/MainLayout";

import InternshipOverviewCards from "../components/Internships/InternshipOverviewCards";
import InternshipDomains from "../components/Internships/InternshipDomains";
import InternshipProgress from "../components/Internships/InternshipProgress";
import RecentInterns from "../components/Internships/RecentInterns";
import AttendanceChart from "../components/Internships/AttendanceChart";

function Internships() {
  return (
    <MainLayout>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#2563EB] rounded-3xl p-8 text-white shadow-xl mb-8">

        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Internship Management
        </h1>

        <p className="text-blue-100 text-lg">
          Track Interns, Projects, Attendance,
          Performance & Certifications
        </p>

      </div>

      {/* Statistics Cards */}
      <InternshipOverviewCards />

      {/* Domains */}
      <div className="mt-8">
        <InternshipDomains />
      </div>

      {/* Progress + Recent Interns */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">

        <InternshipProgress />

        <RecentInterns />

      </div>

      {/* Attendance Analytics */}
      <div className="mt-8">

        <AttendanceChart />

      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-3xl shadow-lg p-6 mt-8">

        <h2 className="text-2xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

          <button className="bg-[#1E3A8A] text-white rounded-2xl p-4 font-semibold hover:scale-105 transition">
            + Register Intern
          </button>

          <button className="bg-[#ff891c] text-white rounded-2xl p-4 font-semibold hover:scale-105 transition">
            + Assign Project
          </button>

          <button className="bg-green-600 text-white rounded-2xl p-4 font-semibold hover:scale-105 transition">
            + Generate Certificate
          </button>

          <button className="bg-purple-600 text-white rounded-2xl p-4 font-semibold hover:scale-105 transition">
            + Attendance Report
          </button>

        </div>

      </div>

    </MainLayout>
  );
}

export default Internships;