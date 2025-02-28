// src/components/CategoryCard.tsx
import Link from "next/link";

export function CategoryCard({ title, image, href }: { title: string; image: string; href: string }) {
  return (
    <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Category Name */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{title}</h3>

      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg">
        {/* Category Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />

        {/* Explore Button (Visible on Hover) */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
          <Link
            href={href}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-700"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}