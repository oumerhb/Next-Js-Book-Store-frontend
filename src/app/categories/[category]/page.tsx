import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { notFound } from 'next/navigation';

// Define the category data with UI variations
const categoryData: Record<string, {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  buttonColor: string;
  featuredBooks: { title: string; author: string }[];
}> = {
  'fiction': {
    title: 'Fiction',
    description: 'Explore our wide collection of fiction books from various genres.',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-800',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
    featuredBooks: [
      { title: 'The Great Novel', author: 'Jane Doe' },
      { title: 'Fantasy World', author: 'John Smith' }
    ]
  },
  'non-fiction': {
    title: 'Non-Fiction',
    description: 'Discover factual books about real events, people, and ideas.',
    bgColor: 'bg-green-50',
    textColor: 'text-green-800',
    buttonColor: 'bg-green-600 hover:bg-green-700',
    featuredBooks: [
      { title: 'History of Everything', author: 'James Fact' },
      { title: 'Scientific Discoveries', author: 'Dr. Knowledge' }
    ]
  },
  'mystery': {
    title: 'Mystery',
    description: 'Solve puzzles and uncover secrets with our mystery collection.',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-800',
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
    featuredBooks: [
      { title: 'The Missing Clue', author: 'Sherlock Writer' },
      { title: 'Dark Secrets', author: 'Noir Author' }
    ]
  },
  'science-fiction': {
    title: 'Science Fiction',
    description: 'Journey to futuristic worlds and alternate realities.',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-800',
    buttonColor: 'bg-orange-600 hover:bg-orange-700',
    featuredBooks: [
      { title: 'Galactic Odyssey', author: 'Star Writer' },
      { title: 'Time Paradox', author: 'Future Author' }
    ]
  }
};

export default function CategoryPage({
  params
}: {
  params: { category: string }
}) {
  const category = params.category;
  const data = categoryData[category];

  if (!data) {
    return notFound();
  }

  return (
    <>
    <Navbar/>
    <div className={`min-h-screen ${data.bgColor} ${data.textColor}`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">{data.title}</h1>
        <p className="text-xl mb-8">{data.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.featuredBooks.map((book, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-600 mb-4">by {book.author}</p>
              <button className={`px-4 py-2 rounded-md text-white ${data.buttonColor}`}>
                View Details
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">More in {data.title}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* You could add more category-specific content here */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-40 bg-gray-200 mb-2 rounded"></div>
              <p className="font-medium">New Release</p>
            </div>
            {/* Repeat or add more items */}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}