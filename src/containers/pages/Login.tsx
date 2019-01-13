import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../modules/createStore";
import LoginOrg from "../organisms/login";
import { Center } from "../../style/emotion";

const Login: FunctionComponent<{ history: any }> = ({ history }) => {
  return (
    <Center>
      <LoginOrg history={history} />
    </Center>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  Login
);
