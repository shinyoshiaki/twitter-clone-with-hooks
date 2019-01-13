import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../modules/createStore";
import { Header, Container, Button } from "semantic-ui-react";
import styled from "@emotion/styled";

const App: FunctionComponent<{ history: any }> = ({ history }) => {
  const Two = styled.div({ display: "flex", height: "100vh" });
  const Center = styled.div({
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  });
  return (
    <Two>
      <Center style={{ background: "#2394DF" }}>
        <p style={{ color: "white", fontSize: 20 }}>
          あなたの「好き」をフォローしましょう。
          <br />
          話題のトピックを追いかけましょう。
          <br />
          会話に参加しましょう。
        </p>
      </Center>
      <Center>
        <p>
          「いま」起きていることを見つけよう
          <br />
          <br />
          Twitterをはじめよう
          <br />
          <br />
          <Button
            onClick={() => {
              history.push("/signup");
            }}
          >
            アカウント作成
          </Button>
          <br />
          <br />
          <Button
            onClick={() => {
              history.push("/login");
            }}
          >
            ログイン
          </Button>
        </p>
      </Center>
    </Two>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  App
);
