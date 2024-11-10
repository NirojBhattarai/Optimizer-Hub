import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to Your All-in-One Toolset
          </h1>
          <p className="text-lg mb-6 mx-6">
            OptimizerHub is a powerful web application designed to streamline
            your daily tasks. From converting units and currencies to counting
            words and calculating time differences, we’ve brought all essential
            tools together in one place. Whether you’re a student, professional,
            or casual user, our easy-to-use tools help you get the job done
            quickly and efficiently. Start optimizing today!
          </p>
        </div>
      </header>

      {/* Tools Section */}
      <section id="tools" className="py-16 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Our Tools</h2>
          <p className="text-lg text-gray-600">
            Explore a variety of tools designed to optimize your daily tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Tool Card 1: Word Counter */}
          <Link to="/Wordcounter" className="hover:scale-95">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center h-64 w-full flex flex-col justify-center items-center">
              <div className="text-4xl mb-4 text-blue-500">📝</div>
              <h3 className="text-xl font-semibold mb-3">Word Counter</h3>
              <p className="text-gray-600 mb-4">
                Count words, characters, and sentences in your text.
              </p>
            </div>
          </Link>

          {/* Tool Card 2: Age Calculator */}
          <Link to="/Agecalculator" className="hover:scale-95">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center h-64 w-full flex flex-col justify-center items-center">
              <div className="text-4xl mb-4 text-blue-500">🔞</div>
              <h3 className="text-xl font-semibold mb-3">Age Calculator</h3>
              <p className="text-gray-600 mb-4">
                Check your exact date of birth with Year, Month and Day
                Parameters.
              </p>
            </div>
          </Link>

          {/* Tool Card 3: Length Converter */}
          <Link to="/Lengthconverter" className="hover:scale-95">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center h-64 w-full flex flex-col justify-center items-center">
              <div className="text-4xl mb-4 text-blue-500">📏</div>
              <h3 className="text-xl font-semibold mb-3">Length Converter</h3>
              <p className="text-gray-600 mb-4">
                Convert between different length units like meters, feet and
                more.
              </p>
            </div>
          </Link>

          {/* Tool Card 4: Weight Converter */}
          <Link to="/Weightconverter" className="hover:scale-95">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center h-64 w-full flex flex-col justify-center items-center">
              <div className="text-4xl mb-4 text-blue-500">⚖️</div>
              <h3 className="text-xl font-semibold mb-3">Weight Converter</h3>
              <p className="text-gray-600 mb-4">
                Convert between Celsius, Fahrenheit, and Kelvin.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
