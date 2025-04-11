"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  ShoppingCart,
  UserCircle,
  Menu,
  X,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react";

interface User {
  name: string;
  email: string;
  avatarUrl?: string;
}

export function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) setUser(JSON.parse(userInfo));
  }, []);

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            Bookify
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/browse" className="text-gray-700 hover:text-black transition">
              Browse
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-black transition">
              Categories
            </Link>
            <Link href="/best-sellers" className="text-gray-700 hover:text-black transition">
              Best Sellers
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition">
              About Us
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-black transition" />
              <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white px-1 rounded-full">
                3
              </span>
            </Link>

            {/* User dropdown or login/register */}
            {user ? (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="focus:outline-none">
                    <UserCircle className="w-7 h-7 text-gray-700 hover:text-black" />
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content
                  align="end"
                  className="z-50 mt-2 w-48 rounded-md border bg-white p-2 shadow-lg"
                >
                  <div className="px-2 py-1">
                    <p className="font-medium text-sm text-gray-800">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />
                  <DropdownMenu.Item
                    onClick={() => {
                      Cookies.remove("token");
                      localStorage.removeItem("user");
                      setUser(null);
                      router.push("/");
                    }}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            ) : (
              <>
                <button
                  onClick={() => router.push("/login")}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-black"
                >
                  <LogIn className="w-4 h-4" /> Login
                </button>
                <button
                  onClick={() => router.push("/register")}
                  className="flex items-center gap-1 px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  <UserPlus className="w-4 h-4" /> Register
                </button>
              </>
            )}

            {/* Mobile toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-1">
            <Link href="/browse" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Browse
            </Link>
            <Link href="/categories" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Categories
            </Link>
            <Link href="/best-sellers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Best Sellers
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              About Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
