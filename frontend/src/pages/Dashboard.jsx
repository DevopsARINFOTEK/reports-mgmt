import MainLayout from "../components/layout/MainLayout";
import DashboardCards from "../components/dashboard/DashboardCards";

function Dashboard() {
  return (
    <MainLayout>

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome to AR INFOTEK Report Management System
        </p>

      </div>

      <DashboardCards />

    </MainLayout>
  );
}

export default Dashboard;