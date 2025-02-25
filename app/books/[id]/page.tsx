import { books } from '../../data/books';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function BookPage({ params }: { params: { id: string } }) {
  const book = books.find((b) => b.id === params.id);

  if (!book) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="relative h-96 w-full md:w-96">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                {book.category}
              </div>
              <h1 className="mt-2 text-3xl font-bold text-gray-900">{book.title}</h1>
              <p className="mt-2 text-gray-600">by {book.author}</p>
              <p className="mt-4 text-gray-500">{book.description}</p>
              <div className="mt-8">
                <span className="text-2xl font-bold text-gray-900">${book.price.toFixed(2)}</span>
                <button className="ml-8 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}