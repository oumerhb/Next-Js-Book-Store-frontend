// app/components/Book.tsx (Client Component)
"use client"; // Mark this as a client component

import { Book as BookType } from "../types";

interface BookProps {
  book: BookType; // `book` is required
}

export default function Book({ book }: BookProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Book Image */}
      <img
        src={`http://localhost:8000/storage/${book.image_data}`} // Construct full image URL
        alt={book.title}
        className="w-full h-48 object-cover"
      />

      {/* Book Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author}</p>
        <p className="text-lg font-bold text-gray-900 mt-2">
          ${book.price.toFixed(2)} {/* Safe to call `toFixed` now */}
        </p>
      </div>
    </div>
  );
}