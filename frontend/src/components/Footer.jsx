import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <footer className="my-10 mt-40 text-sm">
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14">
        {/* Logo and description */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus id elit facilisis placerat.
          </p>
        </div>

        {/* Company links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Get in touch */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>033 2297887</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-5 border-gray-300 h-px" />

      {/* Copyright */}
      <p className="py-5 text-sm text-center text-gray-500">
        &copy; 2024 foreveryou.com - All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
