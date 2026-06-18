import { useState } from "react";

function ReportHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">

        <div className="px-6 py-4 flex items-center justify-between">

          {/* Mobile Logo */}
          <div className="flex items-center gap-3">
          <div className="flex-1">

          <h1 className="text-3xl font-bold text-slate-800">
               AR INFOTEK
          </h1>

         <p className="text-sm text-slate-500">
             Report Management System
           </p>

        </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fa-solid fa-bars text-xl"></i>
          </button>

          {/* Desktop Header Actions */}
          <div className="hidden md:flex items-center gap-4">

            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50">
              Export
            </button>

            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600">
              Generate Report
            </button>

          </div>

        </div>

      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-sm">

          <nav className="flex flex-col">

            <a
              href="/"
              className="px-6 py-4 hover:bg-slate-100"
            >
              Dashboard
            </a>

            <a
              href="/reports"
              className="px-6 py-4 hover:bg-slate-100"
            >
              Reports
            </a>

            <a
              href="/students"
              className="px-6 py-4 hover:bg-slate-100"
            >
              Students
            </a>

            <a
              href="/courses"
              className="px-6 py-4 hover:bg-slate-100"
            >
              Courses
            </a>

            <a
              href="/internships"
              className="px-6 py-4 hover:bg-slate-100"
            >
              Internships
            </a>

          </nav>

        </div>
      )}
    </>
  );
}

export default ReportHeader;