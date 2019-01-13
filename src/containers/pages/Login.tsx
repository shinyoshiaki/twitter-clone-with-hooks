import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../modules/createStore";
import LoginOrg from "../organisms/login";
import { Middle } from "../../style/emotion";

const Login: FunctionComponent<{ history: any }> = ({ history }) => {
  return (
    <Middle>
      <LoginOrg history={history} />
    </Middle>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  Login
);
