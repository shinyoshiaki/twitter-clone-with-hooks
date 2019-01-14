import React from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../modules/createStore";
import { Dispatch } from "redux";
import TimelineMol from "../../../components/molecules/timeline/index";
import { TweetState } from "../../../modules/tweet";

interface Props extends TweetState {
  dispatch: Dispatch<any>;
}

class TimelineOrg extends React.Component<Props> {
  render() {
    const { timeline, dispatch } = this.props;
    return (
      <div>
        <TimelineMol timeline={timeline} />
      </div>
    );
  }
}

export default connect((state: ReduxState) => Object.assign({}, state.tweet))(
  TimelineOrg
);
