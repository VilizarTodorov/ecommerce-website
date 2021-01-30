import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { failure, updateUserGenderAndName } from "../../../../Redux/userSlice/user-slice";

const Details = ({ user }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [gender, setGender] = useState(user.gender);

  const onSubmit = (event) => {
    event.preventDefault();
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
            label="first name"
          ></FormInput>

          <FormInput
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
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

          <FormButton>update details</FormButton>
        </Form>
        <GeneralButton onClick={() => setIsOpen(false)}>cancel</GeneralButton>
      </Modal>
    </Section>
  );
};

export default Details;
