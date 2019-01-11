import { css } from "emotion"; // css モジュールをインポート
import * as React from "react";

const myStyle = css({
  color: "green",
  fontSize: "3rem",
  fontWeight: "bold",
  ":hover": { color: "red" }
});

const layout = css({
  textAlign: "center"
});

class App extends React.Component {
  public render() {
    return (
      <div  className={layout}>
        <p className={myStyle}>Hello emotion 👩‍🎤</p>
      </div>
    );
  }
}

export default App;
