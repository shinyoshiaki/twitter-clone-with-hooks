import * as React from "react";
import { storiesOf } from "@storybook/react";

import Component, { TimelineProps } from ".";
import { makeITweetMock } from "../../atoms/tweet/index.stories";

export const makeTimelinePropsMock = (
  payload: { [key in keyof TimelineProps]?: TimelineProps[key] } = {}
): TimelineProps => {
  return Object.assign(
    {},
    {
      timeline: new Array(3)
        .toString()
        .split(",")
        .map(() => Object.assign({}, makeITweetMock()))
    },
    payload
  );
};

storiesOf("molecules", module).add("timeline", () => (
  <Component timeline={makeTimelinePropsMock().timeline} />
));
