import { combineReducers } from "@reduxjs/toolkit";
import navToggleReducer from "./NavSlice/nav-slice";
import userReducer from "./userSlice/user-slice";
import appIsReadyReducer from "./AppSlice/app-slice";
import productReducer from "./ProductSlice/product-slice";
import cartReducer from "./CartSlice/cart-slice";
import wishlistReducer from "./WishlistSlice/wishlist-slice";
import orderByReducer from "./OrderBySlice";
import ordersReducer from "./OrdersSlice/order-slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export const rootReducer = combineReducers({
  toggleNav: navToggleReducer,
  user: userReducer,
  app: appIsReadyReducer,
  product: productReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  orderBy: orderByReducer,
  orders: ordersReducer,
});

const configStorage = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist"],
  version: 1,
};

export default persistReducer(configStorage, rootReducer);
