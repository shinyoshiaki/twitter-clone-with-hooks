import React, { FunctionComponent } from "react";
import { Header, Container, Segment, Input, Button } from "semantic-ui-react";
import { useObject } from "../../../hooks/object";

const initialState = { name: "", pass: "" };

const SignUpDes: FunctionComponent<{
  signUp: (e: { name: string; pass: string }) => void;
}> = ({ signUp }) => {
  const { state, setState } = useObject(initialState);

  return (
    <div>
      <Container>
        <Segment>
          <Header>create</Header>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <Input
                onChange={event => {
                  setState({ name: event.target.value });
                }}
                placeholder="name"
                value={state.name}
              />
              <br />
              <Input
                onChange={event => {
                  setState({ pass: event.target.value });
                }}
                placeholder="pass"
                value={state.pass}
              />
              <br />
              <Button
                onClick={() => {
                  signUp({ name: state.name, pass: state.pass });
                  setState(initialState);
                }}
              >
                sign up
              </Button>
            </div>
          </div>
        </Segment>
      </Container>
    </div>
  );
};

export default SignUpDes;
