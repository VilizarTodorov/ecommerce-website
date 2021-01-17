import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../Firebase/firebase";

const INITIAL_STATE = {
  authActionStarted: false,
  authUser: null,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: { ...INITIAL_STATE },
  reducers: {
    authActionStart(state) {
      state.authActionStarted = true;
    },

    authActionSuccess(state) {
      state.authActionStarted = false;
    },

    setUser(state, action) {
      state.authActionStarted = false;
      state.authUser = action.payload.authUser;
      state.user = action.payload.user;
      state.error = null;
    },
    failure(state, action) {
      state.authActionStarted = false;
      state.authUser = null;
      state.user = null;
      state.error = action.payload;
    },
    resetUser(state) {
      state.authUser = null;
      state.user = null;
    },
  },
});

const { authActionStart, authActionSuccess } = userSlice.actions;

const signIn = (email, password) => {
  return (dispatch) => {
    dispatch(authActionStart());
    return auth.signInWithEmailAndPassword(email, password).then(() => dispatch(authActionSuccess()));
  };
};

const signUp = (email, password) => {
  return (dispatch) => {
    dispatch(authActionStart());
    return auth.createUserWithEmailAndPassword(email, password).then(() => dispatch(authActionSuccess()));
  };
};

const signOut = () => {
  return (dispatch) => {
    dispatch(authActionStart());
    return auth.signOut().then(() => dispatch(authActionSuccess()));
  };
};

const resetPassword = (email) => {
  return (dispatch) => {
    dispatch(authActionStart());
    return auth.sendPasswordResetEmail(email).then(() => dispatch(authActionSuccess()));
  };
};

export { signIn, signUp, signOut, resetPassword };
export const { failure, resetUser } = userSlice.actions;
export default userSlice.reducer;
