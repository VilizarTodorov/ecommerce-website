import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./config";

const COLLECTIONS = {
  USERS: "users",
  WISHLISTS: "wishLists",
  CARTS: "carts",
};
const firebase = app.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore, COLLECTIONS };
export default firebase;
