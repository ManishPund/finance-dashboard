import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [
    {
      id: 1,
      name: "Salary",
      amount: 50000,
      type: "income",
      category: "Salary",
      date: "2026-01-01",
    },
    {
      id: 2,
      name: "Freelance Project",
      amount: 12000,
      type: "income",
      category: "Freelance",
      date: "2026-01-15",
    },
    {
      id: 3,
      name: "Rent",
      amount: 15000,
      type: "expense",
      category: "Rent",
      date: "2026-01-05",
    },
    {
      id: 4,
      name: "Groceries",
      amount: 3000,
      type: "expense",
      category: "Food",
      date: "2026-01-10",
    },

    {
      id: 5,
      name: "Salary",
      amount: 52000,
      type: "income",
      category: "Salary",
      date: "2026-02-01",
    },
    {
      id: 6,
      name: "Stock Profit",
      amount: 8000,
      type: "income",
      category: "Investment",
      date: "2026-02-18",
    },
    {
      id: 7,
      name: "Shopping",
      amount: 6000,
      type: "expense",
      category: "Shopping",
      date: "2026-02-08",
    },
    {
      id: 8,
      name: "Electricity Bill",
      amount: 2500,
      type: "expense",
      category: "Bills",
      date: "2026-02-12",
    },

    {
      id: 9,
      name: "Salary",
      amount: 50000,
      type: "income",
      category: "Salary",
      date: "2026-03-01",
    },
    {
      id: 10,
      name: "Bonus",
      amount: 10000,
      type: "income",
      category: "Bonus",
      date: "2026-03-20",
    },
    {
      id: 11,
      name: "Travel",
      amount: 7000,
      type: "expense",
      category: "Travel",
      date: "2026-03-14",
    },
    {
      id: 12,
      name: "Dining Out",
      amount: 2500,
      type: "expense",
      category: "Food",
      date: "2026-03-18",
    },

    {
      id: 13,
      name: "Salary",
      amount: 53000,
      type: "income",
      category: "Salary",
      date: "2026-04-01",
    },
    {
      id: 14,
      name: "Interest",
      amount: 2000,
      type: "income",
      category: "Interest",
      date: "2026-04-10",
    },
    {
      id: 15,
      name: "Gym",
      amount: 1500,
      type: "expense",
      category: "Health",
      date: "2026-04-05",
    },
    {
      id: 16,
      name: "Subscriptions",
      amount: 999,
      type: "expense",
      category: "Subscriptions",
      date: "2026-04-11",
    },
  ],
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },

    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (t) => t.id !== action.payload,
      );
    },

    updateTransaction: (state, action) => {
      const index = state.transactions.findIndex(
        (t) => t.id === action.payload.id,
      );
      if (index !== -1) {
        state.transactions[index] = action.payload;
      }
    },
  },
});

export const { addTransaction, deleteTransaction, updateTransaction } =
  transactionSlice.actions;

export default transactionSlice.reducer;
