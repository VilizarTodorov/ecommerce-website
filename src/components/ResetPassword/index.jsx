import React, { useState } from "react";
import Form from "../Form";
import FormTitle from "../FormTitle";
import FormInput from "../FormInput";
import FormButton from "../FormButton";
import "./styles.scss";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="reset-password">
      <Form>
        <FormTitle title="reset password"></FormTitle>
        <FormInput
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={emailOnChange}
          label="email"
        ></FormInput>
        <FormButton buttonContent="reset password"></FormButton>
      </Form>
    </div>
  );
};

export default ResetPassword;
