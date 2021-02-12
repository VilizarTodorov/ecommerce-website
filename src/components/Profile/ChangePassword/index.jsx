import React, { useEffect, useState } from "react";
import Form from "../../Form";
import FormTitle from "../../FormTitle";
import FormInput from "../../FormInput";
import FormButton from "../../FormButton";
import { useDispatch, useSelector } from "react-redux";
import FormPageLayout from "../../../layout/FormPageLayout";
import { changePassword, clearError, failure } from "../../../Redux/userSlice/user-slice";
import { useHistory } from "react-router-dom";
import { PROFILE } from "../../../constants/routes";
import { isUserFetching, userErrorSelector } from "../../../helpers/selectors";
import { INITIAL } from "../../../constants/strings";
import { isPasswordInvalidFn, isRepeatPasswordInvalidFn } from "../../../helpers/functions";
import FormError from "../../FormError";

const ChangePassword = (props) => {
  const isFetching = useSelector(isUserFetching);
  const error = useSelector(userErrorSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(INITIAL);

  const [rePassword, setRePassword] = useState("");
  const [isRepeatPasswordInvalid, setIsRepeatPasswordInvalid] = useState(INITIAL);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

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

        <FormError>{error}</FormError>

        <FormButton isFetching={isFetching}>change password</FormButton>
      </Form>
    </FormPageLayout>
  );
};

export default ChangePassword;
