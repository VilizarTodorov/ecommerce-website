import React, { useState } from "react";
import FormPageLayout from "../../layout/FormPageLayout";
import Form from "../Form";
import FormInput from "../FormInput";
import FormTitle from "../FormTitle";
import FormButton from "../FromButton";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const rePasswordOnChange = (event) => {
    setRePassword(event.target.value);
  };

  return (
    <FormPageLayout>
      <Form>
        <FormTitle title="sign up"></FormTitle>
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

        <FormInput
          type="password"
          id="rePassword"
          name="rePassword"
          value={rePassword}
          onChange={rePasswordOnChange}
          label="repeat password"
        ></FormInput>

        <FormButton buttonContent="sign up"></FormButton>
      </Form>
    </FormPageLayout>
  );
};

export default SingUp;
