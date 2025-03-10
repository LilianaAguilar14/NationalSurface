"use client"; // <-- para usar useState o cualquier hook en Next 13 (App Router)

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#4eb3d1] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-0 py-3 flex justify-between items-center">
       
        <div className="flex items-center">
         
          <img
            src="/img/logo.png" 
            alt="Logo"
            className="h-24"
          />
          <h2 className="text-white text-xl">National Safety Surfaces</h2>
        </div>

        
        <nav className="hidden md:flex space-x-6 text-white font-medium text-xl">
          <Link href="/" className="hover:text-cyan-700 transition">
            Home
          </Link>
          <Link href="/About" className="hover:text-cyan-700   transition">
            About
          </Link>
          <Link href="/Systems" className="hover:text-cyan-700  transition">
            Systems
          </Link>
          <Link href="/Clients" className="hover:text-cyan-700  transition">
            Clients
          </Link>
          <Link href="/Contact" className="hover:text-cyan-700  transition">
            Contact
          </Link>
          <Link
            href="/Contact"
            className=" bg-white text-[#4eb3d1] py-2 px-4 rounded-lg text-center hover:text-cyan-700  transition"
          >
            Get Service
          </Link>
        </nav>

       
       

         {/* Botón hamburguesa en mobile */}
         <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Menú desplegable en mobile */}
      {isOpen && (
         <div className="md:hidden bg-[#4eb3d1] text-white space-y-2 px-6 py-4">
          <Link href="/" className="hover:text-cyan-700 transition">
            Home
          </Link>
          <Link href="/About" className="block hover:bg-cyan-700   transition">
            About
          </Link>
          <Link href="/Systems" className="block hover:text-cyan-700  transition">
            Systems
          </Link>
          <Link href="/Clients" className="block hover:text-cyan-700  transition">
            Clients
          </Link>
          <Link href="/Contact" className=" block hover:text-cyan-700  transition">
            Contact
          </Link>
          <Link
            href="/Contact"
            className="block bg-white text-[#4eb3d1] py-2 px-4 rounded-lg text-center hover:text-cyan-700  transition"
          >
            Get Service
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
