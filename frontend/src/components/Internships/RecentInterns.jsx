import { useEffect, useState } from "react";

function RecentInterns() {

  const [interns, setInterns] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/interns")
      .then((res) => res.json())
      .then((data) => {
        setInterns(data);
      })
      .catch(console.error);

  }, []);

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Interns
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Name</th>
              <th className="text-left py-3">Department</th>
              <th className="text-left py-3">College</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>

          <tbody>

            {interns.map((intern) => (

              <tr
                key={intern.intern_id}
                className="border-b"
              >

                <td className="py-3">
                  {intern.intern_name}
                </td>

                <td>
                  {intern.department}
                </td>

                <td>
                  {intern.college}
                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      intern.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {intern.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default RecentInterns;