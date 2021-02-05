import { createSlice } from "@reduxjs/toolkit";
import { COLLECTIONS, firestore } from "../../Firebase/firebase";

const INITIAL_STATE = {
  cart: [],
  isFetching: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: { ...INITIAL_STATE },
  reducers: {
    cartActionStart(state) {
      state.isFetching = true;
    },
    cartActionSuccess(state) {
      state.isFetching = false;
    },
    cartActionFailure(state, action) {
      state.isFetching = false;
      state.failure = action.payload;
    },
    setCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export const { cartActionStart, cartActionSuccess, cartActionFailure, setCart } = cartSlice.actions;

const addToCart = (productID, cart, uid, product) => {
  return (dispatch) => {
    dispatch(cartActionStart());
    let foundProduct = cart.find((x) => x.id === productID);

    if (!foundProduct) {
      return dispatch(addNewProductToCart(product, uid, cart));
    } else {
      return dispatch(updateQuantity(uid, cart, productID));
    }
  };
};

const addNewProductToCart = (product, uid, cart) => {
  const list = [...cart];
  list.push({ ...product, quantity: 1 });

  return (dispatch) => {
    return firestore
      .collection(COLLECTIONS.CARTS)
      .doc(uid)
      .set({ cart: list })
      .then(() => dispatch(cartActionSuccess()));
  };
};

const updateQuantity = (uid, cart, productID) => {
  const list = [...cart];
  const index = list.findIndex((x) => x.id === productID);
  list[index] = { ...list[index], quantity: list[index].quantity + 1 };
  return (dispatch) => {
    return firestore
      .collection(COLLECTIONS.CARTS)
      .doc(uid)
      .update({ cart: list })
      .then(() => dispatch(cartActionSuccess()));
  };
};

export { addToCart };
export default cartSlice.reducer;
