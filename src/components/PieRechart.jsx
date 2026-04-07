import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { generateExpensePieData } from "../utils/pieChartData";

const COLORS = [
  "#4F46E5", // indigo
  "#16A34A", // green
  "#F59E0B", // amber
  "#DC2626", // red
  "#0EA5E9", // sky blue
  "#9333EA", // purple
  "#F43F5E", // rose
  "#14B8A6", // teal
  "#EAB308", // yellow
  "#6366F1", // indigo light
  "#22C55E", // green light
  "#EF4444", // red light
];

const PieRechart = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const data = generateExpensePieData(transactions);
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="grid flex-1 grid-cols-1 gap-4 lg:grid-cols-2">
      {/* PIE CHART */}
      <div className="h-62.5 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => `₹ ${value}`}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* CUSTOM LEGEND (RIGHT SIDE) */}
      <div className="flex flex-col justify-center gap-3">
        {data.map((item, index) => {
          const percent = ((item.value / total) * 100).toFixed(1);

          return (
            <div
              key={index}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-gray-600 dark:text-gray-400">
                  {item.name}
                </span>
              </div>

              <span className="font-medium text-gray-800 dark:text-gray-100">
                {percent}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PieRechart;
