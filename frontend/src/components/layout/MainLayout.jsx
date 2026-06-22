import { useState } from "react";
import Sidebar from "./Sidebar";
import ReportHeader from "./ReportHeader";
import ReportFooter from "./ReportFooter";

function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1 flex flex-col">
        <ReportHeader setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>

        <ReportFooter />
      </div>
    </div>
  );
}

export default MainLayout;