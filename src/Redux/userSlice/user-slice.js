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

    setUid(state, action) {
      state.uid = action.payload;
    },

    setUser(state, action) {
      state.user = action.payload;
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

const signIn = (email, password) => {
  return async (dispatch) => {
    dispatch(authActionStart());
    const user = await auth.signInWithEmailAndPassword(email, password);
    return dispatch(setUserAndWishList(user.user.uid));
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

const setUserAndWishList = (uid) => {
  return (dispatch) => {
    dispatch(authActionStart());
    const getUser = firestore
      .collection(COLLECTIONS.USERS)
      .doc(uid)
      .get()
      .then((user) => dispatch(setUser(user.data())));

    return Promise.all([getUser]).then(() => dispatch(authActionSuccess()));
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

const updateLoginDetails = (email, uid) => {
  return (dispatch) => {
    dispatch(authActionStart());
    const changeEmail = auth.currentUser.updateEmail(email);
    const updateDbEntry = firestore.collection(COLLECTIONS.USERS).doc(uid).update({ email });
    return Promise.all([changeEmail, updateDbEntry]).then(() => dispatch(authActionSuccess()));
  };
};

const deleteAccount = (uid) => {
  return (dispatch) => {
    dispatch(authActionStart());
    const deleteDbEntry = firestore.collection(COLLECTIONS.USERS).doc(uid).delete();
    const deleteUser = auth.currentUser.delete();

    return Promise.all([deleteDbEntry, deleteUser]).then(() => dispatch(authActionSuccess()));
  };
};

export {
  signIn,
  signUp,
  signOut,
  resetPassword,
  changePassword,
  setUserAndWishList,
  updateUserGenderAndName,
  updateLoginDetails,
  deleteAccount,
};
export const { authActionStart, authActionSuccess, setUid, setUser, failure, resetUser } = userSlice.actions;
export default userSlice.reducer;
