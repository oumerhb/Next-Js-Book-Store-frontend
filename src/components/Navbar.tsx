"use client"; // Mark as a Client Component for interactivity

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
  avatarUrl?: string; // Optional field for avatar URL
}

export function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // State to manage user menu visibility
  const [user, setUser] = useState<User | null>(null); // State to store user info

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle user menu
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  // Check if user is logged in
  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-900">
              Bookify
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/browse"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Browse
            </Link>
            <Link
              href="/categories"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/best-sellers"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Best Sellers
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              About Us
            </Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            {/* Cart Button */}
            <Link href="/cart" className="relative">
              <svg
                className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">
                3
              </span>
            </Link>

            {user ? (
              // User Avatar
              <div className="relative">
                <button onClick={toggleUserMenu} className="flex items-center space-x-2">
                  <svg
                    className="w-8 h-8 text-gray-700 hover:text-gray-900 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196zM12 11a4 4 0 100-8 4 4 0 000 8z"
                    />
                  </svg>
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1">
                    <div className="px-4 py-2 text-gray-700">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm">{user.email}</p>
                    </div>
                    <div className="border-t mt-1">
                      <button
                        onClick={() => {
                          localStorage.removeItem("token");
                          localStorage.removeItem("user");
                          setUser(null);
                          router.push("/");
                        }}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* Login Button */}
                <button
                  onClick={() => router.push("/login")}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Login
                </button>

                {/* Register Button */}
                <button
                  onClick={() => router.push("/register")}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Register
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu} // Toggle mobile menu on click
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/browse"
                className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Browse
              </Link>
              <Link
                href="/categories"
                className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Categories
              </Link>
              <Link
                href="/best-sellers"
                className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Best Sellers
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}