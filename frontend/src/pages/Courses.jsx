import MainLayout from "../components/layout/MainLayout";

function Courses() {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold">
            Full Stack Development
          </h3>

          <p className="text-slate-500 mt-2">
            React, Node.js, PostgreSQL
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold">
            Python Development
          </h3>

          <p className="text-slate-500 mt-2">
            Python, Django, APIs
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold">
            Data Science
          </h3>

          <p className="text-slate-500 mt-2">
            Pandas, ML, Visualization
          </p>
        </div>

      </div>

    </MainLayout>
  );
}

export default Courses;