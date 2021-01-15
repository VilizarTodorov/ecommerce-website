import React, { useState } from "react";
import Form from "../Form";
import FormTitle from "../FormTitle";
import FormInput from "../FormInput";
import FormButton from "../FormButton";
import FormPageLayout from "../../layout/FormPageLayout";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <FormPageLayout>
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
    </FormPageLayout>
  );
};

export default ResetPassword;
