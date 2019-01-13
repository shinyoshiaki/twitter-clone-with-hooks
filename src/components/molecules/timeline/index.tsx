import * as React from "react";
import { Center } from "../../../style/emotion";
import { ITweet } from "../../../const/index";
import TweetAtoms from "../../atoms/tweet/index";

export interface TimelineProps {
  timeline: ITweet[];
}

export default class TimelineMol extends React.Component<TimelineProps, {}> {
  render() {
    const { timeline } = this.props;
    return (
      <div style={{ width: "100%" }}>
        <Center>
          {timeline.map(tweet => (
            <div style={{ width: "50%" }}>
              <TweetAtoms tweet={tweet} />
            </div>
          ))}
        </Center>
      </div>
    );
  }
}
