import { createSlice } from "@reduxjs/toolkit";
import { isProductInCart } from "../../helpers/functions";

const INITIAL_STATE = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: { ...INITIAL_STATE },
  reducers: {
    add(state, action) {
      state.cart.push(action.payload);
    },
    remove(state, action) {
      state.cart = state.cart.filter((x) => x.id !== action.payload);
    },
    increment(state, action) {
      state.cart[action.payload].quantity = state.cart[action.payload].quantity + 1;
    },
    setQuantity(state, action) {
      state.cart[action.payload.index].quantity = action.payload.quantity;
    },
  },
});

const { add, remove, increment, setQuantity } = cartSlice.actions;

const addToCart = (cart, product) => {
  return (dispatch) => {
    const index = isProductInCart(cart, product.id);
    if (index === -1) {
      const productToAdd = { ...product, quantity: 1 };
      dispatch(add(productToAdd));
    } else {
      dispatch(increment(index));
    }
  };
};

const removeFromCart = (productID) => {
  return (dispatch) => {
    dispatch(remove(productID));
  };
};

const setProductQuantity = (productID, quantity, cart) => {
  return (dispatch) => {
    const index = isProductInCart(cart, productID);
    dispatch(setQuantity({ index, quantity }));
  };
};

export { addToCart, removeFromCart, setProductQuantity };

export default cartSlice.reducer;
