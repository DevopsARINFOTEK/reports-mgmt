import {
  BarChart,
  Bar,
 XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
 Cell,
  Legend,
} from "recharts";

const studentData = [
  { month: "Jan", students: 120 },
  { month: "Feb", students: 220 },
  { month: "Mar", students: 340 },
  { month: "Apr", students: 500 },
  { month: "May", students: 720 },
  { month: "Jun", students: 900 },
];

const courseData = [
  { name: "Web Dev", value: 35 },
  { name: "Python", value: 25 },
  { name: "DevOps", value: 20 },
  { name: "AI/ML", value: 20 },
];

const COLORS = ["#0F3D91", "#FF7A00", "#16A34A", "#9333EA"];

function Analytics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Student Growth */}
      <div className="bg-white rounded-3xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Interns Growth</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={studentData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="students" fill="#0F3D91" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Course Distribution */}
      <div className="bg-white rounded-3xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Course Distribution</h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={courseData} dataKey="value" outerRadius={100} label>
              {courseData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Analytics;