import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteAccount, failure } from "../../../../Redux/userSlice/user-slice";
import GeneralButton from "../../../GeneralButton";
import Modal from "../../../Modal";
import Section from "../../../Section";
import SectionTitle from "../../../SectionTitle";

const DeleteAccount = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteAccount(user.uid))
      .then(() => console.log("deleted"))
      .catch((err) => dispatch(failure(err.message)));
  };

  return (
    <Section className="manage-account">
      <SectionTitle>manage account</SectionTitle>
      <GeneralButton onClick={() => setIsOpen(true)}>delete account</GeneralButton>
      <Modal isOpen={isOpen} hideModal={() => setIsOpen(false)}>
        <div>
          <h1>{user.firstName}, we're sorry to see you go</h1>
          <p>
            Are you sure you want to delete your adidas and adidas Runtastic account (if one exists)? You’ll no longer
            have access to the information in your account, like your order history, wish list, or athletic progress.
          </p>
        </div>
        <GeneralButton onClick={onClick}>delete account</GeneralButton>
        <GeneralButton onClick={() => setIsOpen(false)}>cancel</GeneralButton>
      </Modal>
    </Section>
  );
};

export default DeleteAccount;
