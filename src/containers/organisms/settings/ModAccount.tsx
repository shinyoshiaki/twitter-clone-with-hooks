import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import FormMol from "../../../components/molecules/form/index";
import { Container, Segment, Header } from "semantic-ui-react";
import { ReduxState } from "../../../modules/createStore";
import { updateMod, UserState } from "../../../modules/user";
import { Dispatch } from "redux";

interface Props extends UserState {
  dispatch: Dispatch<any>;
}

class ModAccoutOrg extends React.Component<Props> {
  submit = async (e: any) => {
    const { id, session, dispatch } = this.props;
    if (id && session) updateMod(id, e.name, e.pass, session, dispatch);
  };

  render() {
    return (
      <div>
        <Container>
          <Segment>
            <Header>Update</Header>
            <FormMol
              inputs={["name", "pass"]}
              submit={this.submit}
              submitLabel="change"
            />
          </Segment>
        </Container>
      </div>
    );
  }
}

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  ModAccoutOrg
);
