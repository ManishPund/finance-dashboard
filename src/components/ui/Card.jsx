import { TrendingDown, TrendingUp, Wallet } from "lucide-react";

const colorVariants = {
  indigo: {
    bg: "bg-indigo-600/15",
    icon: <Wallet />,
    iconBg: "bg-indigo-600/15",
    color: "text-indigo-600",
    border: "border-indigo-600",
  },
  green: {
    bg: "bg-green-600/15",
    icon: <TrendingUp />,
    iconBg: "bg-green-600/15",
    color: "text-green-800",
    border: "border-green-600",
  },
  red: {
    bg: "bg-red-600/15",
    icon: <TrendingDown />,
    iconBg: "bg-red-600/15",
    color: "text-red-600",
    border: "border-red-600",
  },
};

const Card = ({ color = "indigo", Title, Value = 0, Change = 0, type }) => {
  const styles = colorVariants[color];

  const isExpense = type === "expense";
  const isPositive = Change >= 0;
  const isGood = isExpense ? !isPositive : isPositive;

  const formattedPrice = (Value || 0)
    .toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    })
    .slice(0, -3);

  return (
    <div
      className={`${styles.bg} ${styles.border} flex items-center gap-3 rounded-2xl border p-5 shadow-sm transition duration-200 hover:shadow-md`}
    >
      <div className={` ${styles.iconBg} ${styles.color} rounded-md p-2`}>
        {styles.icon}
      </div>
      <div>
        <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {Title}
        </h2>
        <div className="my-2 flex items-end gap-3">
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {formattedPrice}
          </p>
          <div className="text-sm font-medium text-green-600">
            <span className="flex flex-wrap items-end">
              <div
                className={`flex items-center gap-1 rounded-lg px-2 py-0.5 text-xs font-medium ${
                  isGood
                    ? "bg-green-600/10 text-green-600 dark:text-green-400"
                    : "bg-red-600/10 text-red-600 dark:text-red-400"
                }`}
              >
                {isPositive ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}
                {Math.abs(Change)}%
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-300">
                {type === "expense"
                  ? " spending vs last month"
                  : " vs last month"}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
