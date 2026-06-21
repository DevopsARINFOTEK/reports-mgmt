import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuClass = ({ isActive }) =>
    isActive
      ? "block bg-white text-blue-900 px-5 py-3 rounded-xl font-medium"
      : "block px-5 py-3 rounded-xl hover:bg-blue-700";

  return (
    <div className="w-72 bg-[#0F3D91] min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold">AR INFOTEK</h1>
      <p className="text-blue-200 mb-10">Report Management</p>

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
  );
}

export default Sidebar;