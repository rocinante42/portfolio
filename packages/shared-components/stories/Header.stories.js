import React from "react";
import { storiesOf } from "@storybook/react";
import "semantic-ui-css/semantic.min.css";

import Header from "../src/Header";

storiesOf("Header", module)
  .add("start", () => <Header />)
  .add("Incluyo texto", () => <Header texto="Este es texto alternativo" />);
