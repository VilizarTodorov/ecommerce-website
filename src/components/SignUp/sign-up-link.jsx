import React from "react";
import LinkComponent from "../LinkComponent";
import { SIGN_UP } from "../../constants/routes";

const SignUpLink = () => {
  return <LinkComponent to={SIGN_UP} linkContent="sign up for free"></LinkComponent>;
};

export default SignUpLink;
