import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-white bg-slate-900">
      {/* Social Network Section */}
      <section className="bg-blue-600 p-4 border-b border-gray-700 flex justify-center lg:justify-between">
        <div className="hidden lg:block text-white">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="text-white flex space-x-4">
          <a href="/" className="hover:text-gray-400">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="/" className="hover:text-gray-400">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="/" className="hover:text-gray-400">
            <i className="bi bi-google"></i>
          </a>
          <a href="/" className="hover:text-gray-400">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="/" className="hover:text-gray-400">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="/" className="hover:text-gray-400">
            <i className="bi bi-github"></i>
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
