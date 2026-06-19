function ReportHeader() {
  return (
    <div className="bg-white px-10 py-5 shadow-sm flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          AR INFOTEK
        </h1>
        <p className="text-slate-500">Report Management System</p>
      </div>

      <div className="flex gap-4">
        <button className="border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-xl font-semibold">
          Export
        </button>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold">
          Generate Report
        </button>
      </div>
    </div>
  );
}

export default ReportHeader;