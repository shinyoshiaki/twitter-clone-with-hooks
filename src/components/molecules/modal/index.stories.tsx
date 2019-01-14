import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { storiesOf } from "@storybook/react";

import Component from ".";
import TweetFormMol from "../tweetForm/index";
import { action } from "@storybook/addon-actions";

storiesOf("molecules", module).add("modal", () => (
  <Component label="tweet">something</Component>
));
