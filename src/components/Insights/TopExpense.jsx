import React from "react";

const TopExpense = () => {
  return (
    <div className="h-auto rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition duration-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-700">
      <h2 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
        Top Expenses
      </h2>
      <div className="flex items-center justify-between py-2">
        <span className="text-gray-600 dark:text-gray-400">Rent</span>
        <span className="font-medium text-gray-800 dark:text-gray-300">
          ₹34,500
        </span>
      </div>
      <div className="flex items-center justify-between py-2">
        <span className="text-gray-600 dark:text-gray-400">Rent</span>
        <span className="font-medium text-gray-800 dark:text-gray-300">
          ₹34,500
        </span>
      </div>
      <div className="flex items-center justify-between py-2">
        <span className="text-gray-600 dark:text-gray-400">Rent</span>
        <span className="font-medium text-gray-800 dark:text-gray-300">
          ₹34,500
        </span>
      </div>
      <div className="flex items-center justify-between py-2">
        <span className="text-gray-600 dark:text-gray-400">Rent</span>
        <span className="font-medium text-gray-800 dark:text-gray-300">
          ₹34,500
        </span>
      </div>
    </div>
  );
};

export default TopExpense;
