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

const ChartCard = () => {
  const data = [
    { name: "Jan", Income: 5000, Expense: 4000 },
    { name: "Feb", Income: 6000, Expense: 3000 },
    { name: "Mar", Income: 3000, Expense: 5000 },
    { name: "Apr", Income: 8000, Expense: 4780 },
    { name: "May", Income: 2000, Expense: 5890 },
  ];

  return (
    <div className="flex min-h-80 flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition duration-200 hover:shadow-lg">
      <h2 className="mb-4 text-lg font-semibold">Monthly Income & Expense</h2>

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
              dataKey="Income"
              stroke="#4f46e5"
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
    </div>
  );
};

export default ChartCard;
