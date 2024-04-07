import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kinolar: JSON.parse(localStorage.getItem("kinolar")) || [],
  kino: JSON.parse(localStorage.getItem("kino")) || [],
  themes: "",
  filters: JSON.parse(localStorage.getItem("filters")) || [],
};

export const kinoSLice = createSlice({
  name: "kino",
  initialState,
  reducers: {
    getKino: (state, { payload }) => {
      if (payload) {
        localStorage.setItem("kinolar", JSON.stringify(payload));
      } else {
        state.kinolar = payload;
      }
    },
    getOne: (state, { payload }) => {
      const item = state.kinolar.find((i) => i.id === payload);
      if (item) {
        localStorage.setItem("kino", JSON.stringify(item));
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
        localStorage.setItem("filters", JSON.stringify(item));
      }
    },
  },
});
export const { getKino, getOne, themeChange, getFiltersKino } =
  kinoSLice.actions;
export default kinoSLice.reducer;
