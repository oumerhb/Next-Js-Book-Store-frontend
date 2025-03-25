// app/components/FeaturedBooks.tsx (Server Component)
import { Book as BookType } from "../types";
import Book from "./Book"; // Client component
import FeaturedBooksClient from './FeaturedBooksClient'; // New client component

async function fetchFeaturedBooks(): Promise<BookType[]> {
  try {
    const response = await fetch("http://localhost:8000/api/books?limit=3", {
      next: { tags: ['featured-books'] } // Add cache tagging
    });

    if (!response.ok) {
      throw new Error("Failed to fetch featured books");
    }

    const data = await response.json();

    // Validate the fetched data
    if (!Array.isArray(data)) {
      throw new Error("Invalid data format: expected an array of books.");
    }

    // Filter and transform data
    const validBooks = data
      .filter(
        (book) =>
          book &&
          book.id &&
          book.title &&
          book.author &&
          book.price !== undefined && // More precise check
          book.image_data
      )
      .map((book) => ({
        ...book,
        price: parseFloat(book.price),
      }));

    return validBooks;
  } catch (error) {
    console.error("Error fetching featured books:", error);
    return []; // Return empty array instead of throwing to prevent page crash
  }
}

export default async function FeaturedBooks() {
  const featuredBooks = await fetchFeaturedBooks();
  
  return <FeaturedBooksClient books={featuredBooks} />;
}