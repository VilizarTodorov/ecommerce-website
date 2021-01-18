import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { HOME } from "../constants/routes";

const userSelector = (state) => state.user.user;

const useIsSignedIn = () => {
  const user = useSelector(userSelector);
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push(HOME);
    }
  }, [user]);
  return false;
};

export default useIsSignedIn;
