import React, { useEffect, useState } from "react";
import Section from "../../../Section";
import SectionTitle from "../../../SectionTitle";
import GeneralButton from "../../../GeneralButton";
import Modal from "../../../Modal";
import Form from "../../../Form";
import FormTitle from "../../../FormTitle";
import FormInput from "../../../FormInput";
import FormButton from "../../../FormButton";
import FormRadioButton from "../../../FormRadioButton";
import RadioButtonContainer from "../../../RadioButtonContainer";
import { useDispatch, useSelector } from "react-redux";
import { clearError, failure, updateUserGenderAndName } from "../../../../Redux/userSlice/user-slice";
import { INITIAL } from "../../../../constants/strings";
import { isNameInvalidFn } from "../../../../helpers/functions";
import FormError from "../../../FormError";
import { userErrorSelector } from "../../../../helpers/selectors";

const Details = ({ user }) => {
  const dispatch = useDispatch();
  const error = useSelector(userErrorSelector);

  const [isOpen, setIsOpen] = useState(false);

  const [firstName, setFirstName] = useState(user.firstName);
  const [isFirstNameInvalid, setIsFirstNameInvalid] = useState(INITIAL);

  const [lastName, setLastName] = useState(user.lastName);
  const [isLastNameInvalid, setIsLastNameInvalid] = useState(INITIAL);

  const [gender, setGender] = useState(user.gender);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (isFirstNameInvalid || isLastNameInvalid) {
      return;
    }

    dispatch(updateUserGenderAndName(user.uid, firstName, lastName, gender))
      .then(() => setIsOpen(false))
      .catch((err) => dispatch(failure(err.message)));
  };

  return (
    <Section className="details">
      <SectionTitle>details</SectionTitle>
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>{user.gender}</p>
      <GeneralButton onClick={() => setIsOpen(true)}>edit</GeneralButton>
      <Modal isOpen={isOpen} hideModal={() => setIsOpen(false)}>
        <Form onSubmit={onSubmit}>
          <FormTitle>edit your details</FormTitle>
          <FormInput
            type="text"
            id="firstName"
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
            label="first name"
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

          <FormError>{error}</FormError>

          <FormButton>update details</FormButton>
        </Form>
        <GeneralButton onClick={() => setIsOpen(false)}>cancel</GeneralButton>
      </Modal>
    </Section>
  );
};

export default Details;
