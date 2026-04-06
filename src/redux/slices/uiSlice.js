import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
  role: "viewer",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },

    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { toggleSidebar, setRole } = uiSlice.actions;

export default uiSlice.reducer;
