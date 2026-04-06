import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [
    {
      id: 1,
      name: "Salary",
      amount: 50000,
      type: "income",
      category: "Salary",
      date: "2026-03-01",
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
