import { createSlice } from "@reduxjs/toolkit";
import { isProductInWishList } from "../../helpers/functions";

const INITIAL_STATE = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { ...INITIAL_STATE },
  reducers: {
    add(state, action) {
      state.wishlist.push(action.payload);
    },
    remove(state, action) {
      state.wishlist = state.wishlist.filter((x) => x.id !== action.payload);
    },
  },
});

const { add, remove } = wishlistSlice.actions;

const toggleProductInWishList = (product, wishlist) => {
  return (dispatch) => {
    const isInWishlist = isProductInWishList(wishlist, product.id);
    if (isInWishlist) {
      dispatch(remove(product.id));
    } else {
      dispatch(add(product));
    }
  };
};

export { toggleProductInWishList };

export default wishlistSlice.reducer;
