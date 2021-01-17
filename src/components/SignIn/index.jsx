import React, { useState } from "react";
import FormPageLayout from "../../layout/FormPageLayout";
import Form from "../Form";
import FormInput from "../FormInput";
import FormTitle from "../FormTitle";
import FormButton from "../FormButton";
import SignUpLink from "../SignUp/sign-up-link";

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
    <FormPageLayout>
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
    </FormPageLayout>
  );
};

export default SignIn;
