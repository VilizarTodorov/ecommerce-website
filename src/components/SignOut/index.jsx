import React from "react";
import { auth } from "../../Firebase/firebase";

const SignOut = () => {
  const signOut = () => {
    auth.signOut();
  };

  return <button onClick={signOut}>sign out</button>;
};

export default SignOut;
