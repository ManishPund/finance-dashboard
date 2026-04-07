import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./slices/transactionSlice";
import uiReducer from "./slices/uiSlice";
import goalReducer from "./slices/goalSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    ui: uiReducer,
    goals: goalReducer,
  },
});
