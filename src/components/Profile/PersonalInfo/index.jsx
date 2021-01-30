import React, { useState } from "react";
import GeneralButton from "../../GeneralButton";
import SectionTitle from "../../SectionTitle";
import Modal from "../../Modal";
import "./styles.scss";
import Details from "./Details";
import LoginDetails from "./LoginDetails";

const PersonalInfo = ({ user }) => {
  const [manageAccModalIsOpen, setManageAccModalIsOpen] = useState(false);

  return (
    <div className="personal-info">
      <SectionTitle>my details</SectionTitle>
      <p className="capitalize">Feel free to edit any of your details below so your account is up to date.</p>

      <Details user={user}></Details>
      <LoginDetails user={user}></LoginDetails>
      <section className="manage-account">
        <h3>manage account</h3>
        <GeneralButton onClick={() => setManageAccModalIsOpen(true)}>delete account</GeneralButton>
        <Modal isOpen={manageAccModalIsOpen} hideModal={() => setManageAccModalIsOpen(false)}></Modal>
      </section>
    </div>
  );
};

export default PersonalInfo;
