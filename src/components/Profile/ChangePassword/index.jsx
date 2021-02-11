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
import { isUserFetching } from "../../../helpers/selectors";
import { INITIAL } from "../../../constants/strings";
import { isPasswordInvalidFn, isRepeatPasswordInvalidFn } from "../../../helpers/functions";

const ChangePassword = (props) => {
  const isFetching = useSelector(isUserFetching);
  const history = useHistory();
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(INITIAL);

  const [rePassword, setRePassword] = useState("");
  const [isRepeatPasswordInvalid, setIsRepeatPasswordInvalid] = useState(INITIAL);

  const onSubmit = (event) => {
    event.preventDefault();

    if (isPasswordInvalid || isRepeatPasswordInvalid) {
      return;
    }

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
          isInvalid={isPasswordInvalid}
          onBlur={() => setIsPasswordInvalid(isPasswordInvalidFn(password))}
          label="password"
        ></FormInput>

        <FormInput
          type="password"
          id="rePassword"
          name="rePassword"
          value={rePassword}
          onChange={(event) => setRePassword(event.target.value)}
          isInvalid={isRepeatPasswordInvalid}
          onBlur={() => setIsRepeatPasswordInvalid(isRepeatPasswordInvalidFn(password, rePassword))}
          label="repeat password"
        ></FormInput>

        <FormButton isFetching={isFetching}>change password</FormButton>
      </Form>
    </FormPageLayout>
  );
};

export default ChangePassword;
