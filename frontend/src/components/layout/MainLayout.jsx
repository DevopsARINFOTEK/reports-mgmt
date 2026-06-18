import Sidebar from "./Sidebar";
import ReportHeader from "./ReportHeader";
import ReportFooter from "./ReportFooter";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <ReportHeader />

        <main className="flex-1 p-6">
          {children}
        </main>

        <ReportFooter />

      </div>

    </div>
  );
}

export default MainLayout;