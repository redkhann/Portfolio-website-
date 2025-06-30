import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:rehan.khan.786092.rk@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0AEmail: ${formData.email}`;
    setSubmitted(true);
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-b from-white to-blue-50 text-gray-800"} min-h-screen p-6 transition-all duration-500`}>
      <header className="text-center py-8">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold">
          Mohd Rehan Khan
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl">
          Software Developer | BCA Student | Tech Educator
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-4 flex flex-col items-center gap-4">
          <a href="/RESUME.pdf" download>
            <Button>Download Resume</Button>
          </a>
          <Button variant="outline" onClick={toggleDarkMode}>
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </Button>
        </motion.div>
      </header>

      <section className="my-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700 dark:text-blue-300">About Me</h2>
        <p className="leading-relaxed">
          I'm Mohd Rehan Khan, born on January 26, 2005. A passionate tech-driven individual currently pursuing BCA at Maharaja Agrasen Mahavidyalaya.
          I have a strong foundation in computer fundamentals, programming in C and Python, and MS Office applications. With experience in IT support and
          teaching, I aim to grow in full stack development, DevOps, and AI/ML fields.
        </p>
      </section>

      <section className="my-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["Python", "C", "Computer Fundamentals", "MS Office", "Typing (40-50 WPM)", "Teaching", "Troubleshooting", "Communication", "Hindi", "English", "Urdu"].map(skill => (
            <span key={skill} className="bg-blue-100 dark:bg-blue-800 dark:text-white px-4 py-2 rounded-xl font-medium shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="my-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700 dark:text-blue-300">Projects</h2>
        <p className="text-lg">Currently working on projects — will be added soon!</p>
      </section>

      <section className="my-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Certifications</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Full Stack Web Development - Coursera</li>
          <li>AI/ML Basics - Google AI</li>
          <li>Git and GitHub - freeCodeCamp</li>
        </ul>
      </section>

      <section className="my-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Your Name" required className="w-full p-2 rounded border dark:bg-gray-800" onChange={e => setFormData({ ...formData, name: e.target.value })} />
          <input type="email" placeholder="Your Email" required className="w-full p-2 rounded border dark:bg-gray-800" onChange={e => setFormData({ ...formData, email: e.target.value })} />
          <textarea placeholder="Your Message" required className="w-full p-2 rounded border dark:bg-gray-800" rows="4" onChange={e => setFormData({ ...formData, message: e.target.value })}></textarea>
          <Button type="submit">Send Message</Button>
          {submitted && <p className="text-green-500 pt-2">Redirecting to your email app...</p>}
        </form>
      </section>

      <footer className="text-center py-8 text-sm text-gray-500 dark:text-gray-400">
        &copy; 2025 Mohd Rehan Khan. All rights reserved.
      </footer>
    </div>
  );
}
