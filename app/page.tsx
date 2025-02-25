import { books } from './data/books';
import BookCard from './components/BookCard';
import Hero from './components/Hero';

export default function Home() {
  const featuredBooks = books.slice(0, 4);

  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Books</h2>
          <p className="mt-2 text-lg text-gray-600">Handpicked selections just for you</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/categories" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            View All Books
          </a>
        </div>
      </div>
    </main>
  );
}