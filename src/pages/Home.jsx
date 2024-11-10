import React from "react";

const Homepage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-400 to-purple-600 text-white py-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Boost Your SEO with Our Tools
          </h1>
          <p className="text-lg mb-6">
            Quick, effective, and accurate SEO analysis tools for your website.
          </p>
          <a
            href="#tools"
            className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Tools Section */}
      <section id="tools" className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Our SEO Tools
          </h2>
          <p className="text-lg text-gray-600">
            Choose from a variety of tools to enhance your SEO strategy.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Tool Card 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <div className="text-4xl mb-4 text-blue-500">🔍</div>
            <h3 className="text-xl font-semibold mb-3">Keyword Research</h3>
            <p className="text-gray-600 mb-4">
              Discover the best keywords to target for your website's SEO
              strategy.
            </p>
            <a
              href="#keyword-research"
              className="text-blue-600 hover:underline"
            >
              Learn More
            </a>
          </div>
          {/* Tool Card 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <div className="text-4xl mb-4 text-blue-500">📊</div>
            <h3 className="text-xl font-semibold mb-3">SEO Audit</h3>
            <p className="text-gray-600 mb-4">
              Get a detailed audit of your website's SEO performance.
            </p>
            <a href="#seo-audit" className="text-blue-600 hover:underline">
              Learn More
            </a>
          </div>
          {/* Tool Card 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <div className="text-4xl mb-4 text-blue-500">🔗</div>
            <h3 className="text-xl font-semibold mb-3">Backlink Checker</h3>
            <p className="text-gray-600 mb-4">
              Check the backlinks to your website and improve its domain
              authority.
            </p>
            <a
              href="#backlink-checker"
              className="text-blue-600 hover:underline"
            >
              Learn More
            </a>
          </div>
          {/* Tool Card 4 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <div className="text-4xl mb-4 text-blue-500">📈</div>
            <h3 className="text-xl font-semibold mb-3">Rank Tracker</h3>
            <p className="text-gray-600 mb-4">
              Monitor your website's ranking on search engines over time.
            </p>
            <a href="#rank-tracker" className="text-blue-600 hover:underline">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
