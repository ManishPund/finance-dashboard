export const getMonth = (date) => new Date(date).getMonth();
export const getYear = (date) => new Date(date).getFullYear();

export const calculateStats = (data) => {
  const income = data
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = data
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return { income, expense, balance };
};

export const calculateChange = (current, last) => {
  if (last === 0) return 0;
  return (((current - last) / last) * 100).toFixed(1);
};
