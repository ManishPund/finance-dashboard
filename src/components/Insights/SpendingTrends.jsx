import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const SpendingTrends = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  // Calculate spending trends
  const trendData = useMemo(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Calculate last month
    const lastMonthDate = new Date(currentYear, currentMonth - 1);
    const lastMonth = lastMonthDate.getMonth();
    const lastYear = lastMonthDate.getFullYear();

    // Filter expenses for current month
    const currentMonthExpenses = transactions.filter((t) => {
      const transactionDate = new Date(t.date);
      return (
        transactionDate.getMonth() === currentMonth &&
        transactionDate.getFullYear() === currentYear &&
        t.type === "expense"
      );
    });

    // Filter expenses for last month
    const lastMonthExpenses = transactions.filter((t) => {
      const transactionDate = new Date(t.date);
      return (
        transactionDate.getMonth() === lastMonth &&
        transactionDate.getFullYear() === lastYear &&
        t.type === "expense"
      );
    });

    // Group current month by category
    const currentCategoryMap = {};
    currentMonthExpenses.forEach((t) => {
      if (!currentCategoryMap[t.category]) {
        currentCategoryMap[t.category] = 0;
      }
      currentCategoryMap[t.category] += t.amount;
    });

    // Group last month by category
    const lastCategoryMap = {};
    lastMonthExpenses.forEach((t) => {
      if (!lastCategoryMap[t.category]) {
        lastCategoryMap[t.category] = 0;
      }
      lastCategoryMap[t.category] += t.amount;
    });

    // Merge data and calculate differences
    // Only include categories that have spending in current month
    const trends = Object.keys(currentCategoryMap)
      .map((category) => {
        const current = currentCategoryMap[category];
        const last = lastCategoryMap[category] || 0;
        const diff = current - last;
        const percentChange =
          last === 0 ? 100 : ((diff / last) * 100).toFixed(1);

        return {
          name: category,
          current,
          last,
          diff,
          percentChange,
        };
      })
      .sort((a, b) => b.current - a.current);

    return trends;
  }, [transactions]);

  // Find max value for scaling bars
  const maxValue = Math.max(
    ...trendData.flatMap((item) => [item.current, item.last]),
    1,
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
          Current Month
        </div>
        <div className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-full bg-gray-400"></span>
          Last Month
        </div>
      </div>

      {/* Data */}
      <div className="space-y-5">
        {trendData.length === 0 ? (
          <p className="py-4 text-center text-gray-500 dark:text-gray-400">
            No spending data available
          </p>
        ) : (
          trendData.map((item, index) => {
            const currentPercent = (item.current / maxValue) * 100;
            const lastPercent = (item.last / maxValue) * 100;

            return (
              <div key={index}>
                {/* Header */}
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">
                    {item.name}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-800 dark:text-gray-300">
                      ₹{item.current.toLocaleString()}
                    </span>

                    <span
                      className={`text-xs font-medium ${
                        item.diff >= 0
                          ? "text-red-600 dark:text-red-400"
                          : "text-green-600 dark:text-green-400"
                      }`}
                    >
                      {item.diff >= 0 ? "+" : ""}₹{item.diff.toLocaleString()} (
                      {item.percentChange}%)
                    </span>
                  </div>
                </div>

                {/* Current Month Bar */}
                <div className="mb-1 h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-indigo-500 transition-all duration-500"
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
          })
        )}
      </div>
    </div>
  );
};

export default SpendingTrends;
