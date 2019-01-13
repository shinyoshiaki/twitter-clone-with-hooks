import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../modules/createStore";
import LayoutOrg from "../organisms/common/layout/index";

const Messages: FunctionComponent<{ history: any }> = ({ history }) => {
  return <LayoutOrg history={history}>Messages</LayoutOrg>;
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
    Messages
);
