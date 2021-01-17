import { combineReducers } from "@reduxjs/toolkit";
import navToggleReducer from "./NavSlice/nav-slice";
import userReducer from "./userSlice/user-slice";

const rootReducer = combineReducers({ toggleNav: navToggleReducer, user: userReducer });

export default rootReducer;
