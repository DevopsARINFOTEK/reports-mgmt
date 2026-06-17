import ReportHeader from "../components/layout/ReportHeader";
import ReportFooter from "../components/layout/ReportFooter";
import ReportCards from "../components/reports/ReportCards";

function Reports() {
  return (
    <div className="min-h-screen bg-slate-100">
      <ReportHeader />

      <main className="max-w-7xl mx-auto p-6">
        <ReportCards />
      </main>

      <ReportFooter />
    </div>
  );
}

export default Reports;