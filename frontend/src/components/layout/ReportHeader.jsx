import { useState } from "react";

function ReportHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

          <a href="/" className="flex items-center hover:opacity-90 transition">
            <img
              src="/arinfotek_logo.png"
              alt="AR INFOTEK"
              className="h-9 md:h-11 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-1 bg-slate-50 p-1 rounded-full border border-slate-100">
            <a href="/" className="px-4 py-1.5 text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-[#1e5aa8]">
              Dashboard
            </a>

            <a href="/reports" className="px-4 py-1.5 text-sm font-bold bg-[#1e5aa8] text-white rounded-full">
              Reports
            </a>

            <a href="#" className="px-4 py-1.5 text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-[#1e5aa8]">
              Students
            </a>

            <a href="#" className="px-4 py-1.5 text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-[#1e5aa8]">
              Courses
            </a>

            <a href="#" className="px-4 py-1.5 text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-[#1e5aa8]">
              Internships
            </a>
          </nav>

          <div className="flex items-center gap-3">

            <button className="hidden md:block px-5 py-2 rounded-lg border-2 border-[#1e5aa8] text-[#1e5aa8] font-bold text-sm">
              Export
            </button>

            <button className="hidden md:block px-5 py-2 rounded-lg bg-[#ff891c] text-white font-bold text-sm">
              Generate Report
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 rounded-lg border border-slate-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50">

          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMenuOpen(false)}
          />

          <div className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl p-6">

            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-[#1e5aa8]">
                MENU
              </h3>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              <a href="/" className="block p-3 rounded-lg hover:bg-slate-100">
                Dashboard
              </a>

              <a href="/reports" className="block p-3 rounded-lg hover:bg-slate-100">
                Reports
              </a>

              <a href="#" className="block p-3 rounded-lg hover:bg-slate-100">
                Students
              </a>

              <a href="#" className="block p-3 rounded-lg hover:bg-slate-100">
                Courses
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default ReportHeader;