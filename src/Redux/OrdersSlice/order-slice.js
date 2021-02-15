import { createSlice } from "@reduxjs/toolkit";
import { firestore, COLLECTIONS } from "../../Firebase/firebase";

const INITIAL_STATE = {
  orders: [],
  isFetching: false,
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState: { ...INITIAL_STATE },
  reducers: {
    actionStarted(state) {
      state.isFetching = true;
    },
    setOrders(state, action) {
      state.orders = action.payload;
    },
    failure(state, action) {
      state.error = action.payload;
    },
    actionEnded(state) {
      state.isFetching = false;
    },
  },
});

const { actionEnded, actionStarted, setOrders, failure } = ordersSlice.actions;

const getOrders = (uid) => {
  return (dispatch) => {
    return firestore
      .collection(COLLECTIONS.ORDERS)
      .doc(uid)
      .get()
      .then((doc) => dispatch(setOrders(doc.data().orders)));
  };
};

const addNewOrder = (uid, previousOrders, newOrder) => {
  return (dispatch) => {
    dispatch(actionStarted());
    return firestore
      .collection(COLLECTIONS.ORDERS)
      .doc(uid)
      .update({ orders: [...previousOrders, newOrder] })
      .then(() => dispatch(actionEnded()));
  };
};

export { getOrders, addNewOrder, failure };
export default ordersSlice.reducer;
