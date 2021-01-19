import React, { useState } from "react";
import FormPageLayout from "../../layout/FormPageLayout";
import Form from "../Form";
import FormInput from "../FormInput";
import FormTitle from "../FormTitle";
import FormButton from "../FormButton";
import SignUpLink from "../SignUp/sign-up-link";
import { useDispatch, useSelector } from "react-redux";
import { failure, signIn } from "../../Redux/userSlice/user-slice";
import { useHistory, useLocation } from "react-router-dom";
import ResetPasswordLink from "../ResetPassword/reset-password-link";
import { WithAuthorization } from "../../HOC";

const isFetchingSelector = (state) => state.user.authActionStarted;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const history = useHistory();

  const dispatch = useDispatch();
  const isFetching = useSelector(isFetchingSelector);

  const getFromLocation = () => {
    const { from } = location.state || { from: "/" };
    return from;
  };

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const from = getFromLocation();
    dispatch(signIn(email, password))
      .then(() => history.replace(from))
      .catch((err) => dispatch(failure(err.message)));
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

        <FormButton isFetching={isFetching} buttonContent="sign in"></FormButton>
      </Form>
      <ResetPasswordLink></ResetPasswordLink>
      <SignUpLink></SignUpLink>
    </FormPageLayout>
  );
};

const condition = (user) => user == null;

export default WithAuthorization(condition)(SignIn);
