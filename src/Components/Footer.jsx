import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-t from-black via-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/*  Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">🎬 MovieBook</h2>
          <p className="text-gray-400">
            Stream your favorite movies and shows anytime, anywhere.
            Discover blockbusters, classics, and exclusive originals.
          </p>
        </div>

        {/*  Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/movies" className="hover:text-white">Movies</Link></li>
            <li><Link to="/booking" className="hover:text-white">Book Tickets</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/*  Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-red-600 transition">
              <FaGlobe />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-sky-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-pink-600 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* © Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MovieBook. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
