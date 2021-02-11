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
import { withAuthorizationFunction } from "../../HOC";
import { isUserFetching } from "../../helpers/selectors";
import GeneralContainer from "../GeneralContainer";
import { HOME } from "../../constants/routes";
import { INITIAL } from "../../constants/strings";
import { isEmailInvalidFn, isPasswordInvalidSignInFn } from "../../helpers/functions";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(INITIAL);

  const [password, setPassword] = useState("");
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(INITIAL);

  const location = useLocation();
  const history = useHistory();

  const dispatch = useDispatch();
  const isFetching = useSelector(isUserFetching);

  const getFromLocation = () => {
    const { from } = location.state || { from: HOME };
    return from;
  };

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (isEmailInvalid || isPasswordInvalid) {
      return;
    }

    const from = getFromLocation();
    try {
      await dispatch(signIn(email, password));
      history.replace(from);
    } catch (err) {
      dispatch(failure(err.message));
    }
  };

  return (
    <GeneralContainer>
      <FormPageLayout>
        <Form onSubmit={onSubmit}>
          <FormTitle>sign in</FormTitle>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={emailOnChange}
            isInvalid={isEmailInvalid}
            onBlur={() => setIsEmailInvalid(isEmailInvalidFn(email))}
            label="email"
          ></FormInput>

          <FormInput
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={passwordOnChange}
            isInvalid={isPasswordInvalid}
            onBlur={() => setIsPasswordInvalid(isPasswordInvalidSignInFn(password))}
            label="password"
          ></FormInput>

          <FormButton isFetching={isFetching}>sign in</FormButton>
        </Form>
        <ResetPasswordLink></ResetPasswordLink>
        <SignUpLink></SignUpLink>
      </FormPageLayout>
    </GeneralContainer>
  );
};

const condition = (user) => user === null;

export default withAuthorizationFunction(condition)(SignIn);
