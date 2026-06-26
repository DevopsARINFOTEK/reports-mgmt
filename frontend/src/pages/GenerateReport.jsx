import { useState } from "react";
import axios from "axios";
import MainLayout from "../components/layout/MainLayout";
import { downloadStudentExcel } from "../services/reportService";

function GenerateReport() {

    const [reportType, setReportType] = useState("Students");
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);

    const generateReport = async () => {

        try {

            setLoading(true);

            const response = await axios.get(
                "http://localhost:5000/reports/students"
            );

            setStudents(response.data);

        } catch (error) {

            console.error(error);

            alert("Unable to generate report.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <MainLayout>

            <div className="bg-gradient-to-r from-[#0B2F6B] to-[#2563EB] rounded-3xl p-10 text-white shadow-lg">

                <h1 className="text-5xl font-bold">
                    Report Generator
                </h1>

                <p className="mt-3 text-blue-100 text-lg">
                    Generate professional reports from PostgreSQL Database
                </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

                <h2 className="text-3xl font-bold mb-8">
                    Report Filters
                </h2>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                    <div>
                        <label className="font-semibold">
                            Report Type
                        </label>

                        <select
                            className="border rounded-xl p-3 w-full mt-2"
                            value={reportType}
                            onChange={(e) => setReportType(e.target.value)}
                        >
                            <option>Students</option>
                            <option>Internships</option>
                            <option>Attendance</option>
                            <option>Certificates</option>
                            <option>Placements</option>
                            <option>Projects</option>
                            <option>Mentors</option>
                        </select>

                    </div>

                    <div>

                        <label className="font-semibold">
                            Status
                        </label>

                        <select className="border rounded-xl p-3 w-full mt-2">
                            <option>All</option>
                            <option>Active</option>
                            <option>Completed</option>
                        </select>

                    </div>

                    <div>

                        <label className="font-semibold">
                            From Date
                        </label>

                        <input
                            type="date"
                            className="border rounded-xl p-3 w-full mt-2"
                        />

                    </div>

                    <div>

                        <label className="font-semibold">
                            To Date
                        </label>

                        <input
                            type="date"
                            className="border rounded-xl p-3 w-full mt-2"
                        />

                    </div>

                </div>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

                <h2 className="text-3xl font-bold mb-8">
                    Actions
                </h2>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
<button
    onClick={() => {
        alert("Button Clicked");
        generateReport();
    }}
    className="bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-semibold"
>
    Generate Report
</button>
                    <button
                        onClick={downloadStudentExcel}
                        className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold"
                    >
                        Export Excel
                    </button>

                    <button
                        className="bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-semibold"
                    >
                        Export PDF
                    </button>

                    <button
                        onClick={() => window.print()}
                        className="bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold"
                    >
                        Print Report
                    </button>

                </div>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 mt-8 mb-10">

                <h2 className="text-3xl font-bold mb-6">
                    Report Preview
                </h2>

                {loading ? (

                    <div className="text-center py-20 text-xl">
                        Loading...
                    </div>

                ) : (

                    <div className="overflow-x-auto">

                        <table className="min-w-full border">

                            <thead>

                                <tr className="bg-[#1E5AA8] text-white">

                                    <th className="p-3">ID</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Mobile</th>
                                    <th className="p-3">College</th>
                                    <th className="p-3">Department</th>
                                    <th className="p-3">Status</th>

                                </tr>

                            </thead>

                            <tbody>

                                {students.length === 0 ? (

                                    <tr>

                                        <td
                                            colSpan={7}
                                            className="text-center py-10"
                                        >
                                            Click Generate Report to load data.
                                        </td>

                                    </tr>

                                ) : (

                                    students.map((student) => (

                                        <tr
                                            key={student.intern_id}
                                            className="border-b"
                                        >

                                            <td className="p-3">{student.intern_id}</td>
                                            <td className="p-3">{student.intern_name}</td>
                                            <td className="p-3">{student.email}</td>
                                            <td className="p-3">{student.mobile}</td>
                                            <td className="p-3">{student.college}</td>
                                            <td className="p-3">{student.department}</td>
                                            <td className="p-3">{student.status}</td>

                                        </tr>

                                    ))

                                )}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>

        </MainLayout>

    );

}

export default GenerateReport;                              