import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const programmingLanguages = [
    "Python",
    "SQL",
    "HTML",
    "CSS",
  ];

  const libraries = [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Scikit-learn",
    "Seaborn",
  ];

  const tools = [
    "Power BI",
    "Git",
    "VS Code",
    "Django",
    "MySQL",
  ];

  const others = [
    "Data Analysis",
    "Dashboarding",
    "Machine Learning",
    "Report Generation",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              {/* Leave this space for your About Me text */}
              [Your About Me goes here...]
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {libraries.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Others</h3>
                <div className="flex flex-wrap gap-2">
                  {others.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.E. in Computer Science</strong> – PDA College of
                  Engineering, Kalaburagi (Jan 2024)
                </li>
                <li>CGPA: 6.5</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Internship Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Inventeron Technologies and Business Solutions LLP (Aug 2022 -
                    Sep 2022)
                  </h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      Gained foundational knowledge in full-stack web development.
                    </li>
                    <li>
                      Implemented HTML, CSS, Python, and database integration to
                      build simple web applications.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">📊 Projects</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Sales Dashboard and Customer Insights</strong> (Power BI,
                  SQL)
                  <ul className="list-disc ml-6">
                    <li>
                      Developed an interactive Power BI dashboard to track sales
                      KPIs and customer trends.
                    </li>
                    <li>
                      Extracted and transformed data using SQL to generate insights
                      such as churn rate, revenue, and product performance.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Employee Attrition Prediction Using Machine Learning
                  </strong>{" "}
                  (Python, Scikit-learn, Matplotlib, Seaborn)
                  <ul className="list-disc ml-6">
                    <li>
                      Built a predictive model using Logistic Regression and Random
                      Forest to predict employee attrition.
                    </li>
                    <li>
                      Analyzed key factors like job satisfaction and overtime to
                      determine the likelihood of attrition.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Personal Portfolio Website</strong> (Django, HTML, CSS)
                  <ul className="list-disc ml-6">
                    <li>
                      Designed a personal website to showcase my resume, project
                      portfolio, and contact information.
                    </li>
                    <li>
                      Deployed on PythonAnywhere with version control using Git.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Certifications</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Machine Learning – Udemy</li>
                <li>Python Django Framework – Udemy</li>
                <li>MySQL Beginner to Advanced – Udemy</li>
                <li>Internet of Things (IoT) – NPTEL</li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};