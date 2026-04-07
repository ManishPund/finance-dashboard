import PieRechart from "../PieRechart";

const ExpensePieChart = () => {
  // Calculate total

  return (
    <div className="min-h-80 rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition duration-200 hover:shadow-lg dark:border-gray-600 dark:bg-gray-800">
      <h2 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-100">
        Expenses by Category
      </h2>

      <PieRechart />
    </div>
  );
};

export default ExpensePieChart;
