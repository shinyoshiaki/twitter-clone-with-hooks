import * as React from "react";
import { Segment, Header, Button } from "semantic-ui-react";
import { ITweet } from "../../../const/index";

export default class TweetAtoms extends React.Component<{ tweet: ITweet }> {
  render() {
    const { name, code, time, text } = this.props.tweet;
    return (
      <div>
        <Segment>
          <div style={{ display: "flex" }}>
            <Header>{name}</Header>
            {"　"}
            {code} - {time}
          </div>
          <p>{text}</p>
          <div style={{ display: "flex" }}>
            <Button size="tiny">reply</Button>
            <Button size="tiny">retweet</Button>
            <Button size="tiny">favorite</Button>
          </div>
        </Segment>
      </div>
    );
  }
}
