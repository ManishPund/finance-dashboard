import SummaryCard from "../components/dashboard/SummaryCard";
import BalanceChart from "../components/dashboard/BalanceChart";
import ExpensePieChart from "../components/dashboard/ExpensePieChart";

const Dashboard = () => {
  return (
    <>
      <h1 className="mb-1 text-2xl font-bold text-black dark:text-gray-100">
        Dashboard Overview
      </h1>
      <h3 className="text-gray-600 dark:text-gray-400">
        Welcome back! Here's summary of your finance.
      </h3>
      <SummaryCard />
      <div className="mb-6 grid min-h-80 grid-cols-1 items-stretch gap-5 xl:grid-cols-2">
        <BalanceChart />
        <ExpensePieChart />
      </div>
    </>
  );
};

export default Dashboard;
