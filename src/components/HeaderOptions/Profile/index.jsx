import React from "react";
import { Link } from "react-router-dom";
import { PROFILE } from "../../../constants/routes";
import "./styles.scss";

const Profile = () => {
  return (
    <Link to={PROFILE} className="option-profile">
      <i className="far fa-user-circle fa-lg"></i>
    </Link>
  );
};

export default Profile;
