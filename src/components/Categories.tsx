// src/components/Categories.tsx
"use client";

import { CategoryCard } from "./CategoryCard";
import { useRouter } from "next/navigation";

export function Categories() {
  const router = useRouter();

  // Real image links for categories
  const categories = [
    {
      title: "Fiction",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      href: "/categories/fiction",
    },
    {
      title: "Non-Fiction",
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      href: "/categories/non-fiction",
    },
    {
      title: "Mystery",
      image: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      href: "/categories/mystery",
    },
    {
      title: "Science Fiction",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      href: "/categories/science-fiction",
    },
  ];

  const handleCategoryClick = (category: string) => {
    // Navigate to the category page
    router.push(`/categories/${category.toLowerCase()}`);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Categories</h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.image}
              onClick={() => handleCategoryClick(category.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}