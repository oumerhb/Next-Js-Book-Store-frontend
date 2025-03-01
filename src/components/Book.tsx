// src/components/Book.tsx
import Link from "next/link";

export function Book({ id, title, author, price, image }: { id: string; title: string; author: string; price: number; image: string }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Book Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

      {/* Book Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{author}</p>
        <p className="text-lg font-bold text-gray-900 mt-2">${price.toFixed(2)}</p>

        {/* Details Button */}
        <Link
          href={`/books/${id}`} // Link to the book's detail page
          className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors block text-center"
        >
          Details
        </Link>
      </div>
    </div>
  );
}