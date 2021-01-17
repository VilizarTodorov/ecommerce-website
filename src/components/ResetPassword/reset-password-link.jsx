import React from "react";
import { RESET_PASSWORD } from "../../constants/routes";
import LinkComponent from "../LInkComponent";

const ResetPasswordLink = () => {
  return <LinkComponent to={RESET_PASSWORD} linkContent="forgot your password ?"></LinkComponent>;
};

export default ResetPasswordLink;
