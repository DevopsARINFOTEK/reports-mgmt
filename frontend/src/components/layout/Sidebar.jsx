import { Link, useLocation } from "react-router-dom";


function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Reports", path: "/reports" },
    { name: "Students", path: "/students" },
    { name: "Courses", path: "/courses" },
    { name: "Internships", path: "/internships" },
  ];

  return (
    <aside className="hidden md:flex w-64 bg-slate-900 text-white flex-col">

      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          AR INFOTEK
        </h1>

        <p className="text-sm text-slate-400">
          Training Portal
        </p>
      </div>

      <nav className="p-4 flex-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-3 rounded-xl mb-2 transition ${
              location.pathname === item.path
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

    </aside>
  );
}

export default Sidebar;