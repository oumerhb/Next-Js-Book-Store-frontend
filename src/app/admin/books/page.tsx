// src/app/admin/books/page.tsx
export default function ManageBooks() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Books</h1>

      {/* Search and Add Book Button */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search books..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 w-full max-w-md"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Add Book
        </button>
      </div>

      {/* Books Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="overflow-x-auto ">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Title</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Author</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Price</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 text-sm text-gray-700">The Great Gatsby</td>
                <td className="px-4 py-2 text-sm text-gray-700">F. Scott Fitzgerald</td>
                <td className="px-4 py-2 text-sm text-gray-700">$10.99</td>
                <td className="px-4 py-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Available
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-800 mr-2 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 text-sm text-gray-700">To Kill a Mockingbird</td>
                <td className="px-4 py-2 text-sm text-gray-700">Harper Lee</td>
                <td className="px-4 py-2 text-sm text-gray-700">$12.99</td>
                <td className="px-4 py-2">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    Low Stock
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-800 mr-2 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 text-sm text-gray-700">1984</td>
                <td className="px-4 py-2 text-sm text-gray-700">George Orwell</td>
                <td className="px-4 py-2 text-sm text-gray-700">$9.99</td>
                <td className="px-4 py-2">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                    Out of Stock
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-800 mr-2 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-sm text-gray-600">Showing 1 to 10 of 100 entries</p>
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
    </div>
  );
}