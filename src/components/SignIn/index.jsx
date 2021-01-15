import React, { useState } from "react";
import FormInput from "../FormInput";
import FormButton from "../FromButton";
import "./styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} className="form sign-in-form">
      <FormInput type="email" id="email" name="email" value={email} onChange={emailOnChange}></FormInput>
      <FormInput type="password" id="password" name="password" value={password} onChange={passwordOnChange}></FormInput>
      <FormButton buttonContent="sign in"></FormButton>
    </form>
  );
};

export default SignIn;
