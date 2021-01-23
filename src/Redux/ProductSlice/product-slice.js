import { createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../Firebase/firebase";

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

    addProductSuccess(state) {
      state.isFetching = false;
    },

    updateProductSuccess(state) {
      state.isFetching = false;
    },

    deleteProductSuccess(state) {
      state.isFetching = false;
    },

    fetchProductListSuccess(state, action) {
      state.productList = action.payload;
      state.isFetching = false;
    },

    fetchProductSuccess(state, action) {
      state.product = action.payload;
      state.isFetching = false;
    },

    fetchFailure(state, action) {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

const addProduct = (product) => {
  return (dispatch) => {
    dispatch(startFetch());
    return firestore
      .collection(product.mainCategory)
      .doc()
      .set(product)
      .then(() => dispatch(addProductSuccess()));
  };
};

const updateProduct = (product, productID) => {
  return (dispatch) => {
    dispatch(startFetch());
    return firestore
      .collection(product.mainCategory)
      .doc(productID)
      .update(product)
      .then(() => dispatch(updateProductSuccess()));
  };
};

const deleteProduct = (collection, productID) => {
  return (dispatch) => {
    dispatch(startFetch());
    return firestore
      .collection(collection)
      .doc(productID)
      .delete()
      .then(() => dispatch(deleteProductSuccess()));
  };
};

export { addProduct, updateProduct, deleteProduct };

export const {
  startFetch,
  addProductSuccess,
  updateProductSuccess,
  deleteProductSuccess,
  fetchProductListSuccess,
  fetchProductSuccess,
  fetchFailure,
} = productSlice.actions;
export default productSlice.reducer;
