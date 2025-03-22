"use client";

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // For handling cookies

interface Book {
  id: string;
  title: string;
  author: string;
  published_year: number;
  genre: string;
  description: string;
  price: number;
  stock: number;
  image_data: string; // Base64-encoded image
}

export default function ManageBooks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    published_year: '',
    genre: '',
    description: '',
    image: '', // Base64-encoded image
    price: '',
    stock: '',
  });
  const [error, setError] = useState<string | null>(null); // State for error messages
  const [books, setBooks] = useState<Book[]>([]); // State for fetched books

  // Fetch books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const token = Cookies.get('token');

    try {
      const response = await fetch('http://localhost:8000/api/books', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }

      const data = await response.json();

      // Parse numeric fields
      const parsedBooks = data.map((book: any) => ({
        ...book,
        price: parseFloat(book.price), // Convert price to a number
        published_year: parseInt(book.published_year, 10), // Convert published_year to a number
        stock: parseInt(book.stock, 10), // Convert stock to a number
      }));

      setBooks(parsedBooks); // Update the books state
    } catch (error) {
      console.error('Error fetching books:', error);
      setError('Failed to fetch books. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewBook({ ...newBook, image: reader.result as string }); // Store Base64-encoded image
      };
      reader.readAsDataURL(file); // Convert image to Base64
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reset error state

    // Validate that the image is uploaded
    if (!newBook.image) {
      setError('The image field is required.');
      return;
    }

    // Validate that the price is a valid number with 2 decimal places
    const priceValue = parseFloat(newBook.price);
    if (isNaN(priceValue) || !/^\d+(\.\d{1,2})?$/.test(newBook.price)) {
      setError('Please enter a valid price with up to 2 decimal places.');
      return;
    }

    // Validate that the stock is a non-negative integer
    const stockValue = parseInt(newBook.stock, 10);
    if (isNaN(stockValue) || stockValue < 0) {
      setError('Please enter a valid stock value (non-negative integer).');
      return;
    }

    interface BookData {
      title: string;
      author: string;
      published_year: number;
      genre: string;
      description: string;
      image_data: string; // Base64-encoded image
      price: number; // Decimal with 2 decimal places
      stock: number; // Non-negative integer
    }

    // Prepare the data for the API request
    const bookData: BookData = {
      title: newBook.title,
      author: newBook.author,
      published_year: parseInt(newBook.published_year, 10),
      genre: newBook.genre,
      description: newBook.description,
      image_data: newBook.image, // Base64-encoded image
      price: parseFloat(priceValue.toFixed(2)), // Ensure price has 2 decimal places
      stock: stockValue, // Ensure stock is a non-negative integer
    };

    // Get the token from cookies
    const token = Cookies.get('token');

    try {
      const response = await fetch('http://localhost:8000/api/admin/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Referer: window.location.href,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add book');
      }

      const result = await response.json();
      console.log('Book added successfully:', result);

      // Close the modal and reset the form
      setIsModalOpen(false);
      setNewBook({
        title: '',
        author: '',
        published_year: '',
        genre: '',
        description: '',
        image: '',
        price: '',
        stock: '',
      });

      // Refetch books to update the list
      fetchBooks();
    } catch (error) {
      console.error('Error adding book:', error);
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Books</h1>

      {/* Search and Add Book Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0 w-full">
        <input
          type="text"
          placeholder="Search books..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 w-full sm:max-w-md"
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto"
        >
          Add Book
        </button>
      </div>

      {/* Books Table */}
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Title</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Author</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Price</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Stock</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="border-b hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 text-sm text-gray-700">{book.title}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{book.author}</td>
                <td className="px-4 py-2 text-sm text-gray-700">${book.price.toFixed(2)}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{book.stock}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-800 mr-2 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4 sm:gap-0 w-full">
          <p className="text-sm text-gray-600">Showing {books.length} of {books.length} entries</p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Add Book Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Book</h2>
            {error && (
              <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={newBook.title}
                  onChange={handleInputChange}
                  className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Author</label>
                <input
                  type="text"
                  name="author"
                  value={newBook.author}
                  onChange={handleInputChange}
                  className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Published Year</label>
                <input
                  type="number"
                  name="published_year"
                  value={newBook.published_year}
                  onChange={handleInputChange}
                  className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Genre</label>
                <input
                  type="text"
                  name="genre"
                  value={newBook.genre}
                  onChange={handleInputChange}
                  className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={newBook.description}
                  onChange={handleInputChange}
                  className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  value={newBook.price}
                  onChange={handleInputChange}
                  className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                  step="0.01" // Allow decimal values
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={newBook.stock}
                  onChange={handleInputChange}
                  className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                  min="0" // Ensure non-negative values
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Book Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="mr-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}