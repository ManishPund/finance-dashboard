import PieRechart from "../PieRechart";

const ExpensePieChart = () => {
  return (
    <div className="min-h-80 rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition duration-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-700">
      <h2 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
        Expenses Breakdown
      </h2>
      <PieRechart />
    </div>
  );
};

export default ExpensePieChart;
