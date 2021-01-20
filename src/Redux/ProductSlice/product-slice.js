import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isFetching: false,
  productList: [],
  product: null,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: { ...INITIAL_STATE },
  reducers: {
    startFetch(state) {
      state.isFetching = true;
    },

    fetchProductListSuccess(state, action) {
      state.productList = action.payload;
    },

    fetchProductSuccess(state, action) {
      state.product = action.payload;
    },

    fetchFailure(state, action) {
      state.error = action.payload;
    },
  },
});



export const { startFetch, fetchProductListSuccess, fetchProductSuccess, fetchFailure } = productSlice.actions;
export default productSlice.reducer;
