import MainLayout from "../components/layout/MainLayout";
import ReportsOverviewCards from "../components/Reports/ReportsOverviewCards";
import ReportsGrid from "../components/Reports/ReportsGrid";

function Reports() {
  return (
    <MainLayout>
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#2563EB] rounded-3xl p-10 text-white mb-8 shadow-xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>

        <h1 className="text-5xl font-bold relative z-10">
          Reports Management
        </h1>

        <p className="mt-3 text-blue-100 text-lg relative z-10">
          Generate, Manage & Track Reports Efficiently
        </p>
      </div>

      <ReportsOverviewCards />

      <div className="mt-8">
        <ReportsGrid />
      </div>
    </MainLayout>
  );
}

export default Reports;