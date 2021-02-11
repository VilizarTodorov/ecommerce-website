import React, { Fragment, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import { HOME, SIGN_IN } from "../constants/routes";
import { userSelector } from "../helpers/selectors";

// const withAuthorization = (condition) => (Component) => {
//   class WithAuthorization extends React.Component {
//     componentDidMount() {
//       if (!condition(this.props.user)) {
//         if (
//           this.props.location.pathname === "/sign-in" ||
//           this.props.location.pathname === "/sign-up" ||
//           this.props.location.pathname === "/admin"
//         ) {
//           this.props.history.push(HOME);
//           return;
//         }
//         this.props.history.push(SIGN_IN, { from: this.props.location.pathname });
//       }
//     }

//     componentDidUpdate(prevProps) {
//       if (this.props.user !== prevProps.user) {
//         if (!condition(this.props.user)) {
//           debugger
//           if (this.props.location.pathname !== "/sign-in" && this.props.location.pathname !== "/sign-up") {
//             // this.props.history.push(HOME);
//             this.props.history.push(SIGN_IN, { from: this.props.location.pathname });
//           }
//           // debugger;
//         }
//       }
//     }

//     render() {
//       return <Fragment>{condition(this.props.user) ? <Component></Component> : null}</Fragment>;
//     }
//   }

//   return withRouter(connect(mapStateToProps, null)(WithAuthorization));
// };

// const mapStateToProps = (state) => {
//   return {
//     user: state.user.user,
//   };
// };

// export default withAuthorization;

const withAuthorizationFunction = (condition) => (Component) => {
  const WithAuthorizationFunction = () => {
    const user = useSelector(userSelector);
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
      if (!condition(user)) {
        if (location.pathname === "/sign-in" || location.pathname === "/sign-up" || location.pathname === "/admin") {
          history.push(HOME);
          return;
        }
        history.push(SIGN_IN, { from: location.pathname });
        return;
      }
    }, [user]);

    return <Fragment>{condition(user) ? <Component></Component> : null}</Fragment>;
  };

  return WithAuthorizationFunction;
};

export default withAuthorizationFunction;
