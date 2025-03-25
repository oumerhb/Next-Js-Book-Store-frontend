// src/components/CategoryCard.tsx
"use client";

interface CategoryCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

export function CategoryCard({ title, image, onClick }: CategoryCardProps) {
  return (
    <div 
      className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center p-4">
          <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
          <button
            className="px-4 py-2 bg-white text-gray-800 font-medium rounded-md hover:bg-gray-100 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}