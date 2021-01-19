import React from "react";
import { WithAuthorization } from "../../HOC";

const Admin = (props) => {
  return (
    <div>
      <p>admin</p>
    </div>
  );
};

const condition = (user) => {
  if (user) {
    if (user.roles.admin) {
      return true;
    }
  }

  return false;
};

export default WithAuthorization(condition)(Admin);
