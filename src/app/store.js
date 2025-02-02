import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"; // Middleware for debugging
import userReducer from "../features/user/UserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger), // Adding logger for better debugging
//   devTools: process.env.NODE_ENV !== "production", // Enables Redux DevTools only in development mode
});

export default store;
