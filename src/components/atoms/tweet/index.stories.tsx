import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { storiesOf } from "@storybook/react";

import Component from ".";
import { action } from "@storybook/addon-actions";
import { ITweet } from "../../../const/index";

export const makeITweetMock = (
  payload: { [key in keyof ITweet]?: ITweet[key] } = {}
): ITweet => {
  return Object.assign(
    {},
    {
      number: 0,
      name: "this is mock string",
      code: "this is mock string",
      time: "this is mock string",
      text: "this is mock string"
    },
    payload
  );
};

storiesOf("atoms", module).add("tweet", () => (
  <Component
    tweet={{
      name: "name",
      text: "text",
      time: "time",
      code: "code",
      number: 0
    }}
  />
));
