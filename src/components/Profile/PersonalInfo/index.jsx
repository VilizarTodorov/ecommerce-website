import React from "react";
import GeneralButton from "../../GeneralButton";
import SectionTitle from './SectionTitle'
import "./styles.scss";

const PersonalInfo = ({ user }) => {
  return (
    <div className="personal-info">
      <section className="my-details">
      <SectionTitle>my details</SectionTitle>
        <p className="capitalize">Feel free to edit any of your details below so your account is up to date.</p>
      </section>
      <section className="details">
       <SectionTitle>details</SectionTitle>
        <p>
          {user.firstName} {user.lastName}
        </p>
        <p>{user.gender}</p>
        <GeneralButton>edit</GeneralButton>
      </section>
      <section className="login-details">
       <SectionTitle>login details</SectionTitle>
        <h3>email</h3>
        <p>{user.email}</p>
        <GeneralButton>edit</GeneralButton>
        <h3>password</h3>
        <p>************</p>
        <GeneralButton>edit</GeneralButton>
      </section>
      <section className="manage-account">
        <h3>manage account</h3>
        <GeneralButton>delete account</GeneralButton>
      </section>
    </div>
  );
};

export default PersonalInfo;
