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

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();

  const isFetching = useSelector(isUserFetching);
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
            label="email"
          ></FormInput>
          <FormButton isFetching={isFetching}>reset password</FormButton>
        </Form>
      </FormPageLayout>
    </GeneralContainer>
  );
};

export default ResetPassword;
