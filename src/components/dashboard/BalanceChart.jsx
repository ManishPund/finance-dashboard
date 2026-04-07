import LineRechart from "../LineRehart";

const BalanceChart = () => {
  return (
    <div className="flex min-h-80 flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition duration-200 hover:shadow-lg dark:border-gray-600 dark:bg-gray-800">
      <h2 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-100">
        Balance Trend
      </h2>

      <LineRechart />
    </div>
  );
};

export default BalanceChart;
