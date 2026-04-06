import ExpensePieChart from "../components/Insights/ExpensePieChart";
import ChartCard from "../components/Insights/ChartCard";
import TopExpense from "../components/Insights/TopExpense";
import SpendingTrends from "../components/Insights/SpendingTrends";
import SavingGoals from "../components/Insights/SavingGoals";

const Insights = () => {
  return (
    <>
      <h1 className="mb-1 text-2xl font-bold">Insights</h1>
      {/* Charts */}
      <div className="my-4 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <ChartCard />
        <ExpensePieChart />
      </div>

      {/* Middle */}
      <div className="my-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        <TopExpense />
        <SpendingTrends />
      </div>

      {/* Bottom */}
      <div className="my-4 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <SavingGoals />
      </div>
    </>
  );
};

export default Insights;
