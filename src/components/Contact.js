import React from "react";
import User from "./User";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 animate-fade-in-up">
        <h1 className="text-4xl font-bold text-green-700 mb-4 border-b pb-2 animate-fade-in-up">
          Contact Me
        </h1>

        <p className="text-lg text-gray-700 mb-6 animate-fade-in-up">
          Thanks for visiting! Feel free to reach out through any of the platforms below or check out my profile details:
        </p>

        <div className="animate-fade-in-up">
          <User />
        </div>

        <div className="mt-8 animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🌐 Connect With Me
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaGithub className="text-gray-700 text-2xl mr-3" />
              <a
                href="https://github.com/Vaibhav-Panwar-1604"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-medium hover:underline"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center">
              <FaLinkedin className="text-blue-700 text-2xl mr-3" />
              <a
                href="https://www.linkedin.com/in/vaibhav-panwar-b0410a22a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-medium hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center">
              <FaFileAlt className="text-red-400 text-2xl mr-3" />
              <a
                href="https://drive.google.com/file/d/1P10HuDkF6vvC4x_AUcREu5b_oSkzYpuF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-medium hover:underline"
              >
                View Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
