import React, { useState } from "react";
import Form from "../../../Form";
import FormButton from "../../../FormButton";
import FormInput from "../../../FormInput";
import FormTitle from "../../../FormTitle";
import GeneralButton from "../../../GeneralButton";
import Modal from "../../../Modal";
import Section from "../../../Section";
import SectionTitle from "../../../SectionTitle";

const LoginDetails = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState(user.email);
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Section className="login-details">
      <SectionTitle>login details</SectionTitle>
      <h3>email</h3>
      <p>{user.email}</p>
      <GeneralButton onClick={() => setIsOpen(true)}>edit</GeneralButton>
      <Modal isOpen={isOpen} hideModal={() => setIsOpen(false)}>
        <Form onSubmit={onSubmit}>
          <FormTitle>edit your email</FormTitle>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            label="email"
          ></FormInput>
          <FormButton>save changes</FormButton>
          <GeneralButton onClick={() => setIsOpen(false)}>cancel</GeneralButton>
        </Form>
      </Modal>
    </Section>
  );
};

export default LoginDetails;