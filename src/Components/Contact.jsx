import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r97pban",
        "template_ibcqgyv",
        form.current,
        "74tXOd9lFFHs06ujj"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12"
        >
          Feel free to contact me anytime!
        </motion.p>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-800 p-8 rounded-2xl shadow-lg space-y-6"
        >
          {/* Name */}
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {/* Email */}
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-4 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {/* Message */}
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          ></textarea>

          {/* Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-cyan-500 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;