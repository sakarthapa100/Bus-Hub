import React from 'react';
import buslogo from '../assets/buslogo.png'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  const footerLinks = {
    'About Us': [
      'Our Story',
      'Mission & Vision',
      'Careers',
      'Values',
      'Our Team',
      'Contact Us',
      'Sitemap'
    ],
    'Info': [
      'Investor Relations',
      'Contact Us',
      'Sitemap',
      'Offers',
    'Blog',
      'FAQs',
      'Privacy Policy'
    ],
    'Global Sites': [
      'United States',
      'United Kingdom',
      'Canada',
      'Australia',
      'Nepal'

    ],
    'Our Partners': [
      'Partner A',
      'Partner B',
      'Partner C',
      'Partner D'
    ]
  };

  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img src={buslogo} alt="Logo" className="h-12 mb-4" />
            <p className="text-sm text-gray-600">
              Your company is the world's largest online service trusted by over X million happy customers globally. Your company offers services through its website, iOS and Android mobile apps for all major routes.
            </p>
          </div>

          {/* Footer Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index} className="w-full md:w-1/6 mb-6 md:mb-0">
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="text-sm">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a href="#" className="text-gray-600 hover:text-gray-800">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright and Social Icons */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-wrap justify-between items-center">
          <p className="text-sm text-gray-600">© 2024 BusHub. All rights reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <FiFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <CiLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
