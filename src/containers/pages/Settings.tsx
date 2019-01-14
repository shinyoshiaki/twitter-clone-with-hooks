import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../modules/createStore";
import ModAccount from "../organisms/settings/ModAccount";
import { Button } from "semantic-ui-react";
import { Middle } from "../../style/emotion";

const Settings: FunctionComponent<{ history: any }> = ({ history }) => {
  return (
    <div>
      <Button>back</Button>
      <Middle>
        <ModAccount />
      </Middle>
    </div>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  Settings
);
