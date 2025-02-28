export function Categories() {
    const categories = [
      { name: "Fiction", image: "https://via.placeholder.com/200x200" },
      { name: "Non-Fiction", image: "https://via.placeholder.com/200x200" },
      { name: "Mystery", image: "https://via.placeholder.com/200x200" },
      { name: "Sci-Fi", image: "https://via.placeholder.com/200x200" },
    ];
  
    return (
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Explore by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }