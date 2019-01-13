import * as React from "react";

import HeaderMol from "../../../../components/molecules/header";
import { connect } from "react-redux";
import { ReduxState } from "../../../../modules/createStore";
import { UserState } from "../../../../modules/user";

interface Props extends UserState {
  history: any;
}

class LayoutOrg extends React.Component<Props, {}> {
  handleClick = (page: string) => {
    this.props.history.push(page);
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0,
          width: "100%"
        }}
      >
        <div style={{ width: "100%", position: "fixed", zIndex: 9999 }}>
          <HeaderMol
            items={[
              { Home: "home" },
              { Explore: "explore" },
              { Notifications: "notifications" },
              { Messages: "messages" }
            ]}
            onClick={this.handleClick}
            name={this.props.name}
          />
        </div>
        <div>
          <div style={{ flex: 1, paddingTop: 100 }}>
            {<div>{this.props.children}</div>}
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  LayoutOrg
);
