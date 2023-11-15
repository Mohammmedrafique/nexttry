// src/Dashboard.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setMobileMenuOpen(false); // Close the mobile menu on resize
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">RoboInterview</div>

          {/* Hamburger Menu for Mobile */}
          <button className="text-white lg:hidden" onClick={toggleMobileMenu}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Regular Navigation Links */}
          <div className={`lg:flex space-x-4 ${isMobile ? "hidden" : ""}`}>
            <a
              href="#"
              className="hover:text-gray-300"
              onClick={closeMobileMenu}
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-gray-300"
              onClick={closeMobileMenu}
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-gray-300"
              onClick={closeMobileMenu}
            >
              Services
            </a>
            <a
              href="#"
              className="hover:text-gray-300"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="bg-gray-800 text-white py-2">
          <a
            href="#"
            className="block p-2 hover:bg-gray-700"
            onClick={closeMobileMenu}
          >
            Home
          </a>
          <a
            href="#"
            className="block p-2 hover:bg-gray-700"
            onClick={closeMobileMenu}
          >
            About
          </a>
          <a
            href="#"
            className="block p-2 hover:bg-gray-700"
            onClick={closeMobileMenu}
          >
            Services
          </a>
          <a
            href="#"
            className="block p-2 hover:bg-gray-700"
            onClick={closeMobileMenu}
          >
            Contact
          </a>
        </div>
      )}

      {/* Hero */}
      <div className="bg-blue-500 text-white text-center py-10">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Welcome</h1>
          <p className="text-2xl m-2">
            AI Interviews: Redefining the Future of Career Progression.
          </p>
        </div>
      </div>

      {/* Technologies */}
      <div className="bg-gray-200 py-16 ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 ">
            Mastering Job Interviews with RoboInterview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-3">
            {/* React Card */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">React</h3>
              <p>
                A JavaScript library for building user interfaces. We create
                interactive and dynamic web applications using React.
              </p>
              <Link to="/chatpage">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full mt-4">
                  Start Interview
                </button>
              </Link>
            </div>

            {/* Node.js Card */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Node.js</h3>
              <p>
                An open-source, cross-platform JavaScript runtime environment
                that executes JavaScript code server-side. We build scalable applications with Node.js.
              </p>
              <Link to="/nodepage">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full mt-4">
                  Start Interview
                </button>
              </Link>
            </div>

            {/* Java Card */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Java</h3>
              <p>
                A versatile, object-oriented programming language. Our Java
                developers create robust and scalable applications to meet your
                business needs.
              </p>
              <Link to="/javapage">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full mt-4">
                  Start Interview
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center ">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-justify m-4">
            We are a leading virtual interview practice software company,
            dedicated to shaping the future of career readiness. At the
            forefront of innovation, we provide a platform that empowers
            individuals to hone their interview skills in a virtual environment.
            Our mission is to bridge the gap between potential and success,
            offering a dynamic space for professional growth and
            confidence-building. Elevate your interview preparation with us and
            step confidently into your career journey.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-8">
            Ready to start your project? Reach out to us for a consultation.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
