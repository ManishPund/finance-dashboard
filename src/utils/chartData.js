export const generateMonthlyChartData = (transactions) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthlyData = {};

  // Initialize all months
  months.forEach((month, index) => {
    monthlyData[index] = {
      name: month,
      Income: 0,
      Expense: 0,
      Balance: 0,
    };
  });

  // Fill data
  transactions.forEach((t) => {
    const date = new Date(t.date);
    const month = date.getMonth();

    if (t.type === "income") {
      monthlyData[month].Income += t.amount;
    } else {
      monthlyData[month].Expense += t.amount;
    }
  });

  // Calculate balance
  Object.values(monthlyData).forEach((m) => {
    m.Balance = m.Income - m.Expense;
  });

  const currentMonth = new Date().getMonth();

  const last6Months = Object.values(monthlyData).slice(
    Math.max(0, currentMonth - 5),
    currentMonth + 1,
  );

  return last6Months;
};
