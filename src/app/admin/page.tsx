"use client"; // Mark as a Client Component for interactivity

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AdminDashboard() {
  // Data for the bar chart
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(59, 130, 246, 0.6)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Use 'as const' for TypeScript
      },
      title: {
        display: true,
        text: "Monthly Sales",
      },
    },
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-700">Total Books</h3>
          <p className="text-2xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
          <p className="text-2xl font-bold text-blue-600">567</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
          <p className="text-2xl font-bold text-blue-600">890</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
          <p className="text-2xl font-bold text-blue-600">$12,345</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Bar data={chartData} options={chartOptions} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-600">New order placed</p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-600">User registered</p>
              <p className="text-sm text-gray-500">5 hours ago</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Book added</p>
              <p className="text-sm text-gray-500">1 day ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Orders</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Customer</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">#12345</td>
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">$49.99</td>
              <td className="px-4 py-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                  Completed
                </span>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">#12346</td>
              <td className="px-4 py-2">Jane Smith</td>
              <td className="px-4 py-2">$99.99</td>
              <td className="px-4 py-2">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                  Pending
                </span>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">#12347</td>
              <td className="px-4 py-2">Alice Johnson</td>
              <td className="px-4 py-2">$29.99</td>
              <td className="px-4 py-2">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">
                  Cancelled
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}