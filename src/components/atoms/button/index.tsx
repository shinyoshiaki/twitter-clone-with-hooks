import * as React from "react";
import { css } from "emotion";
import styled from "@emotion/styled";

const myStyle = css({
  color: "green",
  fontSize: "3rem",
  fontWeight: "bold",
  ":hover": { color: "pink" }
});

const layout = css({
  textAlign: "center"
});

const Button = styled.button({
  color: "green",
  height: 50,
  ":hover": { color: "red" }
});

class App extends React.Component {
  public render() {
    return (
      <div className={layout}>
        <p className={myStyle}>Hello emotion 👩‍🎤</p>
        <Button>test</Button>
      </div>
    );
  }
}

export default App;
