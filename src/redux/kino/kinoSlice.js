import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kinolar: [],
  kino: [],
  themes: "",
  filters: [],
};

export const kinoSLice = createSlice({
  name: "kino",
  initialState,
  reducers: {
    getKino: (state, { payload }) => {
      if (payload) {
        state.kinolar = payload;
      } else {
        state.kinolar = payload;
      }
    },
    getOne: (state, { payload }) => {
      const item = state.kinolar.find((i) => i.id === payload);
      if (item) {
        state.kino = item;
      } else {
        state.kino = item;
      }
    },
    themeChange: (state, { payload }) => {
      state.themes = payload;
    },
    getFiltersKino: (state, { payload }) => {
      const item = state.kinolar.filter((s) => {
        return s.janri.includes(payload);
      });
      if (item) {
        state.filters = item;
      }
    },
  },
});
export const { getKino, getOne, themeChange, getFiltersKino } =
  kinoSLice.actions;
export default kinoSLice.reducer;
