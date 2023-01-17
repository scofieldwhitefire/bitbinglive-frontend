import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users";
import dashboardReducer from "./features/dashboard";

export const store = configureStore({
  reducer: {
    user: userReducer,
    dashboard: dashboardReducer,
  },
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
});
