import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-5xl font-bold mb-8">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-lg text-gray-300 leading-9">
          Hello! I'm <span className="text-cyan-400 font-semibold">Vansh Bhavsar</span>,
          a passionate Frontend Developer and BCA student.
          I enjoy building modern, responsive, and user-friendly web applications
          using React, JavaScript, and Tailwind CSS.
        </p>

        <p className="text-lg text-gray-300 leading-9 mt-6">
          I love learning new technologies, solving problems, and creating
          beautiful digital experiences. My goal is to continuously improve
          my skills and build innovative projects that make a difference.
        </p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-10 bg-cyan-500 px-8 py-3 rounded-full font-semibold hover:bg-cyan-600 transition"
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
}

export default About;