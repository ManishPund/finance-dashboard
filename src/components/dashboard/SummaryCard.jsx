import { useSelector } from "react-redux";
import Card from "../ui/Card";
import { useMonthlyStats } from "../../hooks/useMonthlyStats";

const SummaryCard = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const stats = useMonthlyStats(transactions);

  return (
    <div className="my-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
      <Card
        color="indigo"
        Title="Total Balance"
        Value={stats.current.balance}
        Change={stats.change.balance}
        type="income"
      />
      <Card
        color="green"
        Title="Total Income"
        Value={stats.current.income}
        Change={stats.change.income}
        type="income"
      />
      <Card
        color="red"
        Title="Total Expenses"
        Value={stats.current.expense}
        Change={stats.change.expense}
        type="expense"
      />
    </div>
  );
};

export default SummaryCard;
