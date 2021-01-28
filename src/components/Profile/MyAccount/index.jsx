import React from "react";
import "./styles.scss";

const MyAccount = (props) => {
  return (
    <div className="my-account">
      <h1>
        <b>{`Hello ${props.firstName}`}</b>
      </h1>
    </div>
  );
};

export default MyAccount;
