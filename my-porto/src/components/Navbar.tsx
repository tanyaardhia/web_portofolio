"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

export function GithubIcon() {
  return (
    <motion.a
      href="https://github.com/tanyaardhia"
      target="_blank"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="mr-3"
    >
      <div>
        <Image
          src="/images/github.png"
          alt="github photo"
          width={35}
          height={35}
        />
      </div>
    </motion.a>
  );
}

export function LinkedIn() {
  return (
    <motion.a
      href="https://www.linkedin.com/in/tanyaardhia/"
      target="_blank"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
    >
      <div>
        <Image
          src="/images/linkedln.png"
          alt="linkedin photo"
          width={30}
          height={30}
        />
      </div>
    </motion.a>
  );
}

interface LinkedNavbarProps {
  href: string;
  title: string;
  className?: string;
}

const LinkedNavbar = ({ href, title, className = "" }: LinkedNavbarProps) => {
  return (
    <a href={href} className={`${className} relative group`}>
      {title}
      <span className="h-[2px] inline-block w-0 bg-[#8294C4] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300">
        &nbsp;
      </span>
    </a>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-4 font-medium bg-[#bcc7e7] fixed z-50">
      <div className="flex items-center justify-between">
        <nav className="flex items-center">
          <button
            className="text-gray-600 focus:outline-none md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className="hidden md:flex">
            <LinkedNavbar href="/" title="Home" className="mr-4" />
            <LinkedNavbar href="/About" title="About" className="mx-4" />
            <LinkedNavbar href="/projects" title="Projects" className="mx-4" />
            <LinkedNavbar href="/contact" title="Contact" className="mx-4" />
          </div>
        </nav>
        <nav className="flex items-center justify-center">
          <GithubIcon />
          <LinkedIn />
        </nav>
      </div>

      {/* Responsive Nav */}
      {isOpen && (
        <div className="mt-4 md:hidden">
          <LinkedNavbar href="/" title="Home" className="block py-2 pl-3" />
          <LinkedNavbar
            href="/About"
            title="About"
            className="block py-2 pl-3"
          />
          <LinkedNavbar
            href="/Projects"
            title="Projects"
            className="block py-2 pl-3"
          />
          <LinkedNavbar
            href="/Contact"
            title="Contact"
            className="block py-2 pl-3"
          />
        </div>
      )}
    </div>
  );
}
