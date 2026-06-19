import MainLayout from "../components/layout/MainLayout";
import DashboardCards from "../components/Dashboard/DashboardCards";
import Analytics from "../components/Dashboard/Analytics";
import RecentReports from "../components/Dashboard/RecentReports";
import ActivityPanel from "../components/Dashboard/ActivityPanel";

function Dashboard() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-[#0B2F6B] to-[#0F3D91] rounded-3xl p-10 text-white mb-8 shadow-lg">
        <h1 className="text-5xl font-bold">
          Report Management Dashboard
        </h1>

        <p className="mt-4 text-blue-100 text-lg">
          Manage Student Reports, Analytics & Performance
        </p>
      </div>

      <DashboardCards />

      <div className="mt-8">
        <Analytics />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2">
          <RecentReports />
        </div>

        <ActivityPanel />
      </div>
    </MainLayout>
  );
}

export default Dashboard;