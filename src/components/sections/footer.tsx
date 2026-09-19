"use client";

import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

/**
 * Footer Component (Costco Edition)
 * 
 * Clean compliance footer featuring social media badges, standard legal links, 
 * and copyright information optimized for mobile viewports.
 */
const Footer = () => {
  return (
    <footer className="relative z-10 w-full max-w-[512px] mx-auto px-4 pt-0 pb-16 mt-6 text-center">
      {/* Social Media Icons */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <a 
          href="https://www.facebook.com/Costco/" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 rounded-full bg-[#005dab] hover:bg-[#004a88] flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-sm"
          aria-label="Facebook"
        >
          <Facebook className="w-3.5 h-3.5 fill-current" />
        </a>
        <a 
          href="https://www.instagram.com/costco/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 rounded-full bg-[#005dab] hover:bg-[#004a88] flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-sm"
          aria-label="Instagram"
        >
          <Instagram className="w-3.5 h-3.5" />
        </a>
        <a 
          href="https://www.linkedin.com/company/costco-wholesale" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 rounded-full bg-[#005dab] hover:bg-[#004a88] flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-sm"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-3.5 h-3.5 fill-current" />
        </a>
      </div>

      {/* Standard Legal & Compliance Links */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 text-[11px] font-medium text-gray-500 mb-2.5">
        <a 
          href="#privacy" 
          className="hover:text-[#005dab] transition-colors underline-offset-2 hover:underline"
        >
          Privacy Policy
        </a>
        <span className="text-gray-300">•</span>
        <a 
          href="#terms" 
          className="hover:text-[#005dab] transition-colors underline-offset-2 hover:underline"
        >
          Terms & Conditions
        </a>
        <span className="text-gray-300">•</span>
        <a 
          href="#contact" 
          className="hover:text-[#005dab] transition-colors underline-offset-2 hover:underline"
        >
          Contact Us
        </a>
      </div>

      {/* Copyright Statement */}
      <p className="text-gray-400 text-[10px] font-medium tracking-tight">
        © 2026 All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
