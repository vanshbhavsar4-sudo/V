import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A personal portfolio website built using React, Tailwind CSS, and Framer Motion.",
      github: "https://github.com/vanshbhavsar4-sudo/Portfolio1",
      live: "#",
    },

    {
      id: 2,
      title: "Hotel Resort Website",
      description:
        "A modern and responsive hotel resort website built using React and Tailwind CSS.",
      github: "https://github.com/vanshbhavsar4-sudo/Royal-Stay-resort-",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;