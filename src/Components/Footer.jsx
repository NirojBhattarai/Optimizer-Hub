import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center text-white bg-gradient-to-r from-blue-800 to-purple-800 py-6">
      {/* Social Links Section */}
      <section className="flex flex-col items-center lg:flex-row lg:justify-between px-6 lg:px-16 space-y-4 lg:space-y-0">
        <div className="text-white hidden lg:block lg:mr-4">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/nirojbhattarai/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/NirojBhattarai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </section>

      {/* Copyright Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-800 w-full text-white text-center py-2 mt-4">
        <p className="text-sm">
          &copy; 2024
          <a
            href="https://nirojbhattarai.com.np/"
            className="text-white font-bold hover:underline ml-1"
          >
            nirojbhattarai.com.np
          </a>
        </p>
      </div>
    </footer>
  );
}
