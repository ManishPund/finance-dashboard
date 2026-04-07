import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

const TransactionTable = () => {
  const [pageNo, setPageNo] = useState(1);
  const transactions = useSelector((state) => state.transactions.transactions);
  const role = useSelector((state) => state.ui.role);

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md dark:border-gray-800 dark:bg-gray-700">
      {/* ✅ DESKTOP TABLE */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left text-gray-500 dark:text-gray-200">
              <th className="py-3">Date</th>
              <th className="py-3">Category</th>
              <th className="py-3">Amount</th>
              <th className="py-3">Type</th>
              {role === "Admin" && <th className="py-3">Actions</th>}
            </tr>
          </thead>

          <tbody>
            {transactions.map((t, i) => (
              <tr
                key={i}
                className="border-b hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                <td className="py-3">{t.date}</td>
                <td>{t.category}</td>
                <td className="font-medium">₹{t.amount}</td>
                <td>
                  <span
                    className={`rounded-lg px-2 py-1 text-xs ${t.type === "expense" ? "bg-red-100 text-red-600 dark:text-red-700" : "bg-green-100 text-green-600 dark:text-green-800"}`}
                  >
                    {t.type}
                  </span>
                </td>
                {role === "Admin" && (
                  <td>
                    <Edit size={16} className="mr-2 inline cursor-pointer" />
                    <Trash2
                      size={16}
                      className="inline cursor-pointer text-red-500 dark:text-red-400"
                    />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ MOBILE CARD VIEW */}
      <div className="flex flex-col gap-3 md:hidden">
        {transactions.map((t, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 p-4 shadow-sm dark:border-gray-800"
          >
            <div className="mb-2 flex justify-between dark:text-gray-200">
              <span className="text-sm">{t.date}</span>
              <span className="font-semibold">₹{t.amount}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-200">
                {t.category}
              </span>

              <span
                className={`rounded-lg px-2 py-1 text-xs ${t.type === "expense" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
              >
                {t.type}
              </span>
            </div>
            {role === "Admin" && (
              <div className="mt-3 flex gap-3">
                <Edit
                  size={16}
                  className="cursor-pointer text-indigo-600 dark:text-indigo-400"
                />
                <Trash2
                  size={16}
                  className="cursor-pointer text-red-500 dark:text-red-400"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionTable;
