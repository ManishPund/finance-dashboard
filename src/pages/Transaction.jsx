import { useState } from "react";
import Filters from "../components/transaction/Filters";
import TransactionTable from "../components/transaction/TransactionTable";
import TransactionForm from "../components/transaction/TransactionForm";
import EditTransaction from "../components/transaction/EditTransaction";

const Transaction = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleEditForm, setToggleEditForm] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleEditTransaction = (transaction) => {
    setSelectedTransaction(transaction);
    setToggleEditForm(true);
  };

  return (
    <>
      <h1 className="mb-1 text-2xl font-bold dark:text-gray-100">
        Transactions
      </h1>
      <div className="static">
        <Filters setToggleForm={setToggleForm} />
        <TransactionTable setToggleEditForm={handleEditTransaction} />
        {toggleForm && <TransactionForm setToggleForm={setToggleForm} />}
        {toggleEditForm && (
          <EditTransaction
            setToggleEditForm={setToggleEditForm}
            transaction={selectedTransaction}
          />
        )}
      </div>
    </>
  );
};

export default Transaction;
