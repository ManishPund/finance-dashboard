import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
  role: "Viewer",
  darkMode: JSON.parse(localStorage.getItem("darkMode")) ?? false,
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

    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleSidebar, setRole, toggleDarkMode } = uiSlice.actions;

export default uiSlice.reducer;
