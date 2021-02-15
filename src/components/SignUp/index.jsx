import React, { useEffect, useState } from "react";
import FormPageLayout from "../../layout/FormPageLayout";
import Form from "../Form";
import FormInput from "../FormInput";
import FormTitle from "../FormTitle";
import FormButton from "../FormButton";
import { clearError, failure, signUp } from "../../Redux/userSlice/user-slice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { HOME } from "../../constants/routes";
import { COLLECTIONS, firestore } from "../../Firebase/firebase";
import FormRadioButton from "../FormRadioButton";
import RadioButtonContainer from "../RadioButtonContainer";
import { isUserFetching, userErrorSelector } from "../../helpers/selectors";
import GeneralContainer from "../GeneralContainer";
import { withAuthorizationFunction } from "../../HOC";
import {
  isEmailInvalidFn,
  isNameInvalidFn,
  isPasswordInvalidFn,
  isRepeatPasswordInvalidFn,
} from "../../helpers/functions";
import { INITIAL } from "../../constants/strings";
import FormError from "../FormError";

const SingUp = () => {
  const error = useSelector(userErrorSelector);

  const [email, setEmail] = useState("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(INITIAL);

  const [password, setPassword] = useState("");
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(INITIAL);

  const [rePassword, setRePassword] = useState("");
  const [isRepeatPasswordInvalid, setIsRepeatPasswordInvalid] = useState(INITIAL);

  const [firstName, setFirstName] = useState("");
  const [isFirstNameInvalid, setIsFirstNameInvalid] = useState(INITIAL);

  const [lastName, setLastName] = useState("");
  const [isLastNameInvalid, setIsLastNameInvalid] = useState(INITIAL);

  const [gender, setGender] = useState("gender");

  const history = useHistory();
  const dispatch = useDispatch();
  const authActionStarted = useSelector(isUserFetching);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (isEmailInvalid || isPasswordInvalid || isRepeatPasswordInvalid || isFirstNameInvalid || isLastNameInvalid) {
      return;
    }

    dispatch(signUp(email, password))
      .then(({ user }) => {
        const DB_ENTRY = {
          email: email,
          uid: user.uid,
          firstName: firstName,
          lastName: lastName,
          roles: ["user"],
          gender,
        };

        firestore
          .collection(COLLECTIONS.USERS)
          .doc(user.uid)
          .set(DB_ENTRY)
          .then(() => history.push(HOME))
          .catch((err) => dispatch(failure(err.message)));

        firestore.collection(COLLECTIONS.ORDERS).doc(user.uid).set({ orders: {} });
      })
      .catch((err) => dispatch(failure(err.message)));
  };

  return (
    <GeneralContainer>
      <FormPageLayout>
        <Form onSubmit={onSubmit}>
          <FormTitle>sign up</FormTitle>
          <FormInput
            type="text"
            id="firsName"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            isInvalid={isFirstNameInvalid}
            onBlur={() => setIsFirstNameInvalid(isNameInvalidFn(firstName, "first name"))}
            label="first name"
          ></FormInput>

          <FormInput
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            isInvalid={isLastNameInvalid}
            onBlur={() => setIsLastNameInvalid(isNameInvalidFn(lastName, "last name"))}
            label="last name"
          ></FormInput>

          <RadioButtonContainer>
            <FormRadioButton
              id="male"
              name="gender"
              value="male"
              onChange={(event) => setGender(event.target.value)}
              label="male"
              currentValue={gender}
            ></FormRadioButton>
            <FormRadioButton
              id="female"
              name="gender"
              value="female"
              onChange={(event) => setGender(event.target.value)}
              label="female"
              currentValue={gender}
            ></FormRadioButton>
            <FormRadioButton
              id="other"
              name="gender"
              value="other"
              onChange={(event) => setGender(event.target.value)}
              label="other"
              currentValue={gender}
            ></FormRadioButton>
          </RadioButtonContainer>

          <FormInput
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            isInvalid={isEmailInvalid}
            onBlur={() => setIsEmailInvalid(isEmailInvalidFn(email))}
            label="email"
          ></FormInput>

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

          <FormButton isFetching={authActionStarted}>sign up</FormButton>
        </Form>
      </FormPageLayout>
    </GeneralContainer>
  );
};

const condition = (user) => user === null;

export default withAuthorizationFunction(condition)(SingUp);
