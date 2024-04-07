import { configureStore } from "@reduxjs/toolkit";
import kinoReducer from "../kino/kinoSlice";

export const store = configureStore({
  reducer: {
    kino: kinoReducer,
  },
});
