import { IndianRupee } from "lucide-react";
import React from "react";

const SavingGoals = () => {
  return (
    <div className="h-auto rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition duration-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-700">
      <h2 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
        Saving Goals
      </h2>
      <div className="my-2 flex items-center justify-between">
        <p className="flex items-center gap-1 text-xl font-semibold dark:text-gray-200">
          <IndianRupee />
          90,000
        </p>
        <p className="dark:text-gray-300">1,12,000</p>
      </div>
      <div className="my-3 h-3 w-full rounded-full bg-gray-200">
        <div className="h-3 w-[40%] rounded-full bg-indigo-600" />
      </div>
      <p className="flex items-center dark:text-gray-300">
        <IndianRupee size={16} /> 50,000 left to reach your goal
      </p>
    </div>
  );
};

export default SavingGoals;
