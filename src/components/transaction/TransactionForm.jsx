import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTransaction } from "../../redux/slices/transactionSlice";

const TransactionForm = ({ setToggleForm }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    date: "",
    category: "",
    amount: 0,
    type: "expense",
  });

  const handleFormData = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.date || !formData.category || !formData.amount) {
      alert("Please fill all fields");
      return;
    }

    const transaction = {
      ...formData,
      id: uuidv4(),
      name: formData.category,
    };
    console.log(Date.now());
    dispatch(addTransaction(transaction));
    setToggleForm(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-[90%] rounded-2xl bg-white p-6 shadow-xl md:w-125 dark:bg-gray-700">
        <h2 className="mb-4 text-lg font-semibold dark:text-gray-200">
          Add Transaction
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Date */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-200">
              Date
            </label>
            <input
              type="date"
              name="date"
              required
              onChange={(e) => handleFormData(e.target.name, e.target.value)}
              className=": mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-800 dark:text-gray-200"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-200">
              Category
            </label>
            <select
              name="category"
              onChange={(e) => handleFormData(e.target.name, e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-800 dark:text-gray-200"
              required
            >
              <option value="" className="dark:bg-gray-600">
                Select category
              </option>

              {/* Expense */}
              <optgroup label="Expense" className="dark:bg-gray-600">
                <option value="Food">Food</option>
                <option value="Rent">Rent</option>
                <option value="Groceries">Groceries</option>
                <option value="Shopping">Shopping</option>
                <option value="Travel">Travel</option>
                <option value="Bills">Bills</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
                <option value="Transport">Transport</option>
                <option value="Subscriptions">Subscriptions</option>
                <option value="Others">Others</option>
              </optgroup>

              {/* Income */}
              <optgroup label="Income" className="dark:bg-gray-600">
                <option value="Salary">Salary</option>
                <option value="Freelance">Freelance</option>
                <option value="Business">Business</option>
                <option value="Investment">Investment</option>
                <option value="Interest">Interest</option>
                <option value="Bonus">Bonus</option>
                <option value="Gift">Gift</option>
                <option value="Other Income">Other Income</option>
              </optgroup>
            </select>
          </div>

          {/* Amount */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-200">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              onChange={(e) =>
                handleFormData(e.target.name, Number(e.target.value))
              }
              placeholder="Enter amount"
              className="p mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-800 dark:text-gray-200"
              required
            />
          </div>

          {/* Type */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-200">
              Type
            </label>

            <div className="mt-2 flex gap-3">
              {/* Income */}
              <label
                className={`flex-1 cursor-pointer rounded-lg border py-2 text-center text-sm font-medium transition ${
                  formData.type === "income"
                    ? "border-green-600 bg-green-600 text-white"
                    : "border-green-200 bg-green-50 text-green-600 hover:bg-green-100"
                }`}
              >
                <input
                  type="radio"
                  name="type"
                  value="income"
                  checked={formData.type === "income"}
                  onChange={(e) => {
                    handleFormData("type", "income");
                  }}
                  className="hidden"
                />
                Income
              </label>

              {/* Expense */}
              <label
                className={`flex-1 cursor-pointer rounded-lg border py-2 text-center text-sm font-medium transition ${
                  formData.type === "expense"
                    ? "border-red-600 bg-red-600 text-white"
                    : "border-red-200 bg-red-50 text-red-600 hover:bg-red-100"
                }`}
              >
                <input
                  type="radio"
                  name="type"
                  value="expense"
                  checked={formData.type === "expense"}
                  onChange={(e) => {
                    handleFormData("type", "expense");
                  }}
                  className="hidden"
                />
                Expense
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              className="px-4 py-2 text-gray-600 dark:text-gray-200"
              onClick={() => setToggleForm(false)}
            >
              Cancel
            </button>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;
