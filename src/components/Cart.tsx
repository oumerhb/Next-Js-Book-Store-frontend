// src/components/Cart.tsx
"use client"; // Mark as a Client Component for interactivity

import { useState } from "react";
import Link from "next/link";

export function Cart() {
  // Sample cart data (replace with real data from your state or API)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      price: 10.99,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      price: 12.99,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ]);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle quantity change
  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Handle item removal
  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h2>

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-6"
            >
              {/* Book Image */}
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Book Details */}
              <div className="flex-1 ml-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-6">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  className="w-16 px-3 py-2 border border-gray-300 rounded-md text-center font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="1"
                />
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-sm text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors"
                >
                  Remove
                </button>
              </div>

              {/* Subtotal */}
              <p className="text-lg font-semibold text-gray-900 font-mono ml-6">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Total Price and Checkout Button */}
      {cartItems.length > 0 && (
        <div className="mt-8 border-t pt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900">Total</h3>
            <p className="text-xl font-bold text-gray-900 font-mono">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
          <Link
            href="/checkout"
            className="mt-6 w-full flex justify-center py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
}