import * as React from "react";
import { ITweet } from "../../../const/index";
import { Input, Button, Segment, TextArea, Form } from "semantic-ui-react";

export interface Props {
  name?: string;
  code?: string;
  submit: (text: string) => void;
}

export default class TweetFormMol extends React.Component<
  Props,
  { text: string }
> {
  constructor(props: Props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    const { submit, name, code } = this.props;
    return (
      <div>
        <Segment>
          <Form>
            <TextArea
              autoHeight
              placeholder="tweet"
              onChange={(_, data) => {
                const input = data.value as string;
                this.setState({ text: input });
              }}
              value={this.state.text}
            />
          </Form>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button>picture</Button>
            <Button
              onClick={() => {
                if (name && code) {
                  submit(this.state.text);
                }
                this.setState({ text: "" });
              }}
            >
              submit
            </Button>
          </div>
        </Segment>
      </div>
    );
  }
}
