import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaBell,
  FaBook,
  FaFileAlt,
  FaChartLine,
  FaBullhorn,
  FaGraduationCap,
} from "react-icons/fa";
import HeaderData from "./HeaderData";

function Body() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-gray-50 px-4 md:px-8 lg:px-16 py-8 md:py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-28 h-28 md:w-40 md:h-40 bg-blue-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-red-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-30"></div>

      {/* Header Section */}
      <div className="text-center mb-8 md:mb-10 relative z-10">
        {/* Logo/Branding */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-4 md:mb-6">
          <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg mb-3 md:mb-0 md:mr-4">
            <span className="text-white text-xl md:text-3xl font-bold">SR</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2 md:mb-4">
            Sarkari <span className="text-red-600">Result</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-gray-700 text-base md:text-xl max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8">
          Your one-stop destination for all government job updates, online
          forms, results, admit cards, answer keys, syllabus, career news,
          Sarkari Yojana, scholarships, and notices.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 md:gap-4 text-gray-500 text-xs md:text-sm mb-6 md:mb-8">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          Trusted by 2M+ Job Seekers
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5 text-blue-500 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          Instant Updates
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5 text-red-500 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          Secure & Reliable
        </div>
      </div>

      {/* Quick Links */}
      <div className="mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-0">
            Quick Access
          </h2>
          <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 md:h-4 md:w-4 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Click on any section to explore more</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          <Link
            to="/admit-card"
            className="group bg-white p-3 md:p-5 rounded-lg md:rounded-xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="bg-blue-100 p-2 md:p-3 rounded-full mb-2 md:mb-3 group-hover:bg-blue-200 transition-colors">
              <FaFileAlt className="text-blue-600 text-lg md:text-xl" />
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-800 text-center group-hover:text-blue-600 transition-colors">
              Admit Card
            </span>
            <span className="text-xs text-gray-500 mt-1 hidden md:block">
              Download Hall Ticket
            </span>
          </Link>

          <Link
            to="/results"
            className="group bg-white p-3 md:p-5 rounded-lg md:rounded-xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="bg-green-100 p-2 md:p-3 rounded-full mb-2 md:mb-3 group-hover:bg-green-200 transition-colors">
              <FaChartLine className="text-green-600 text-lg md:text-xl" />
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-800 text-center group-hover:text-green-600 transition-colors">
              Results
            </span>
            <span className="text-xs text-gray-500 mt-1 hidden md:block">
              Check Exam Results
            </span>
          </Link>

          <Link
            to="/latest-jobs"
            className="group bg-white p-3 md:p-5 rounded-lg md:rounded-xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="bg-red-100 p-2 md:p-3 rounded-full mb-2 md:mb-3 group-hover:bg-red-200 transition-colors">
              <FaBullhorn className="text-red-600 text-lg md:text-xl" />
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-800 text-center group-hover:text-red-600 transition-colors">
              Latest Jobs
            </span>
            <span className="text-xs text-gray-500 mt-1 hidden md:block">
              New Recruitment
            </span>
          </Link>

          <Link
            to="/answer-key"
            className="group bg-white p-3 md:p-5 rounded-lg md:rounded-xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="bg-purple-100 p-2 md:p-3 rounded-full mb-2 md:mb-3 group-hover:bg-purple-200 transition-colors">
              <FaBook className="text-purple-600 text-lg md:text-xl" />
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-800 text-center group-hover:text-purple-600 transition-colors">
              Answer Key
            </span>
            <span className="text-xs text-gray-500 mt-1 hidden md:block">
              Official Solutions
            </span>
          </Link>

          <Link
            to="/syllabus"
            className="group bg-white p-3 md:p-5 rounded-lg md:rounded-xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="bg-orange-100 p-2 md:p-3 rounded-full mb-2 md:mb-3 group-hover:bg-orange-200 transition-colors">
              <FaBook className="text-orange-600 text-lg md:text-xl" />
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-800 text-center group-hover:text-orange-600 transition-colors">
              Syllabus
            </span>
            <span className="text-xs text-gray-500 mt-1 hidden md:block">
              Exam Pattern
            </span>
          </Link>

          <Link
            to="/scholarship"
            className="group bg-white p-3 md:p-5 rounded-lg md:rounded-xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="bg-teal-100 p-2 md:p-3 rounded-full mb-2 md:mb-3 group-hover:bg-teal-200 transition-colors">
              <FaGraduationCap className="text-teal-600 text-lg md:text-xl" />
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-800 text-center group-hover:text-teal-600 transition-colors">
              Scholarship
            </span>
            <span className="text-xs text-gray-500 mt-1 hidden md:block">
              Education Funds
            </span>
          </Link>
        </div>

        <div className="mt-6 md:mt-8 text-center">
          <Link
            to="/all-services"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group text-sm md:text-base"
          >
            View All Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5 ml-1 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* WhatsApp & Notification Section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8 md:mb-10">
        <div className="flex-1 bg-white p-4 md:p-6 rounded-lg shadow">
          <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4 flex items-center">
            <FaBell className="text-yellow-500 mr-2" /> Get Instant Updates
          </h3>
          <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
            Never miss an important government job update. Join our WhatsApp
            channel for instant notifications.
          </p>
          <a
            href="https://wa.me/916201151125"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md hover:bg-green-600 transition text-sm md:text-base"
          >
            <FaWhatsapp size={18} />
            Join WhatsApp Channel
          </a>
        </div>

        <div className="flex-1 bg-white p-4 md:p-6 rounded-lg shadow">
          <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">
            Subscribe to Notifications
          </h3>
          <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
            Get daily updates on new government jobs, results, and admit cards
            directly to your email.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            />
            <button className="bg-blue-500 text-white px-3 py-2 md:px-4 md:py-2 rounded-r-lg hover:bg-blue-600 transition text-sm md:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Tools Link */}
      <div className="text-center mb-6 md:mb-8">
        <Link
          to="/tools"
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition group text-sm md:text-base"
        >
          Explore SarkariResult Tools
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5 ml-1 group-hover:translate-x-1 transition"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <HeaderData />
    </div>
  );
}

export default Body;
