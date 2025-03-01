// src/components/Bestsellers.tsx
import { Book } from "./Book";
import Link from "next/link";

export function BestSellers() {
  // Sample data for bestsellers
  const bestsellers = [
    {
      id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "2",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    {
      id: "3",
      title: "1984",
      author: "George Orwell",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "4",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title and View All Button */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Bestsellers</h2>
          <Link
            href="/bestsellers"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View All
          </Link>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              price={book.price}
              image={book.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}