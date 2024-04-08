import { configureStore } from "@reduxjs/toolkit";
import kinoReducer from "../kino/kinoSlice";
import authReducer from "../kino/authSlice";

export const store = configureStore({
  reducer: {
    kino: kinoReducer,
    auth: authReducer,
  },
});
