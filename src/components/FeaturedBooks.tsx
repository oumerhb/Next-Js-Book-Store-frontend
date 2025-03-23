// app/components/FeaturedBooks.tsx (Server Component)
import { Book as BookType } from "../types";
import Book from "./Book"; // Client component

async function fetchFeaturedBooks(): Promise<BookType[]> {
  try {
    const response = await fetch("http://localhost:8000/api/books?limit=3");

    if (!response.ok) {
      throw new Error("Failed to fetch featured books");
    }

    const data = await response.json();

    // Validate the fetched data
    if (!Array.isArray(data)) {
      throw new Error("Invalid data format: expected an array of books.");
    }

    // Filter out invalid or undefined book objects and parse `price` into a number
    const validBooks = data
      .filter(
        (book) =>
          book &&
          book.id &&
          book.title &&
          book.author &&
          book.price && // Ensure `price` is defined
          book.image_data
      )
      .map((book) => ({
        ...book,
        price: parseFloat(book.price), // Parse `price` into a number
      }));

    return validBooks;
  } catch (error) {
    console.error("Error fetching featured books:", error);
    throw new Error("Failed to fetch featured books");
  }
}

export default async function FeaturedBooks() {
  // Fetch data on the server
  const featuredBooks = await fetchFeaturedBooks();

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Books</h2>

        {/* Empty State */}
        {featuredBooks.length === 0 && (
          <div className="text-center text-gray-600">
            <p>No books available right now.</p>
          </div>
        )}

        {/* Books Grid */}
        {featuredBooks.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBooks.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}