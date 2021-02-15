import { createSlice } from "@reduxjs/toolkit";
import { isProductInCart } from "../../helpers/functions";

const INITIAL_STATE = {
  cart: [],
  error: null,
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
    clear(state) {
      state.cart = [];
    },
    failure(state, action) {
      state.error = action.payload;
    },
  },
});

const { add, remove, increment, setQuantity, clear, failure } = cartSlice.actions;

const addToCart = (cart, product, size) => {
  return (dispatch) => {
    const index = isProductInCart(cart, product.id);
    if (index === -1) {
      const productToAdd = { ...product, quantity: 1, size };
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

const clearCart = () => {
  return (dispatch) => {
    return new Promise((res, rej) => {
      try {
        res(dispatch(clear()));
      } catch (error) {
        rej(error);
      }
    });
  };
};

export { addToCart, removeFromCart, setProductQuantity, clearCart, failure };

export default cartSlice.reducer;
