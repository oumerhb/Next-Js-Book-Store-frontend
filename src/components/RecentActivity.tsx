// RecentActivity.tsx
export const RecentActivity = () => (
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
);