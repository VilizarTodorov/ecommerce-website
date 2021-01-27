import React, { useState } from "react";
import Form from "../../Form";
import FormTitle from "../../FormTitle";
import FormInput from "../../FormInput";
import FormButton from "../../FormButton";
import { useDispatch, useSelector } from "react-redux";
import FormPageLayout from "../../../layout/FormPageLayout";
import { changePassword, failure } from "../../../Redux/userSlice/user-slice";
import { useHistory } from "react-router-dom";
import { PROFILE } from "../../../constants/routes";

const isFetchingSelector = (state) => state.user.isFetching;

const ChangePassword = (props) => {
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const isFetching = useSelector(isFetchingSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(changePassword(password))
      .then(() => history.push(PROFILE))
      .catch((err) => dispatch(failure(err.message)));
  };

  return (
    <FormPageLayout>
      <Form onSubmit={onSubmit}>
        <FormTitle>change password</FormTitle>
        <FormInput
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label="password"
        ></FormInput>

        <FormInput
          type="password"
          id="rePassword"
          name="rePassword"
          value={rePassword}
          onChange={(event) => setRePassword(event.target.value)}
          label="repeat password"
        ></FormInput>

        <FormButton isFetching={isFetching}>change password</FormButton>
      </Form>
    </FormPageLayout>
  );
};

export default ChangePassword;
