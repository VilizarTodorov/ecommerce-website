import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  by: "name",
  type: "asc",
};

const orderBySlice = createSlice({
  name: "orderBy",
  initialState: { ...INITIAL_STATE },
  reducers: {
    setOrderParameters(state, action) {
      state.by = action.payload.by;
      state.type = action.payload.type;
    },
  },
});

const { setOrderParameters } = orderBySlice.actions;

const setParameters = (value) => {
  const [by, type] = value.split(" ");
  return (dispatch) => {
    dispatch(setOrderParameters({ by, type }));
  };
};

export { setParameters };
export default orderBySlice.reducer;
