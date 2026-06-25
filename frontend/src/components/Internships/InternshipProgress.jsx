import { useEffect, useState } from "react";

function InternshipProgress() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch(console.error);

  }, []);

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Project Progress
      </h2>

      <div className="space-y-5">

        {projects.map((project) => (

          <div key={project.project_id}>

            <div className="flex justify-between mb-2">

              <span>
                {project.project_name}
              </span>

              <span>
                {project.status}
              </span>

            </div>

            <div className="h-3 bg-slate-200 rounded-full">

              <div
                className="h-3 bg-blue-600 rounded-full"
                style={{
                  width:
                    project.status === "Completed"
                      ? "100%"
                      : project.status === "In Progress"
                      ? "70%"
                      : "30%"
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default InternshipProgress;