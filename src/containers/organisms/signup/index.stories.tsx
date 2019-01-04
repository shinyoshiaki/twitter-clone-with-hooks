import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { storiesOf } from "@storybook/react";

import Component from "./template";
import { action } from "@storybook/addon-actions";

storiesOf("organisms", module).add("signup", () => (
  <Component signUp={action("story")} />
));
