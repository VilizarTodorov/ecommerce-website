import React from "react";
import { useIsSignedIn } from "../customHooks";

const withAuth = (Component) => (props) => !useIsSignedIn() && <Component {...props}></Component>;

export default withAuth;
