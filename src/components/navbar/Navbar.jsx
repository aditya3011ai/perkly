"use client"

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import ProfileDropdown from './Profilebutton'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulating login state

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-7">
            <Link href="/" className="flex items-center">
              <span className="font-semibold text-gray-500 text-lg">
                PERKLY.
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="/products"
                className="py-2 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Accessories
              </Link>
              <Link
                 href="/products"
                className="py-2 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Mobiles
              </Link>
              <Link
                 href="/products"
                className="py-2 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Laptops
              </Link>
              <Link
                 href="/products"
                className="py-2 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Fashion
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button
              className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            {isLoggedIn ? (
              <div className="mx-5">
                <ProfileDropdown />
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login" className="py-2 px-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300">
                  Login
                </Link>
                <Link href="/signup" className="py-2 px-4 bg-white text-green-500 border border-green-500 rounded-full hover:bg-green-50 transition duration-300">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="mobile-menu-button">
              {isMenuOpen ? <X className="h-6 w-6 text-gray-500" /> : <Menu className="h-6 w-6 text-gray-500" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block py-2 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                Accessories
              </Link>
              <Link href="/about" className="block py-2 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                Mobiles
              </Link>
              <Link href="/services" className="block py-2 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                Laptops
              </Link>
              <Link href="/contact" className="block py-2 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                Fashion
              </Link>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
              {isLoggedIn ? (
                <div className="py-2">
                  <ProfileDropdown />
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link href="/login" className="py-2 px-4 bg-green-500 text-white text-center rounded-full hover:bg-green-600 transition duration-300">
                    Login
                  </Link>
                  <Link href="/signup" className="py-2 px-4 bg-white text-green-500 text-center border border-green-500 rounded-full hover:bg-green-50 transition duration-300">
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;