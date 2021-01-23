import { combineReducers } from "@reduxjs/toolkit";
import navToggleReducer from "./NavSlice/nav-slice";
import userReducer from "./userSlice/user-slice";
import appIsReadyReducer from "./AppSlice/app-slice";
import productReducer from "./ProductSlice/product-slice";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  toggleNav: navToggleReducer,
  user: userReducer,
  app: appIsReadyReducer,
  product: productReducer,
});

export default rootReducer;
// export { rootReducer };

// const configStorage = {
//   key: "root",
//   storage,
//   whitelist: ["user"],
// };

// export default persistReducer(configStorage, rootReducer);
