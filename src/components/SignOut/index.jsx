import React from "react";
import { auth } from "../../Firebase/firebase";
import "./styles.scss";

const SignOut = () => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <button className="sign-out-button" onClick={signOut}>
      sign out
    </button>
  );
};

export default SignOut;
