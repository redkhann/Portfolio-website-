import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-6">
      <header className="text-center py-8">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold text-gray-800">
          Mohd Rehan Khan
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl text-gray-600">
          Software Developer | BCA Student | Tech Educator
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <a href="/RESUME V4(1).PDF" download>
            <Button className="mt-4">Download Resume</Button>
          </a>
        </motion.div>
      </header>

      <section className="my-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm Mohd Rehan Khan, born on January 26, 2005. A passionate tech-driven individual currently pursuing BCA at Maharaja Agrasen Mahavidyalaya. I have a strong foundation in computer fundamentals, programming in C and Python, and MS Office applications. With experience in IT support and teaching, I aim to grow in full stack development, DevOps, and AI/ML fields.
        </p>
      </section>

      <section className="my-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["Python", "C", "Computer Fundamentals", "MS Office", "Typing (40-50 WPM)", "Teaching", "Troubleshooting", "Communication", "Hindi", "English", "Urdu"].map(skill => (
            <span key={skill} className="bg-blue-100 px-4 py-2 rounded-xl text-blue-800 font-medium shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="my-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3].map(project => (
            <Card key={project} className="hover:scale-[1.01] transition-transform duration-200">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Project {project}</h3>
                <p className="text-sm text-gray-600 mb-3">Short project description goes here.</p>
                <div className="flex gap-2">
                  <Button variant="outline">GitHub</Button>
                  <Button variant="outline">Live Demo</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="my-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">Certifications</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Full Stack Web Development - Coursera</li>
          <li>AI/ML Basics - Google AI</li>
          <li>Git and GitHub - freeCodeCamp</li>
        </ul>
      </section>

      <section className="my-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">Contact</h2>
        <p>Email: <a href="mailto:rehan.khan.786092.rk@gmail.com" className="text-blue-600 hover:underline">rehan.khan.786092.rk@gmail.com</a></p>
        <p>Phone: <span className="text-blue-600">9634909360</span></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/mohd-rehan-khan-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-blue-600 hover:underline">linkedin.com/in/mohd-rehan-khan</a></p>
        <p>GitHub: <a href="https://github.com/rehan" className="text-blue-600 hover:underline">github.com/rehan</a></p>
      </section>

      <footer className="text-center py-8 text-sm text-gray-500">
        &copy; 2025 Mohd Rehan Khan. All rights reserved.
      </footer>
    </div>
  );
}
