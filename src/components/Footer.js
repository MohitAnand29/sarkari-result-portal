import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-10">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Sarkari Result
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              The most trusted government job portal for all the latest
              recruitment notifications, results, admit cards, and exam updates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link
                  to="/latestJobs"
                  className="hover:text-white transition text-sm md:text-base"
                >
                  Latest Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/admitCard"
                  className="hover:text-white transition text-sm md:text-base"
                >
                  Admit Card
                </Link>
              </li>
              <li>
                <Link
                  to="/results"
                  className="hover:text-white transition text-sm md:text-base"
                >
                  Results
                </Link>
              </li>
              <li>
                <Link
                  to="/answerKey"
                  className="hover:text-white transition text-sm md:text-base"
                >
                  Answer Key
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">
              Exam Categories
            </h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link
                  to="/ssc"
                  className="hover:text-white transition text-sm md:text-base"
                >
                  SSC Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/banking"
                  className="hover:text-white transition text-sm md:text-base"
                >
                  Banking Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/railway"
                  className="hover:text-white transition text-sm md:text-base"
                >
                  Railway Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/teaching"
                  className="hover:text-white transition text-sm md:text-base"
                >
                  Teaching Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-center text-sm md:text-base">
                <MdEmail className="text-red-500 mr-2" /> info@sarkariresult.com
              </li>
              <li className="flex items-center text-sm md:text-base">
                <MdPhone className="text-green-400 mr-2" /> +91 6201151125
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex space-x-3 md:space-x-4 text-base md:text-lg mt-4 md:mt-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://wa.me/916201151125"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs md:text-sm mb-3 md:mb-0">
              © {new Date().getFullYear()} Sarkari Result. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm">
              <Link to="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="hover:text-white transition">
                Disclaimer
              </Link>
              <Link to="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Attribution */}
          <div className="mt-4 pt-4 border-t border-gray-700 text-center">
            <p className="text-gray-500 text-xs">
              Founded
              by <span className="text-blue-300">Mr. Nikhil Kumar</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
