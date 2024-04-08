import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  admins: [{ email: "kinoizlovchi@gmail.com", password: "M7802012" }],
  admin: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getAuthAdmin: (state, { payload }) => {
      state.admin = payload;
    },
  },
});
export const { getAuthAdmin } = authSlice.actions;
export default authSlice.reducer;
