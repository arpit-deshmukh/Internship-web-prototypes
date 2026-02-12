import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Business Portfolio
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Providing high-quality professional services and innovative
              solutions for your business growth.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-white transition">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaGithub size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="hover:text-white transition duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Business Ave, Suite 100</p>
              <p>Silicon Valley, CA 94025</p>
              <p className="pt-2">
                Email:{" "}
                <span className="hover:text-white transition">
                  contact@businessportfolio.com
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-14 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          © {currentYear} Business Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
