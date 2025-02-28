// src/app/admin/layout.tsx
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-600 to-blue-800 shadow-lg">
        <div className="p-6">
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