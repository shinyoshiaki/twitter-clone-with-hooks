import React from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../modules/createStore";
import { Header, Container, Segment, Input, Button } from "semantic-ui-react";
import SignUp from "../organisms/signup";

const App = () => {
  return (
    <div>
      <Container>
        <Header>App</Header>
        <SignUp />
      </Container>
    </div>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  App
);
