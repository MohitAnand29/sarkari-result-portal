import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-red-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl md:text-3xl font-bold tracking-wide">
          Sarkari <span className="text-yellow-300">Result</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-4 md:gap-6 text-sm md:text-base font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/latest-jobs"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Latest Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/admit-card"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Admit Card
              </Link>
            </li>
            <li>
              <Link
                to="/result"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Result
              </Link>
            </li>
            <li>
              <Link
                to="/admission"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Admission
              </Link>
            </li>
            <li>
              <Link
                to="/answer-key"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Answer Key
              </Link>
            </li>
            <li>
              <Link
                to="/syllabus"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Syllabus
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-red-700 px-4 py-3">
          <ul className="space-y-3 text-base font-medium">
            <li>
              <Link
                to="/"
                className="block py-2 hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/latest-jobs"
                className="block py-2 hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Latest Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/admit-card"
                className="block py-2 hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Admit Card
              </Link>
            </li>
            <li>
              <Link
                to="/result"
                className="block py-2 hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Result
              </Link>
            </li>
            <li>
              <Link
                to="/admission"
                className="block py-2 hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Admission
              </Link>
            </li>
            <li>
              <Link
                to="/answer-key"
                className="block py-2 hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Answer Key
              </Link>
            </li>
            <li>
              <Link
                to="/syllabus"
                className="block py-2 hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Syllabus
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
