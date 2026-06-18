import Sidebar from "../components/layout/Sidebar";
import ReportHeader from "../components/layout/ReportHeader";
import ReportFooter from "../components/layout/ReportFooter";

function Students() {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <ReportHeader />

        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold">
            Students
          </h1>
        </main>

        <ReportFooter />

      </div>

    </div>
  );
}

export default Students;