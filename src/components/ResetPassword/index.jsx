import React, { useState } from "react";
import Form from "../Form";
import FormTitle from "../FormTitle";
import FormInput from "../FormInput";
import FormButton from "../FormButton";
import FormPageLayout from "../../layout/FormPageLayout";
import { useSelector, useDispatch } from "react-redux";
import { failure, resetPassword } from "../../Redux/userSlice/user-slice";
import { useHistory } from "react-router-dom";
import { SIGN_IN } from "../../constants/routes";

const isFetchingSelector = (state) => state.user.authActionStarted;

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();

  const isFetching = useSelector(isFetchingSelector);
  const dispatch = useDispatch();

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(resetPassword(email))
      .then(() => history.push(SIGN_IN))
      .catch((err) => dispatch(failure(err.message)));
  };

  return (
    <FormPageLayout>
      <Form onSubmit={onSubmit}>
        <FormTitle>reset password</FormTitle>
        <FormInput
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={emailOnChange}
          label="email"
        ></FormInput>
        <FormButton isFetching={isFetching}>reset password</FormButton>
      </Form>
    </FormPageLayout>
  );
};

export default ResetPassword;
