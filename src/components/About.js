import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 animate-fade-in-up">
        <h1 className="text-4xl font-bold text-green-700 mb-4 border-b pb-2 animate-fade-in-up">
          About
        </h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-6 animate-fade-in-up">
          Welcome to My React Food Ordering Website 🍕
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-4 animate-fade-in-up">
          This project is a fully dynamic and responsive food ordering
          application built with{" "}
          <strong className="text-green-600">React.js</strong> and styled using{" "}
          <strong className="text-green-600">Tailwind CSS</strong>. It showcases
          real-world features you'd expect from a modern food delivery platform.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4 animate-fade-in-up">
          🧠 <strong className="text-green-600">Redux</strong> is used to manage
          the global state of the application—especially for cart
          operations—ensuring efficient state updates and scalability.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4 animate-fade-in-up">
          📡 All restaurant data is fetched live from{" "}
          <strong className="text-green-600">Swiggy’s public API</strong>, which
          means users always get the latest listings available in their city.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4 animate-fade-in-up">
          🛒 Users can{" "}
          <span className="font-semibold text-green-700">
            add or remove items from their cart
          </span>
          , making the user experience more interactive and practical—just like
          real-world food apps.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2 animate-fade-in-up">
          🔑 Key Features:
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-4 animate-fade-in-up">
          <li>Live restaurant data via Swiggy API</li>
          <li>Dynamic routing using React Router</li>
          <li>Reusable and conditional components</li>
          <li>Search and filter functionality</li>
          <li>Context API and Redux for user & cart state</li>
          <li>Offline detection using a custom hook</li>
        </ul>

        <p className="text-gray-700 text-lg leading-relaxed animate-fade-in-up">
          This app was developed to improve frontend architecture skills,
          explore real-time APIs, and implement scalable state management using
          Redux. It’s responsive, beginner-friendly, and demonstrates real-world
          React development.
        </p>
      </div>
    </div>
  );
};

export default About;
