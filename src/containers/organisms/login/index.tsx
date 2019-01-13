import React, { FunctionComponent } from "react";
import { connect } from "react-redux";

import { ReduxState } from "../../../modules/createStore";
import { Dispatch } from "redux";
import { loginMod } from "../../../modules/user";
import FormMol from "../../../components/molecules/form";
import { Container, Segment, Header } from "semantic-ui-react";

const LoginOrg: FunctionComponent<{ dispatch: Dispatch; history: any }> = ({
  dispatch,
  history
}) => {
  const submit = async (e: any) => {
    const res = await loginMod(e.name, e.pass, dispatch);
    if (res) {
      console.log("hisotry", typeof history);
      history.push("home");
    }
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
