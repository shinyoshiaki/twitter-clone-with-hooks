import * as React from "react";

import HeaderMol from "../../../../components/molecules/header";
import { connect } from "react-redux";
import { ReduxState } from "../../../../modules/createStore";
import { UserState } from "../../../../modules/user";
import ModalMol from "../../../../components/molecules/modal/index";
import TweetFormMol from "../../../../components/molecules/tweetForm/index";
import { ITweet } from "../../../../const/index";
import { postTweet } from "../../../../modules/tweet";
import { Dispatch } from "redux";

interface Props extends UserState {
  history: any;
  dispatch: Dispatch;
}

class LayoutOrg extends React.Component<Props, {}> {
  handleClick = (page: string) => {
    this.props.history.push(page);
  };

  handleTweet = async (text: string) => {
    const { id, session, dispatch } = this.props;
    if (id && session) {
      const code = id;
      await postTweet({ code, session, text }, dispatch).catch(console.log);
    }
  };

  render() {
    const { name, id } = this.props;
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
            handleAccout={() => {
              this.props.history.push("settings");
            }}
          >
            <ModalMol label="tweet">
              <TweetFormMol name={name} code={id} submit={this.handleTweet} />
            </ModalMol>
          </HeaderMol>
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
