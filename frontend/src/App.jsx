import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Internships from "./pages/Internships";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/students" element={<Students />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/internships" element={<Internships />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;