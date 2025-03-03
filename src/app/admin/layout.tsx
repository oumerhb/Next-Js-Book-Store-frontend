'use client';
import Link from "next/link";
import { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 p-2 text-white bg-blue-600 rounded-lg md:hidden z-50"
      >
        {isSidebarOpen ? (
          // X Icon when sidebar is open
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          // Hamburger Icon when sidebar is closed
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative w-64 bg-gradient-to-b from-blue-600 to-blue-800 shadow-lg transform transition-transform duration-200 ease-in-out h-screen ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6">
          <br /><br />
          <h2 className="text-xl font-bold text-white">Admin Dashboard</h2>
        </div>
        <nav className="mt-6">
          <Link
            href="/admin"
            className="block px-6 py-3 text-white hover:bg-blue-700 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/books"
            className="block px-6 py-3 text-white hover:bg-blue-700 transition-colors"
          >
            Manage Books
          </Link>
          <Link
            href="/admin/orders"
            className="block px-6 py-3 text-white hover:bg-blue-700 transition-colors"
          >
            View Orders
          </Link>
          <Link
            href="/admin/users"
            className="block px-6 py-3 text-white hover:bg-blue-700 transition-colors"
          >
            Manage Users
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
}