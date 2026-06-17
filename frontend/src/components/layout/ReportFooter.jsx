function ReportFooter() {
  return (
    <footer className="bg-[#1e5aa8] text-slate-200 py-10 mt-10">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-2xl font-black text-white mb-4">
            AR INFOTEK
          </h3>

          <p className="text-sm text-slate-300">
            Practical IT Training and Internship Programs.
          </p>
        </div>

        <div>
          <h5 className="font-bold text-[#ff891c] mb-4">
            Reports
          </h5>

          <ul className="space-y-2 text-sm">
            <li>Student Reports</li>
            <li>Attendance Reports</li>
            <li>Placement Reports</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-[#ff891c] mb-4">
            Management
          </h5>

          <ul className="space-y-2 text-sm">
            <li>Revenue Reports</li>
            <li>Trainer Reports</li>
            <li>Course Reports</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-[#ff891c] mb-4">
            System
          </h5>

          <ul className="space-y-2 text-sm">
            <li>Settings</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs text-slate-400 mt-10 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} AR INFOTEK. All Rights Reserved.
      </div>

    </footer>
  );
}

export default ReportFooter;