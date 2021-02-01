import { createSlice } from "@reduxjs/toolkit";
import { auth, COLLECTIONS, firestore } from "../../Firebase/firebase";

const INITIAL_STATE = {
  authActionStarted: false,
  wishListActionStarted: false,
  uid: null,
  user: null,
  wishList: [],
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: { ...INITIAL_STATE },
  reducers: {
    wishListActionStart(state) {
      state.wishListActionStarted = true;
    },

    wishListActionSuccess(state) {
      state.wishListActionStarted = false;
    },

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

    setWishList(state, action) {
      state.wishList = action.payload;
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

const setUserAndWishList = (uid) => {
  return (dispatch) => {
    dispatch(authActionStart());
    const getUser = firestore
      .collection(COLLECTIONS.USERS)
      .doc(uid)
      .get()
      .then((user) => dispatch(setUser(user.data())));

    const getWishList = firestore
      .collection(COLLECTIONS.WISHLISTS)
      .doc(uid)
      .get()
      .then((wishList) => dispatch(setWishList(wishList.data().wishlist)));

    return Promise.all([getUser, getWishList]).then(() => dispatch(authActionSuccess()));
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

const addToWishList = (uid, product, wishlist) => {
  const list = [...wishlist];
  list.push(product);

  return (dispatch) => {
    dispatch(wishListActionStart());
    firestore
      .collection(COLLECTIONS.WISHLISTS)
      .doc(uid)
      .update({ wishlist: list })
      .then(() => dispatch(wishListActionSuccess()))
      .catch((err) => dispatch(failure(err.message)));
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
  addToWishList,
};
export const {
  authActionStart,
  authActionSuccess,
  setUid,
  setUser,
  setWishList,
  failure,
  resetUser,
  wishListActionStart,
  wishListActionSuccess,
  addProductToWishList,
  removeProductFromWishList,
} = userSlice.actions;
export default userSlice.reducer;
