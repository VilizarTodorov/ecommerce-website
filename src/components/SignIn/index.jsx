import React, { useState } from "react";
import Form from "../Form";
import FormInput from "../FormInput";
import FormTitle from "../FormTitle";
import FormButton from "../FromButton";
import SignUpLink from "../SignUp/sign-up-link";
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
    event.preventDefault();
  };

  return (
    <div className="sign-in">
      <Form onSubmit={onSubmit}>
        <FormTitle title="sign in"></FormTitle>
        <FormInput
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={emailOnChange}
          label="email"
        ></FormInput>

        <FormInput
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={passwordOnChange}
          label="password"
        ></FormInput>

        <FormButton buttonContent="sign in"></FormButton>
      </Form>
      <SignUpLink></SignUpLink>
    </div>
  );
};

export default SignIn;
