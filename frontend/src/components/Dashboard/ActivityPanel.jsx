import { useEffect, useState } from "react";

function ActivityPanel() {

  const [activities, setActivities] =
    useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/activities")
      .then((res) => res.json())
      .then((data) => {
        setActivities(data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <div className="bg-white rounded-3xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="bg-[#F5F7FB] rounded-2xl p-4 border border-slate-100"
          >

            <h3 className="font-semibold text-slate-800">
              {activity.activity_type}
            </h3>

            <p className="text-slate-600 mt-1">
              {activity.title}
            </p>

            <p className="text-sm text-slate-500 mt-2">
              {activity.activity_date
                ? new Date(
                    activity.activity_date
                  ).toLocaleDateString()
                : "-"}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ActivityPanel;