import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bhavsar from "../assets/images/bhavsar image.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowDown,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-20 lg:flex-row lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-center lg:text-left"
        >
          <p className="mb-2 text-xl text-cyan-400">👋 Hello, I'm</p>

          <h1 className="mb-4 text-5xl font-bold md:text-7xl">
            Vansh <span className="text-cyan-400">Bhavsar</span>
          </h1>

          <motion.h2
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-6 text-2xl text-gray-300 md:text-3xl"
          >
            Frontend Developer | React Developer
          </motion.h2>

          <p className="mb-8 leading-8 text-gray-400">
            I build beautiful, responsive, and modern web applications using
            React, Tailwind CSS, and JavaScript.
          </p>

          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              to="/projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 transition hover:bg-cyan-600"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-cyan-400 px-6 py-3 transition hover:bg-cyan-400 hover:text-black"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-8 flex justify-center gap-6 text-3xl lg:justify-start">
            <a
              href="https://github.com/vanshbhavsar4-sudo"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="transition hover:text-cyan-400" />
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="transition hover:text-cyan-400" />
            </a>

            <a
              href="https://instagram.com/your-instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="transition hover:text-cyan-400" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, y: [0, -20, 0] }}
          transition={{ duration: 1, y: { duration: 4, repeat: Infinity } }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>
            <img
              src={bhavsar}
              alt="Vansh Bhavsar"
              className="relative h-80 w-80 rounded-full border-4 border-cyan-400 object-cover shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl text-cyan-400"
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
}

export default Hero;