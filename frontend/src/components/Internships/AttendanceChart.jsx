import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#16A34A",
  "#DC2626",
  "#F59E0B",
  "#2563EB",
];

function AttendanceChart() {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/attendance-summary")
      .then((res) => res.json())
      .then((result) => {

        const chartData = result.map((item) => ({
          name: item.status,
          value: Number(item.count),
        }));

        setData(chartData);

      })
      .catch(console.error);

  }, []);

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Attendance Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >

            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[index % COLORS.length]
                }
              />
            ))}

          </Pie>

          <Tooltip />
          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default AttendanceChart;