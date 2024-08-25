// SocialSection.js
import React from "react";
import { FaInstagram, FaLinkedin, FaFacebookF, FaMedium } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialSection = () => (
  <div className="social-holder relative mb-12">
    <p className="text-lg leading-4 font-bold pb-5">
      🚀 Get Ready for Crealogic! 🚀
    </p>
    <p className="text-lg font-roboto mb-4 lg:px-64 px-32">
      Our platform is launching soon, and we're excited to work with you on
      innovative, results-driven projects. Stay tuned for the official launch
      and join us on the journey to digital success!
    </p>
    <ul className="flex justify-center space-x-4">
      <li>
        <a
          href="https://www.linkedin.com/company/crealogictech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaLinkedin size={24} />
        </a>
      </li>
      <li>
        <a
          href="https://x.com/Crealogictech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaSquareXTwitter size={24} />
        </a>
      </li>

      <li>
        <a
          href="https://medium.com/@crealogictech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaMedium size={24} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/crealogictech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaFacebookF size={24} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/crealogictech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaInstagram size={24} />
        </a>
      </li>
    </ul>
  </div>
);

export default SocialSection;
