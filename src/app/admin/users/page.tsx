// src/app/admin/users/page.tsx
export default function ManageUsers() {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Users</h1>
  
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search users..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 w-full max-w-md"
          />
        </div>
  
        {/* Users Table */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">User List</h3>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Email</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Role</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 text-sm text-gray-700">John Doe</td>
                <td className="px-4 py-2 text-sm text-gray-700">john@example.com</td>
                <td className="px-4 py-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    Admin
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-800 mr-2 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 text-sm text-gray-700">Jane Smith</td>
                <td className="px-4 py-2 text-sm text-gray-700">jane@example.com</td>
                <td className="px-4 py-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    User
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
      </div>
    );
  }