import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INITIAL } from "../../../../constants/strings";
import { isEmailInvalidFn } from "../../../../helpers/functions";
import { userErrorSelector } from "../../../../helpers/selectors";
import { clearError, failure, updateLoginDetails } from "../../../../Redux/userSlice/user-slice";
import Form from "../../../Form";
import FormButton from "../../../FormButton";
import FormError from "../../../FormError";
import FormInput from "../../../FormInput";
import FormTitle from "../../../FormTitle";
import GeneralButton from "../../../GeneralButton";
import Modal from "../../../Modal";
import Section from "../../../Section";
import SectionTitle from "../../../SectionTitle";

const LoginDetails = ({ user }) => {
  const error = useSelector(userErrorSelector);

  const [isOpen, setIsOpen] = useState(false);

  const [email, setEmail] = useState(user.email);
  const [isEmailInvalid, setIsEmailInvalid] = useState(INITIAL);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (isEmailInvalid) {
      return;
    }

    dispatch(updateLoginDetails(email, user.uid))
      .then(() => setIsOpen(false))
      .catch((err) => dispatch(failure(err.message)));
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
            isInvalid={isEmailInvalid}
            onBlur={() => setIsEmailInvalid(isEmailInvalidFn(email))}
            label="email"
          ></FormInput>

          <FormError>{error}</FormError>

          <FormButton>save changes</FormButton>
        </Form>
        <GeneralButton onClick={() => setIsOpen(false)}>cancel</GeneralButton>
      </Modal>
    </Section>
  );
};

export default LoginDetails;
