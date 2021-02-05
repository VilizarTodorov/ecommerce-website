import { combineReducers } from "@reduxjs/toolkit";
import navToggleReducer from "./NavSlice/nav-slice";
import userReducer from "./userSlice/user-slice";
import appIsReadyReducer from "./AppSlice/app-slice";
import productReducer from "./ProductSlice/product-slice";
import cartReducer from "./CartSlice/cart-slice";
import wishlistReducer from "./WishlistSlice/wishlist-slice";

const rootReducer = combineReducers({
  toggleNav: navToggleReducer,
  user: userReducer,
  app: appIsReadyReducer,
  product: productReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
