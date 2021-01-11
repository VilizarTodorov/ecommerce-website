import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  mainNav: false,
  menNav: false,
  womenNav: false,
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
    // setMenToTrue(state) {
    //   state.menNav = true;
    // },
    // setMenToFalse(state) {
    //   state.menNav = false;
    // },
    // setWomenToTrue(state) {
    //   state.womenNav = true;
    // },
    // setWomenToFalse(state) {
    //   state.womenNav = false;
    // },
  },
});

export const {
  setMainToFalse,
  setMainToTrue,
  // setMenToFalse,
  // setMenToTrue,
  // setWomenToFalse,
  // setWomenToTrue,
} = navSlice.actions;
export default navSlice.reducer;
