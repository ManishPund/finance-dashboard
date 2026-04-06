import Card from "../ui/Card";

const SummaryCard = () => {
  return (
    <div className="my-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
      <Card
        color="indigo"
        Title="Total Balance"
        Value={45000}
        Change={2.5}
        type="income"
      />
      <Card
        color="green"
        Title="Total Income"
        Value={80000}
        Change={8.2}
        type="income"
      />
      <Card
        color="red"
        Title="Total Expenses"
        Value={35000}
        Change={3.1}
        type="expense"
      />
    </div>
  );
};

export default SummaryCard;
