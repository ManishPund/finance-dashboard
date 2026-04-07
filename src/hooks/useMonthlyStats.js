import { useMemo } from "react";
import {
  getMonth,
  getYear,
  calculateStats,
  calculateChange,
} from "../utils/stats";

export const useMonthlyStats = (transactions) => {
  return useMemo(() => {
    const now = new Date();

    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const lastMonthDate = new Date(currentYear, currentMonth - 1);
    const lastMonth = lastMonthDate.getMonth();
    const lastMonthYear = lastMonthDate.getFullYear();

    const currentMonthTx = transactions.filter(
      (t) =>
        getMonth(t.date) === currentMonth && getYear(t.date) === currentYear,
    );

    const lastMonthTx = transactions.filter(
      (t) =>
        getMonth(t.date) === lastMonth && getYear(t.date) === lastMonthYear,
    );

    const currentStats = calculateStats(currentMonthTx);
    const lastStats = calculateStats(lastMonthTx);

    return {
      current: currentStats,
      last: lastStats,
      change: {
        income: calculateChange(currentStats.income, lastStats.income),
        expense: calculateChange(currentStats.expense, lastStats.expense),
        balance: calculateChange(currentStats.balance, lastStats.balance),
      },
    };
  }, [transactions]);
};
