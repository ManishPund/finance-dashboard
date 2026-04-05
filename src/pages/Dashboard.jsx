import SummaryCard from "../components/dashboard/SummaryCard";
import BalanceChart from "../components/dashboard/BalanceChart";
import ExpensePieChart from "../components/dashboard/ExpensePieChart";

const Dashboard = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-1">Dashboard Overview</h1>
      <h3 className="text-gray-600">
        Welcome back! Here's summary of your finance.
      </h3>
      <SummaryCard />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-6 items-stretch min-h-80">
        <BalanceChart />
        <ExpensePieChart />
      </div>
    </>
  );
};

export default Dashboard;
