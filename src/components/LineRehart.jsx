import { useSelector } from "react-redux";
import {
  CartesianGrid,
  Line,
  Tooltip,
  XAxis,
  ResponsiveContainer,
  YAxis,
  Legend,
  LineChart,
} from "recharts";
import { generateMonthlyChartData } from "../utils/chartData";

const LineRechart = () => {
  const isDark = useSelector((state) => state.ui.darkMode);
  const transactions = useSelector((state) => state.transactions.transactions);

  const data = generateMonthlyChartData(transactions);
  return (
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
            tick={{ fill: isDark ? "#9CA3AF" : "#6B7280", fontSize: 12 }}
          />
          <Tooltip />
          <CartesianGrid stroke={isDark ? "#57657a" : "#E5E7EB"} />
          <Legend verticalAlign="top" height={36} />

          <Line
            type="monotone"
            dataKey="Balance"
            stroke="#4f46e5"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Income"
            stroke="#16A34A"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Expense"
            stroke="#DC2626"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineRechart;
