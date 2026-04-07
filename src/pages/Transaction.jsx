import { useState } from "react";
import Filters from "../components/transaction/Filters";
import TransactionTable from "../components/transaction/TransactionTable";
import TransactionForm from "../components/transaction/TransactionForm";

const Transaction = () => {
  
  const [toggleForm, setToggleForm] = useState(false);
  return (
    <>
      <h1 className="mb-1 text-2xl font-bold dark:text-gray-100">
        Transactions
      </h1>
      <div className="static">
        <Filters setToggleForm={setToggleForm} />
        <TransactionTable />
        {toggleForm && <TransactionForm setToggleForm={setToggleForm} />}
      </div>
    </>
  );
};

export default Transaction;
