import { NavLink } from "react-router-dom";
import logo from "../../assets/arinfotek_logo.jpeg";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const menuClass = ({ isActive }) =>
    isActive
      ? "block bg-white text-blue-900 px-5 py-3 rounded-xl font-medium"
      : "block px-5 py-3 rounded-xl hover:bg-blue-700 transition";

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static top-0 left-0 z-50
          w-72 bg-[#0F3D91] min-h-screen text-white p-6
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="mb-10 bg-white rounded-3xl p-3 shadow-xl border border-blue-100">
          <img
            src={logo}
            alt="AR INFOTEK Logo"
            className="w-full object-contain"
          />
        </div>

        {/* Menu */}
        <div className="space-y-3">
          <NavLink to="/" className={menuClass}>
            Dashboard
          </NavLink>

          <NavLink to="/reports" className={menuClass}>
            Reports
          </NavLink>

          <NavLink to="/students" className={menuClass}>
            Students
          </NavLink>

          <NavLink to="/courses" className={menuClass}>
            Courses
          </NavLink>

          <NavLink to="/internships" className={menuClass}>
            Internships
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Sidebar;