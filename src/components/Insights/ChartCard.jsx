import LineRechart from "../LineRehart";

const ChartCard = () => {
  return (
    <div className="flex min-h-80 flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition duration-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-700">
      <h2 className="mb-4 text-lg font-semibold dark:text-gray-200">
        Monthly Income & Expense
      </h2>
      <LineRechart />
    </div>
  );
};

export default ChartCard;
