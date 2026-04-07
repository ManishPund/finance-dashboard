import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const TopExpense = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  // Get top expenses for current month
  const topExpenses = useMemo(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Filter transactions for current month and expenses only
    const monthlyExpenses = transactions.filter((t) => {
      const transactionDate = new Date(t.date);
      return (
        transactionDate.getMonth() === currentMonth &&
        transactionDate.getFullYear() === currentYear &&
        t.type === "expense"
      );
    });

    // Group by category and sum amounts
    const categoryMap = {};
    monthlyExpenses.forEach((t) => {
      if (!categoryMap[t.category]) {
        categoryMap[t.category] = 0;
      }
      categoryMap[t.category] += t.amount;
    });

    // Convert to array and sort by amount (high to low)
    const sorted = Object.entries(categoryMap)
      .map(([name, totalAmount]) => ({
        name,
        totalAmount,
      }))
      .sort((a, b) => b.totalAmount - a.totalAmount);

    return sorted;
  }, [transactions]);

  return (
    <div className="h-auto rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition duration-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-700">
      <h2 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
        Top Expenses (This Month)
      </h2>

      {topExpenses.length === 0 ? (
        <p className="py-4 text-center text-gray-500 dark:text-gray-400">
          No expenses this month
        </p>
      ) : (
        topExpenses.map((expense, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <span className="text-gray-600 dark:text-gray-400">
              {expense.name}
            </span>
            <span className="font-medium text-gray-800 dark:text-gray-300">
              ₹{expense.totalAmount.toLocaleString()}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default TopExpense;
