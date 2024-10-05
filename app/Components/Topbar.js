"use client"
// components/TopBar.js

import React from 'react';
import { FaPhoneAlt, FaUser, FaSearch } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-gray-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4">
        
        {/* Left Side: Logo or Text */}
        <div className="text-lg font-semibold">
          Top Bar Add-On
        </div>
        
        {/* Right Side: Icons and Phone Number */}
        <div className="flex items-center space-x-6">
          {/* Icons */}
          <div className="flex space-x-4">
            <FaSearch className="cursor-pointer hover:text-gray-400" />
            <FaUser className="cursor-pointer hover:text-gray-400" />
          </div>
          
          {/* Phone Number */}
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2" />
            <span>+1 234 567 890</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
