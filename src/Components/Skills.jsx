import { motion } from "framer-motion";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-4"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <p className="text-center text-gray-400 mb-12">
          Technologies and tools that I use for development.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.08,
                  y: -5,
                }}
                className="bg-slate-800 p-6 rounded-2xl text-center shadow-lg cursor-pointer"
              >
                <Icon className="text-5xl mx-auto text-cyan-400 mb-4" />

                <h3 className="text-lg font-semibold">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;