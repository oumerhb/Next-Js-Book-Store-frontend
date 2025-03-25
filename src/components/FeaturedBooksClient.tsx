// app/components/FeaturedBooksClient.tsx
"use client";

import { Book as BookType } from "../types";
import Book from "./Book";

interface Props {
  books: BookType[];
}

export default function FeaturedBooksClient({ books }: Props) {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Books
        </h2>

        {books.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>No books available right now.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}