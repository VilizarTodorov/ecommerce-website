import { createSlice } from "@reduxjs/toolkit";
import { auth, COLLECTIONS, firestore } from "../../Firebase/firebase";

const INITIAL_STATE = {
  authActionStarted: false,
  uid: null,
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
      state.user = action.payload;
    },

    setUid: (state, action) => {
      state.uid = action.payload;
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
    return auth.signInWithEmailAndPassword(email, password).then((authUser) => {
      dispatch(authActionSuccess());
      return authUser;
    });
  };
};

const signUp = (email, password) => {
  return (dispatch) => {
    dispatch(authActionStart());
    return auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
      dispatch(authActionSuccess());
      return authUser;
    });
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
    return auth.sendPasswordResetEmail(email).then((authUser) => {
      dispatch(authActionSuccess());
      return authUser;
    });
  };
};

const changePassword = (password) => {
  return (dispatch) => {
    dispatch(authActionStart());
    return auth.currentUser.updatePassword(password).then(() => dispatch(authActionSuccess()));
  };
};

const setUserEntry = (uid) => {
  return (dispatch) => {
    dispatch(authActionStart());
    return firestore
      .collection(COLLECTIONS.USERS)
      .doc(uid)
      .get()
      .then((user) => dispatch(setUser(user.data())))
      .then(() => dispatch(authActionSuccess()));
  };
};

const updateUserGenderAndName = (uid, firstName, lastName, gender) => {
  return (dispatch) => {
    dispatch(authActionStart());
    return firestore
      .collection(COLLECTIONS.USERS)
      .doc(uid)
      .update({ firstName, lastName, gender })
      .then(() => dispatch(authActionSuccess()));
  };
};

export { signIn, signUp, signOut, resetPassword, changePassword, setUserEntry, updateUserGenderAndName };
export const { setUser, setUid, failure, resetUser } = userSlice.actions;
export default userSlice.reducer;
