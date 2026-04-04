import React from "react";
import Card from "../ui/Card";

const SummaryCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-6">
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
