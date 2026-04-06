import { IndianRupee } from "lucide-react";
import React from "react";

const SavingGoals = () => {
  return (
    <div className="h-auto rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition duration-200 hover:shadow-lg">
      <h2 className="mb-4 text-lg font-semibold text-gray-700">Saving Goals</h2>
      <div className="my-2 flex items-center justify-between">
        <p className="flex items-center gap-1 text-xl font-semibold">
          <IndianRupee />
          90,000
        </p>
        <p>1,12,000</p>
      </div>
      <div className="my-3 h-3 w-full rounded-full bg-gray-200">
        <div className="h-3 w-[40%] rounded-full bg-indigo-600" />
      </div>
      <p className="flex items-center">
        <IndianRupee size={16} /> 50,000 left to reach your goal
      </p>
    </div>
  );
};

export default SavingGoals;
