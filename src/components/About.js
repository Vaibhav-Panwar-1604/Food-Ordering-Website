import React from "react";

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-8">
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 animate-fade-in-up">
      <h1 className="text-4xl font-bold text-green-700 mb-4 border-b pb-2">
        About
      </h1>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Welcome to My React Food Ordering Website 🍕
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        This project is a fully dynamic and responsive food ordering
        application built completely from scratch using{" "}
        <strong className="text-green-600">React.js</strong>
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        💻 I wrote and executed all test cases by hand—using{" "}
        <strong className="text-green-600">Jest</strong> and{" "}
        <strong className="text-green-600">React Testing Library</strong>—to
        ensure reliability of UI components, reducer logic, and app flows.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        🧠 <strong className="text-green-600">Redux</strong> manages global
        state—especially the cart—ensuring stable and testable data flow.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        📡 Live restaurant data is fetched from{" "}
        <strong className="text-green-600">Swiggy’s public API</strong>, so
        listings are always up‑to‑date.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        🛒 Users can <span className="font-semibold text-green-700">add or remove</span> items from the cart—mirroring real-world food apps.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
        🔑 Key Features:
      </h3>
      <ul className="list-disc list-inside text-gray-700 text-lg mb-4">
        <li>Fully custom build (no CRA/Vite) with Babel & bundler</li>
        <li>Live restaurant data via Swiggy API</li>
        <li>Dynamic routing using React Router</li>
        <li>Conditional & reusable components</li>
        <li>Search & filter functionality</li>
        <li>Context API & Redux for user & cart state</li>
        <li>Offline detection using a custom hook</li>
        <li>Manual testing with Jest & React Testing Library</li>
      </ul>

      <p className="text-gray-700 text-lg leading-relaxed">
        This app sharpened my frontend engineering skills by building
        infrastructure manually, writing tests from the ground up, and
        implementing best practices for React, state management, and
        architecture.
      </p>
    </div>
  </div>
);

export default About;
