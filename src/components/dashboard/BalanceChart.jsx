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

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 flex flex-col min-h-80 hover:shadow-lg transition duration-200">
      <h2 className="text-lg font-semibold mb-4">Balance Trend</h2>

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
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />
            <Tooltip />
            <CartesianGrid stroke="#f1f5f9" />
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
