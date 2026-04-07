export const generateExpensePieData = (transactions) => {
  const now = new Date();

  const categoryMap = {};

  transactions.forEach((t) => {
    const date = new Date(t.date);

    if (
      t.type === "expense" &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    ) {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const result = Object.entries(categoryMap)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  return result.length ? result : [{ name: "No Data", value: 1 }];
};
