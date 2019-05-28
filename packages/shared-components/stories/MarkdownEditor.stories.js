import React from "react";
import { storiesOf } from "@storybook/react";
import { Card } from "semantic-ui-react";
import "katex/dist/katex.min.css";
import "semantic-ui-css/semantic.min.css";

import MarkdownEditor from "../src/MarkdownEditor";
import notes from "../src/MarkdownEditor/notes.md";

class ControlledComponent extends React.Component {
  handleChange = (e, value) => {
    console.log(value);
    this.setState({ value });
  };

  state = { value: "" };

  render() {
    const { value } = this.state;
    return (
      <Card>
        <Card.Content>
          <MarkdownEditor value={value} onChange={this.handleChange} />
        </Card.Content>
      </Card>
    );
  }
}

storiesOf("MarkdownEditor", module)
  .add("default", () => <MarkdownEditor />, {
    notes: { markdown: notes }
  })
  .add("with Container", () => (
    <Card>
      <Card.Content>
        <MarkdownEditor />
      </Card.Content>
    </Card>
  ))
  .add("with defaultValue", () => (
    <Card>
      <Card.Content>
        <MarkdownEditor defaultValue="**This is a message**" />
      </Card.Content>
    </Card>
  ))
  .add("Controlled", () => <ControlledComponent />)
  .add("Loading", () => (
    <Card>
      <Card.Content>
        <MarkdownEditor loading defaultValue="**This is a message**" />
      </Card.Content>
    </Card>
  ));
