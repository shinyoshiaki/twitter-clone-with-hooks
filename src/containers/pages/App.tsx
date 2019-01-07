import React from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../modules/createStore";
import { Header, Container, Segment, Input, Button } from "semantic-ui-react";
import SignUp from "../organisms/signup";
import LoginOrg from "../organisms/login";
import ModAccoutOrg from "../organisms/setting/modAccount";

const App = () => {
  return (
    <div>
      <Container>
        <Header>App</Header>
        <SignUp />
        <LoginOrg />
        <ModAccoutOrg />
      </Container>
    </div>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  App
);
