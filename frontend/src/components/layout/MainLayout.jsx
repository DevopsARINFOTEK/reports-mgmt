import Sidebar from "./Sidebar";
import ReportHeader from "./ReportHeader";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F5F7FB] flex">
      <Sidebar />

      <div className="flex-1">
        <ReportHeader />

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;