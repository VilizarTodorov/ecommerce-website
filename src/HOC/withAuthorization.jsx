import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { HOME, SIGN_IN } from "../constants/routes";

const withAuthorization = (condition) => (Component) => {
  class WithAuthorization extends React.Component {

    componentDidMount() {
      if (!condition(this.props.user)) {
        if (
          this.props.location.pathname === "/sign-in" ||
          this.props.location.pathname === "/sign-up" ||
          this.props.location.pathname === "/admin"
        ) {
          this.props.history.push(HOME);
          return;
        }
        this.props.history.push(SIGN_IN, { from: this.props.location.pathname });
      }
    }

    componentDidUpdate(prevProps) {
      if (this.props.user !== prevProps.user) {
        if (!condition(this.props.user)) {
          if (this.props.location.pathname === "/sign-in" || this.props.location.pathname === "/sign-up") {
            this.props.history.push(HOME);
            return;
          }
          this.props.history.push(SIGN_IN, { from: this.props.location.pathname });
        }
      }
    }

    render() {
      return <Fragment>{condition(this.props.user) ? <Component {...this.props}></Component> : null}</Fragment>;
    }
  }

  return withRouter(connect(mapStateToProps, null)(WithAuthorization));
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default withAuthorization;