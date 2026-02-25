import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Left: Navigation links */}
      <div className="flex flex-col sm:flex-row gap-4 text-center sm:text-left">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </div>

      {/* Center: Disclaimer */}
      <div className="text-center text-sm">
        © 2026 HantsHub. All rights reserved.
      </div>

      {/* Right: Powered by DevBeam */}
      <div className="text-center sm:text-right text-sm">
        Powered by DevBeam
      </div>
    </footer>
  );
};

export default Footer;
