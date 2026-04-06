import React from "react";

const data = [
  {
    name: "Shopping",
    current: 7500,
    last: 6300,
    color: "bg-green-500",
  },
  {
    name: "Rent",
    current: 15000,
    last: 14000,
    color: "bg-indigo-500",
  },
  {
    name: "Food",
    current: 9000,
    last: 10000,
    color: "bg-red-500",
  },
  {
    name: "Travel",
    current: 5000,
    last: 4500,
    color: "bg-yellow-500",
  },
];

const SpendingTrends = () => {
  // Find max value for scaling bars
  const maxValue = Math.max(
    ...data.flatMap((item) => [item.current, item.last]),
  );

  return (
    <div className="h-auto rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-700">
      {/* Title */}
      <h2 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
        Spending Trends
      </h2>

      {/* Legend */}
      <div className="mb-4 flex gap-4 text-xs text-gray-500 dark:text-gray-300">
        <div className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-full bg-indigo-500"></span>
          Current
        </div>
        <div className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-full bg-gray-400"></span>
          Last
        </div>
      </div>

      {/* Data */}
      <div className="space-y-5">
        {data.map((item, index) => {
          const currentPercent = (item.current / maxValue) * 100;
          const lastPercent = (item.last / maxValue) * 100;

          const diff = item.current - item.last;
          const percentChange = ((diff / item.last) * 100).toFixed(1);

          return (
            <div key={index}>
              {/* Header */}
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">{item.name}</span>

                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-800 dark:text-gray-300">
                    ₹{item.current.toLocaleString()}
                  </span>

                  <span
                    className={`text-xs font-medium ${
                      diff >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {diff >= 0 ? "+" : ""}₹{diff.toLocaleString()} (
                    {percentChange}%)
                  </span>
                </div>
              </div>

              {/* Current Month Bar */}
              <div className="mb-1 h-2 w-full rounded-full bg-gray-200">
                <div
                  className={`h-2 rounded-full ${item.color} transition-all duration-500`}
                  style={{ width: `${currentPercent}%` }}
                />
              </div>

              {/* Last Month Bar */}
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div
                  className="h-2 rounded-full bg-gray-400 transition-all duration-500"
                  style={{ width: `${lastPercent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpendingTrends;
