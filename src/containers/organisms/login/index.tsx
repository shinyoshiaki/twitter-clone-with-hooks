import React, { FunctionComponent } from "react";
import { connect } from "react-redux";

import { ReduxState } from "../../../modules/createStore";
import { Dispatch } from "redux";
import { loginMod } from "../../../modules/user";
import FormMol from "../../../components/molecules/form";
import { Container, Segment, Header } from "semantic-ui-react";

const LoginOrg: FunctionComponent<{ dispatch: Dispatch }> = ({ dispatch }) => {
  const submit = (e: any) => {
    loginMod(e.name, e.pass, dispatch);
  };

  return (
    <div>
      <Container>
        <Segment>
          <Header>Login</Header>
          <FormMol
            inputs={["name", "pass"]}
            submit={submit}
            submitLabel="login"
          />
        </Segment>
      </Container>
    </div>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  LoginOrg
);
