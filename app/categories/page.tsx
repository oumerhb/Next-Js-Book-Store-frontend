'use client';
import { books } from '../data/books';
import BookCard from '../components/BookCard';
import { useState } from 'react';

export default function CategoriesPage() {
  const categories = Array.from(new Set(books.map(book => book.category)));

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h1>
        
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {books
                  .filter(book => book.category === category)
                  .map(book => (
                    <BookCard key={book.id} book={book} />
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}