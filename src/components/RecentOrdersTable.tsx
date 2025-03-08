// RecentOrdersTable.tsx
export const RecentOrdersTable = () => (
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
);