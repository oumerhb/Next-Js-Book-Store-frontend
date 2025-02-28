// src/app/books/[id]/page.tsx
export default function BookDetail({ params }: { params: { id: string } }) {
    // Fetch book details based on the ID (replace with your data fetching logic)
    const book = {
      id: params.id,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
    };
  
    return (
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Book Image and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Book Image */}
            <div className="lg:order-2">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
  
            {/* Book Details */}
            <div className="lg:order-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{book.title}</h1>
              <p className="text-lg text-gray-600 mb-4">by {book.author}</p>
              <p className="text-2xl font-bold text-gray-900 mb-6">${book.price.toFixed(2)}</p>
  
              {/* Book Description */}
              <p className="text-gray-700 mb-8">{book.description}</p>
  
              {/* Add to Cart Button */}
              <button className="w-full lg:w-auto px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }