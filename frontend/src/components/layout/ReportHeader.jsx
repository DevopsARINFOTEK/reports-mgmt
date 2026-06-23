import { useNavigate } from "react-router-dom";

function ReportHeader({ setSidebarOpen }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="px-4 md:px-8 lg:px-10 py-5 flex justify-between items-center">
        
        {/* Left Section */}
        <div className="flex items-center gap-4">
          
          {/* Mobile Menu */}
          <button
            className="lg:hidden text-3xl text-slate-800"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          {/* Branding */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-10 rounded-full bg-gradient-to-b from-orange-500 to-blue-600"></div>

            <div>
              <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#2563EB] bg-clip-text text-transparent">
                AR INFOTEK
              </h1>

              <p className="text-slate-500 text-sm md:text-base tracking-wide">
                Report Management System
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex gap-4 items-center">
          
          <button className="px-6 py-3 rounded-2xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition duration-300 shadow-sm">
            Export
          </button>

          <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-orange-300 transition duration-300">
            Generate Report
          </button>

          <button
            onClick={logout}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-red-300 transition duration-300"
          >
            Logout
          </button>

        </div>
      </div>
    </header>
  );
}

export default ReportHeader;