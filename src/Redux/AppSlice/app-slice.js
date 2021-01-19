import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isAppReady: false,
};

const appSlice = createSlice({
  name: "app",
  initialState: { ...INITIAL_STATE },
  reducers: {
    setToReady(state) {
      state.isAppReady = true;
    },
  },
});

export const { setToReady } = appSlice.actions;
export default appSlice.reducer;
