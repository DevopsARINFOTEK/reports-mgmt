import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-72 bg-[#0F3D91] min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold">AR INFOTEK</h1>
      <p className="text-blue-200 mb-10">Report Management</p>

      <div className="space-y-3">
        <Link to="/" className="block bg-white text-blue-900 px-5 py-3 rounded-xl font-medium">
          Dashboard
        </Link>

        <Link to="/reports" className="block px-5 py-3 rounded-xl hover:bg-blue-700">
          Reports
        </Link>

        <Link to="/students" className="block px-5 py-3 rounded-xl hover:bg-blue-700">
          Students
        </Link>

        <Link to="/courses" className="block px-5 py-3 rounded-xl hover:bg-blue-700">
          Courses
        </Link>

        <Link to="/internships" className="block px-5 py-3 rounded-xl hover:bg-blue-700">
          Internships
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;