import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { notFound } from 'next/navigation';

// Define the category UI configurations
const categoryConfig: Record<string, {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  buttonColor: string;
}> = {
  'fiction': {
    title: 'Fiction',
    description: 'Explore our wide collection of fiction books from various genres.',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-800',
    buttonColor: 'bg-blue-600 hover:bg-blue-700'
  },
  'non-fiction': {
    title: 'Non-Fiction',
    description: 'Discover factual books about real events, people, and ideas.',
    bgColor: 'bg-green-50',
    textColor: 'text-green-800',
    buttonColor: 'bg-green-600 hover:bg-green-700'
  },
  'mystery': {
    title: 'Mystery',
    description: 'Solve puzzles and uncover secrets with our mystery collection.',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-800',
    buttonColor: 'bg-purple-600 hover:bg-purple-700'
  },
  'science-fiction': {
    title: 'Science Fiction',
    description: 'Journey to futuristic worlds and alternate realities.',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-800',
    buttonColor: 'bg-orange-600 hover:bg-orange-700'
  }
};

interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  image_data: string;
  // Add other book properties as needed
}

async function fetchBooksByGenre(genre: string, page = 1, limit = 8) {
  try {
    const response = await fetch(
      `http://localhost:8000/api/books?genre=${genre}&page=${page}&limit=${limit}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        next: { revalidate: 3600 } // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}

export default async function CategoryPage({
  params
}: {
  params: { category: string }
}) {
  const category = params.category;
  const config = categoryConfig[category];

  if (!config) {
    return notFound();
  }

  // Fetch books for this category
  const books = await fetchBooksByGenre(config.title);

  return (
    <>
      <Navbar />
      <div className={`min-h-screen ${config.bgColor} ${config.textColor}`}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6">{config.title}</h1>
          <p className="text-xl mb-8">{config.description}</p>

          {books.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">No books found in this category</h2>
              <p className="text-lg">Please check back later or browse our other categories.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {books.map((book: Book) => (
                  <div key={book.id} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="h-48 overflow-hidden mb-4">
                      {book.image_data && (
                        <img 
                          src={`data:image/jpeg;base64,${book.image_data}`}
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                    <p className="text-gray-600 mb-3">by {book.author}</p>
                    <p className="text-lg font-bold mb-4">${book.price.toFixed(2)}</p>
                    <button className={`w-full px-4 py-2 rounded-md text-white ${config.buttonColor}`}>
                      View Details
                    </button>
                  </div>
                ))}
              </div>

              {/* Pagination would go here */}
              {/* <div className="mt-12 flex justify-center">
                <Pagination currentPage={page} totalPages={totalPages} />
              </div> */}

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">More in {config.title}</h2>
                {/* You could fetch additional books here with a different limit */}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}