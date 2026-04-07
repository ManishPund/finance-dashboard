import { IndianRupee, Edit2 } from "lucide-react";
import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateGoal } from "../../redux/slices/goalSlice";

const SavingGoals = () => {
  const dispatch = useDispatch();
  const goal = useSelector((state) => state.goals.goal);
  const transactions = useSelector((state) => state.transactions.transactions);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editValue, setEditValue] = useState(goal.targetAmount);

  // Calculate current month spending
  const currentMonthStats = useMemo(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const monthlyTransactions = transactions.filter((t) => {
      const d = new Date(t.date);
      return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
    });

    const income = monthlyTransactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const expense = monthlyTransactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      income,
      expense,
      savings: income - expense,
    };
  }, [transactions]);

  const savings = currentMonthStats.savings;
  const progress = (savings / goal.targetAmount) * 100;
  const amountLeft = goal.targetAmount - savings;

  const handleSaveGoal = () => {
    if (editValue && editValue > 0) {
      dispatch(updateGoal({ ...goal, targetAmount: Number(editValue) }));
      setIsEditMode(false);
    }
  };

  return (
    <div className="h-auto rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition duration-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-700">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          Saving Goals
        </h2>
        <button
          onClick={() => setIsEditMode(!isEditMode)}
          className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <Edit2 size={18} className="text-indigo-600 dark:text-indigo-400" />
        </button>
      </div>

      {isEditMode ? (
        <div className="mb-4 space-y-3">
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">
              Target Amount
            </label>
            <input
              type="number"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-200"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSaveGoal}
              className="flex-1 rounded-lg bg-indigo-600 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-700"
            >
              Save
            </button>
            <button
              onClick={() => {
                setIsEditMode(false);
                setEditValue(goal.targetAmount);
              }}
              className="flex-1 rounded-lg border border-gray-300 py-2 dark:border-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="my-2 flex items-center justify-between">
            <p className="flex items-center gap-1 text-xl font-semibold dark:text-gray-200">
              <IndianRupee />
              {savings.toLocaleString()}
            </p>
            <p className="dark:text-gray-300">
              ₹{goal.targetAmount.toLocaleString()}
            </p>
          </div>
          <div className="my-3 h-3 w-full rounded-full bg-gray-200">
            <div
              className="h-3 rounded-full bg-indigo-600 transition-all duration-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="flex items-center dark:text-gray-300">
            <IndianRupee size={16} />
            {amountLeft > 0
              ? `₹${amountLeft.toLocaleString()} left to reach your goal`
              : `Goal reached! ₹${Math.abs(amountLeft).toLocaleString()} over`}
          </p>
        </>
      )}
    </div>
  );
};

export default SavingGoals;
