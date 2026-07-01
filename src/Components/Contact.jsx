import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

function Contact() {
  const initialValues = {
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    from_name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),

    from_email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),

    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        values,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          resetForm();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message.");
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
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

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Form className="bg-slate-800 p-8 rounded-2xl shadow-lg space-y-6">
                {/* Name */}
                <div>
                  <Field
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                  <ErrorMessage
                    name="from_name"
                    component="p"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                {/* Email */}
                <div>
                  <Field
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    className="w-full p-4 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                  <ErrorMessage
                    name="from_email"
                    component="p"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full p-4 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                  <ErrorMessage
                    name="phone"
                    component="p"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                {/* Message */}
                <div>
                  <Field
                    as="textarea"
                    rows="5"
                    name="message"
                    placeholder="Your Message"
                    className="w-full p-4 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                  />
                  <ErrorMessage
                    name="message"
                    component="p"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                {/* Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-cyan-500 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </Form>
            </motion.div>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Contact;