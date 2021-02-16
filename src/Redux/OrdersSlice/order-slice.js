import { createSlice } from "@reduxjs/toolkit";
import { firestore, COLLECTIONS } from "../../Firebase/firebase";

const INITIAL_STATE = {
  orders: [],
  specificOrder: null,
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
    setSpecificOrder(state, action) {
      state.specificOrder = action.payload;
    },
    failure(state, action) {
      state.error = action.payload;
    },
    actionEnded(state) {
      state.isFetching = false;
    },
    clear(state) {
      state.orders = [];
      state.specificOrder = null;
      state.error = null;
    },
  },
});

const { actionEnded, actionStarted, setOrders, setSpecificOrder, failure, clear } = ordersSlice.actions;

const addNewOrder = (uid, previousOrders, newOrder) => {
  return (dispatch) => {
    dispatch(actionStarted());
    return firestore
      .collection(COLLECTIONS.ORDERS)
      .doc(uid)
      .update({ orders: [newOrder, ...previousOrders] })
      .then(() => dispatch(actionEnded()));
  };
};

const getSpecificOrder = (orderID, orders) => {
  return (dispatch) => {
    const order = orders.find((x) => x.orderID === orderID);
    if (order) {
      dispatch(setSpecificOrder(order));
    } else {
      dispatch(failure("no such order"));
    }
  };
};

export { addNewOrder, getSpecificOrder, failure, clear, setOrders };
export default ordersSlice.reducer;
