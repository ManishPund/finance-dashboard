import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Food", value: 400 },
  { name: "Rent", value: 1200 },
  { name: "Shopping", value: 800 },
  { name: "Travel", value: 300 },
  { name: "Food", value: 400 },
];

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
const ExpensePieChart = () => {
  // Calculate total
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 min-h-80">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Expenses by Category
      </h2>

      {/* FLEX LAYOUT FOR PERFECT ALIGNMENT */}
      <div className="flex items-center justify-between h-[85%]">
        {/* PIE CHART */}
        <div className="w-1/2 h-full">
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
        <div className="w-1/2 flex flex-col gap-3 pl-4">
          {data.map((item, index) => {
            const percent = ((item.value / total) * 100).toFixed(1);

            return (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-gray-600">{item.name}</span>
                </div>

                <span className="font-medium text-gray-800">{percent}%</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpensePieChart;
