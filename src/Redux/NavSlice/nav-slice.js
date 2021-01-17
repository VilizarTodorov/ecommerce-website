import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  mainNav: false,
};

const navSlice = createSlice({
  name: "toggleNav",
  initialState: { ...INITIAL_STATE },
  reducers: {
    setMainToTrue(state) {
      state.mainNav = true;
    },
    setMainToFalse(state) {
      state.mainNav = false;
    },
  },
});

export const { setMainToFalse, setMainToTrue } = navSlice.actions;
export default navSlice.reducer;
