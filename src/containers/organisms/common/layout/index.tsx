import * as React from "react";

import { Segment } from "semantic-ui-react";
import HeaderMol from "../../../../components/molecules/header";

export default class LayoutOrg extends React.Component<{ history: any }, {}> {
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
