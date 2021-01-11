import { combineReducers } from "@reduxjs/toolkit";
import navToggleReducer from './NavSlice/nav-slice'

const rootReducer = combineReducers({toggleNav:navToggleReducer})

export default rootReducer