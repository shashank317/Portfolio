import { RevealOnScroll } from "../RevealOnScroll";
export const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Sales Dashboard and Customer Insights
              </h3>
              <p className="text-gray-400 mb-4">
                Developed an interactive sales dashboard in Power BI integrated
                with Python for data processing. Used Python (Pandas and
                Matplotlib) for cleaning, analyzing, and visualizing sales data
                before feeding it into Power BI. Delivered actionable insights on
                churn rate, revenue growth, city-wise sales, and product
                performance.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Power BI", "Python", "Pandas", "Matplotlib"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/shashank317/sales_data_analysis"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Movie Recommendation System using Machine Learning
              </h3>
              <p className="text-gray-400 mb-4">
                Built a content-based movie recommendation system using cosine
                similarity and TF-IDF vectorization. Processed and analyzed movie
                metadata using Python libraries. Designed a basic web interface to
                take user input and display recommended movies. Focused on
                recommending recent and trending movies using an enhanced dataset.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/shashank317/movie_recommendation-ML-"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Personal Portfolio Website</h3>
              <p className="text-gray-400 mb-4">
                Designed and developed a responsive portfolio website to showcase
                resume, projects, and contact information. Used JavaScript for
                interactivity and Tailwind CSS for fast and responsive styling.
                Focused on clean design, user-friendly layout, and mobile
                responsiveness. Deployed on a live server and version-controlled
                with Git.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "Tailwind CSS", "Git"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/shashank317/Portfolio"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};