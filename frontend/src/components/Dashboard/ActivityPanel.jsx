function ActivityPanel() {
  const activities = [
    {
      title: "Student report generated",
      time: "2 mins ago",
    },
    {
      title: "Revenue report exported",
      time: "10 mins ago",
    },
    {
      title: "Certificates uploaded",
      time: "1 hour ago",
    },
    {
      title: "New batch enrolled",
      time: "3 hours ago",
    },
    {
      title: "Placement report updated",
      time: "Today",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-[#F5F7FB] rounded-2xl p-4 border border-slate-100"
          >
            <h3 className="font-semibold text-slate-800">
              {activity.title}
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              {activity.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityPanel;