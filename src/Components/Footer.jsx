import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="text-center text-white">
      {/* Social Network Section */}
      <section className="bg-blue-600 p-4 border-b flex justify-center lg:justify-center space-x-4">
        <div className="hidden lg:block text-white">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="text-white flex space-x-4 pt-1">
          <a href="/" className="hover:text-gray-400">
            <i>
              <FaLinkedin />{" "}
            </i>
          </a>
          <a href="/" className="hover:text-gray-400">
            <i>
              <FaGithub />{" "}
            </i>
          </a>
        </div>
      </section>

      {/* Copyright Section */}
      <div className="bg-blue-600 text-white text-center p-4">
        © 2024 Copyright:
        <a
          className="text-white font-bold hover:underline"
          href="https://nirojbhattarai.com.np/"
        >
          nirojbhattarai.com.np
        </a>
      </div>
    </footer>
  );
}
