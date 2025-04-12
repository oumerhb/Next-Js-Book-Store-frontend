import { BookResponse } from "@/types"


import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// Fetch books from backend API and prepend full image URL
export async function fetchFeaturedBooks(): Promise<BookResponse[]> {
  const response = await fetch("http://localhost:8000/api/books?limit=3", {
    next: { tags: ["featured-books"] },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch featured books")
  }

  const data = await response.json()
  if (!Array.isArray(data)) {
    throw new Error("Invalid data format")
  }

  console.log(data);

  return data
    .filter(
      (book) =>
        book &&
        book.id &&
        book.title &&
        book.author &&
        book.price !== undefined &&
        book.image_data
    )
    .map((book) => ({
      ...book,
      price: Number.parseFloat(book.price),
      image_data: `http://localhost:8000/storage${book.image_data.startsWith("/") ? "" : "/"}${book.image_data}`,
    }))
}