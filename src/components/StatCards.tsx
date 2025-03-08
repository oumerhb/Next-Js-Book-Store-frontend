// StatsCard.tsx
interface StatsCardProps {
    title: string;
    value: string;
    className?: string;
  }
  
  export const StatsCard = ({ title, value, className }: StatsCardProps) => (
    <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${className}`}>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );