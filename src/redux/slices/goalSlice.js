import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goal: {
    targetAmount: 112000,
    id: 1,
  },
};

const goalSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    updateGoal: (state, action) => {
      state.goal = action.payload;
    },
  },
});

export const { updateGoal } = goalSlice.actions;
export default goalSlice.reducer;
