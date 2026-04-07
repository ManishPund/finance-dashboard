import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import customStorage from "../utils/storage";
import transactionReducer from "./slices/transactionSlice";
import uiReducer from "./slices/uiSlice";
import goalReducer from "./slices/goalSlice";

// Persist configuration
const persistConfig = {
  key: "root",
  storage: customStorage,
  version: 1,
};

// Create persisted reducer
const persistedTransactionReducer = persistReducer(
  { ...persistConfig, key: "transactions" },
  transactionReducer
);
const persistedGoalReducer = persistReducer(
  { ...persistConfig, key: "goals" },
  goalReducer
);

export const store = configureStore({
  reducer: {
    transactions: persistedTransactionReducer,
    ui: uiReducer,
    goals: persistedGoalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredPaths: ["_persist"],
      },
    }),
});

export const persistor = persistStore(store);
