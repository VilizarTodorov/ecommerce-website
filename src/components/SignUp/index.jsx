import React, { useState } from "react";
import FormPageLayout from "../../layout/FormPageLayout";
import Form from "../Form";
import FormInput from "../FormInput";
import FormTitle from "../FormTitle";
import FormButton from "../FormButton";
import { failure, signUp } from "../../Redux/userSlice/user-slice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { HOME } from "../../constants/routes";
import { COLLECTIONS, firestore } from "../../Firebase/firebase";
import withAuthorization from "../../HOC/withAuthorization";
import FormRadioButton from "../FormRadioButton";
import RadioButtonContainer from "../RadioButtonContainer";
// import { WithAuthorization } from "../../HOC";

const isFetchingSelector = (state) => state.user.authActionStarted;

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("gender");

  const history = useHistory();
  const dispatch = useDispatch();
  const authActionStarted = useSelector(isFetchingSelector);

  const firstNameOnChange = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameOnChange = (event) => {
    setLastName(event.target.value);
  };

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const rePasswordOnChange = (event) => {
    setRePassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(signUp(email, password))
      .then(({ user }) => {
        const DB_ENTRY = {
          email: email,
          uid: user.uid,
          firstName: firstName,
          lastName: lastName,
          roles: ["user"],
          wishList: [],
          gender,
        };

        firestore
          .collection(COLLECTIONS.USERS)
          .doc(user.uid)
          .set(DB_ENTRY)
          .then(() => history.replace(HOME));
      })
      .catch((err) => dispatch(failure(err.message)));
  };

  return (
    <FormPageLayout>
      <Form onSubmit={onSubmit}>
        <FormTitle>sign up</FormTitle>
        <FormInput
          type="text"
          id="firsName"
          name="firstName"
          value={firstName}
          onChange={firstNameOnChange}
          label="first name"
        ></FormInput>

        <FormInput
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={lastNameOnChange}
          label="last name"
        ></FormInput>

        <RadioButtonContainer>
          <FormRadioButton
            id="male"
            name="gender"
            value="male"
            onChange={(event) => setGender(event.target.value)}
            label="male"
          ></FormRadioButton>
          <FormRadioButton
            id="female"
            name="gender"
            value="female"
            onChange={(event) => setGender(event.target.value)}
            label="female"
          ></FormRadioButton>
          <FormRadioButton
            id="other"
            name="gender"
            value="other"
            onChange={(event) => setGender(event.target.value)}
            label="other"
          ></FormRadioButton>
        </RadioButtonContainer>

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

        <FormInput
          type="password"
          id="rePassword"
          name="rePassword"
          value={rePassword}
          onChange={rePasswordOnChange}
          label="repeat password"
        ></FormInput>

        <FormButton isFetching={authActionStarted}>sign up</FormButton>
      </Form>
    </FormPageLayout>
  );
};

const condition = (user) => user == null;

export default withAuthorization(condition)(SingUp);
