import { TrendingDown, TrendingUp, Wallet } from "lucide-react";

const colorVariants = {
  indigo: {
    bg: "bg-indigo-600/5",
    icon: <Wallet />,
    iconBg: "bg-indigo-600/15",
    color: "text-indigo-600",
    border: "border-indigo-600",
  },
  green: {
    bg: "bg-green-600/5",
    icon: <TrendingUp />,
    iconBg: "bg-green-600/15",
    color: "text-green-600",
    border: "border-green-600",
  },
  red: {
    bg: "bg-red-600/5",
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
      className={`${styles.bg} ${styles.border} p-5 rounded-2xl shadow-sm border hover:shadow-md transition duration-200 flex items-center gap-3`}
    >
      <div className={` ${styles.iconBg}  ${styles.color} p-2 rounded-md`}>
        {styles.icon}
      </div>
      <div>
        <h2 className="font-medium text-sm text-gray-600">{Title}</h2>
        <div className="flex items-end gap-3 my-2">
          <p className="text-2xl font-bold text-gray-800">{formattedPrice}</p>
          <div className="text-sm text-green-600 font-medium">
            <span className="flex items-end flex-wrap">
              <div
                className={`flex items-center px-2 py-0.5 text-xs rounded-lg font-medium gap-1 ${
                  isGood
                    ? "bg-green-600/10 text-green-600"
                    : "bg-red-600/10 text-red-600"
                }`}
              >
                {isPositive ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}
                {Math.abs(Change)}%
              </div>
              <p className="text-xs text-gray-500 mt-1">
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
