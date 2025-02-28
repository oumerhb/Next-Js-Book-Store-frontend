export function BestSellers() {
    const books = [
      { title: "Book 1", author: "Author 1", price: "$19.99", rating: 4.5 },
      { title: "Book 2", author: "Author 2", price: "$24.99", rating: 4.7 },
      { title: "Book 3", author: "Author 3", price: "$14.99", rating: 4.2 },
    ];
  
    return (
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
                <p className="text-lg font-bold text-gray-900 mt-2">{book.price}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500">★★★★☆</span>
                  <span className="text-sm text-gray-600 ml-2">({book.rating})</span>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }