import { useSelector } from "react-redux";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  ResponsiveContainer,
  YAxis,
  Legend,
} from "recharts";

const BalanceChart = () => {
  const data = [
    { name: "Jan", Balance: 4000 },
    { name: "Feb", Balance: 3000 },
    { name: "Mar", Balance: 5000 },
    { name: "Apr", Balance: 4780 },
    { name: "May", Balance: 5890 },
  ];
  const isDark = useSelector((state) => state.ui.darkMode);

  return (
    <div className="flex min-h-80 flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition duration-200 hover:shadow-lg dark:border-gray-600 dark:bg-gray-800">
      <h2 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-100">
        Balance Trend
      </h2>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 0,
              right: 20,
              bottom: 5,
              left: -10,
            }}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: isDark ? "#9CA3AF" : "#6B7280", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />
            <Tooltip />
            <CartesianGrid stroke={isDark ? "#374151" : "#E5E7EB"} />
            <Legend verticalAlign="top" height={36} />

            <Line
              type="monotone"
              dataKey="Balance"
              stroke="#4f46e5"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceChart;
