import React from "react";
import { useDispatch } from "react-redux";
import { signOut, failure } from "../../Redux/userSlice/user-slice";
import "./styles.scss";

const SignOut = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(signOut()).catch((err) => dispatch(failure(err.message)));
  };

  return (
    <button className="sign-out-button" onClick={onClick}>
      sign out
    </button>
  );
};

export default SignOut;
