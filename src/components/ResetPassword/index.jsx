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
import { isUserFetching } from "../../helpers/selectors";
import GeneralContainer from "../GeneralContainer";
import { withAuthorizationFunction } from "../../HOC";
import { INITIAL } from "../../constants/strings";
import { isEmailInvalidFn } from "../../helpers/functions";

const ResetPassword = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isFetching = useSelector(isUserFetching);

  const [email, setEmail] = useState("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(INITIAL);

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (isEmailInvalid) {
      return;
    }

    dispatch(resetPassword(email))
      .then(() => history.push(SIGN_IN))
      .catch((err) => dispatch(failure(err.message)));
  };

  return (
    <GeneralContainer>
      <FormPageLayout>
        <Form onSubmit={onSubmit}>
          <FormTitle>reset password</FormTitle>
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
          <FormButton isFetching={isFetching}>reset password</FormButton>
        </Form>
      </FormPageLayout>
    </GeneralContainer>
  );
};

const condition = (user) => user === null;

export default withAuthorizationFunction(condition)(ResetPassword);
