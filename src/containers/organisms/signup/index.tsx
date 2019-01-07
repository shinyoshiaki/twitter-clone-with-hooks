import React, { FunctionComponent } from "react";
import { connect } from "react-redux";

import { ReduxState } from "../../../modules/createStore";
import { Dispatch } from "redux";
import { signUpMod } from "../../../modules/user";
import FormMol from "../../../components/molecules/form";
import { Container, Segment, Header } from "semantic-ui-react";

const SignUpOrg: FunctionComponent<{ dispatch: Dispatch }> = ({ dispatch }) => {
  const signUp = (e: any) => {
    signUpMod(e.name, e.pass, dispatch);
  };

  return (
    <div>
      <Container>
        <Segment>
          <Header>Sign UP</Header>
          <FormMol
            inputs={["name", "pass"]}
            submit={signUp}
            submitLabel="sign up"
          />
        </Segment>
      </Container>
    </div>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  SignUpOrg
);
