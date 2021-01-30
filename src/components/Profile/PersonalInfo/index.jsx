import React from "react";
import SectionTitle from "../../SectionTitle";
import "./styles.scss";
import Details from "./Details";
import LoginDetails from "./LoginDetails";
import DeleteAccount from "./DeleteAccount";

const PersonalInfo = ({ user }) => {

  return (
    <div className="personal-info">
      <SectionTitle>my details</SectionTitle>
      <p className="capitalize">Feel free to edit any of your details below so your account is up to date.</p>

      <Details user={user}></Details>
      <LoginDetails user={user}></LoginDetails>
      <DeleteAccount user={user}></DeleteAccount>
    </div>
  );
};

export default PersonalInfo;
