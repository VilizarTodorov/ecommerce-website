import { combineReducers } from "@reduxjs/toolkit";
import navToggleReducer from "./NavSlice/nav-slice";
import userReducer from "./userSlice/user-slice";
import appIsReadyReducer from "./AppSlice/app-slice";
import productReducer from "./ProductSlice/product-slice";
import cartReducer from "./CartSlice/cart-slice";

const rootReducer = combineReducers({
  toggleNav: navToggleReducer,
  user: userReducer,
  app: appIsReadyReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
