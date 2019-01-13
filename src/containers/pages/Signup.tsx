import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../modules/createStore";
import SignUpOrg from "../organisms/signup";
import { Middle } from "../../style/emotion";

const SignUp: FunctionComponent<{ history: any }> = ({ history }) => {
  return (
    <Middle>
      <SignUpOrg history={history} />
    </Middle>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  SignUp
);
