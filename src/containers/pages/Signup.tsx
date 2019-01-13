import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../modules/createStore";
import SignUpOrg from "../organisms/signup";
import { Center } from "../../style/emotion";

const SignUp: FunctionComponent<{ history: any }> = ({ history }) => {
  return (
    <Center>
      <SignUpOrg history={history} />
    </Center>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  SignUp
);
