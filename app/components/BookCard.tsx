'use client';

import { Book } from '../types';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const router = useRouter();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <Link href={`/books/${book.id}`}>
        <div className="relative h-64 cursor-pointer">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/books/${book.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
            {book.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600">{book.author}</p>
        <p className="mt-2 text-gray-500 text-sm line-clamp-2">{book.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${book.price.toFixed(2)}</span>
          <button 
            onClick={() => router.push(`/books/${book.id}`)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}