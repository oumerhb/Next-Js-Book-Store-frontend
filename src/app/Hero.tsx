"use client"; // Mark as a Client Component for interactivity

import Link from "next/link";

export function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-32"> {/* Increased padding to avoid overlap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Headline */}
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">Bookify</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your gateway to a world of stories, knowledge, and imagination. Whether you're looking for the latest bestsellers, timeless classics, or niche genres, we’ve got something for every reader.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-10 space-x-4">
            <Link
              href="/browse"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Books
            </Link>
            <Link
              href="/about"
              className="inline-block px-8 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}