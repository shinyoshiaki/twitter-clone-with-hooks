import React, { FunctionComponent } from "react";
import { Container, Segment, Input, Button } from "semantic-ui-react";
import { useObject } from "../../../hooks/object";

const FormMol: FunctionComponent<{
  inputs: string[];
  submit: (e: { inputs: string }) => void;
  submitLabel: string;
}> = ({ inputs, submit, submitLabel = "submit" }) => {
  const initialState: any = {};
  inputs.forEach(input => {
    initialState[input] = "";
  });
  const { state, setState } = useObject(initialState);

  return (
    <div>
      <Container>
        <Segment>
          <div style={{ textAlign: "center" }}>
            <div>
              {inputs.map(input => (
                <div key={input}>
                  <Input
                    onChange={event => {
                      setState({ [input]: event.target.value });
                    }}
                    placeholder={input}
                    value={state[input]}
                  />
                  <br />
                  <br />
                </div>
              ))}
              <Button
                onClick={() => {
                  submit(state);
                  setState(initialState);
                }}
              >
                {submitLabel}
              </Button>
            </div>
          </div>
        </Segment>
      </Container>
    </div>
  );
};

export default FormMol;
