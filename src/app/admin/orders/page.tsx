"use client";

import { useState } from "react";

export default function ViewOrders() {
  // Sample data
  const orders = [
    { id: "#12345", customer: "John Doe", amount: "$49.99", status: "Completed" },
    { id: "#12346", customer: "Jane Smith", amount: "$99.99", status: "Pending" },
    { id: "#12347", customer: "Alice Johnson", amount: "$29.99", status: "Cancelled" },
    { id: "#12348", customer: "Bob Brown", amount: "$79.99", status: "Completed" },
    { id: "#12349", customer: "Charlie Davis", amount: "$59.99", status: "Pending" },
    { id: "#12350", customer: "Eve White", amount: "$39.99", status: "Cancelled" },
  ];

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // State for filtering
  const [filterStatus, setFilterStatus] = useState("All Orders");

  // Filter orders based on status
  const filteredOrders = filterStatus === "All Orders"
    ? orders
    : orders.filter(order => order.status === filterStatus);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredOrders.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Change items per page
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">View Orders</h1>

      {/* Filter Dropdown */}
      <div className="mb-6">
        <label htmlFor="filterStatus" className="block text-sm font-medium text-gray-700 mb-2">
          Filter Orders by Status
        </label>
        <select
          id="filterStatus"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
        >
          <option>All Orders</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Cancelled</option>
        </select>
      </div>

      {/* Orders Table */}
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Orders</h3>
        <table className="w-full min-w-max">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Order ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Customer</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Amount</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 text-sm text-gray-700">{order.id}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{order.customer}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{order.amount}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${order.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-sm text-gray-600">Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredOrders.length)} of {filteredOrders.length} entries</p>
          <div className="flex space-x-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === Math.ceil(filteredOrders.length / itemsPerPage)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}