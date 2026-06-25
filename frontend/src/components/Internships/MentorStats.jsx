import { useEffect, useState } from "react";

function MentorStats() {

  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/mentors")
      .then(res => res.json())
      .then(data => setMentors(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Mentors
      </h2>

      <div className="space-y-4">

        {mentors.map((mentor) => (

          <div
            key={mentor.mentor_id}
            className="border rounded-2xl p-4"
          >

            <h3 className="font-semibold">
              {mentor.mentor_name}
            </h3>

            <p className="text-slate-500">
              {mentor.email}
            </p>

            <p className="text-slate-500">
              {mentor.mobile}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default MentorStats;