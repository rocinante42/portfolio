import React, { Component } from "react";
import PropTypes from "prop-types";
import TextareaAutosize from "react-autosize-textarea";
import styled from "@emotion/styled";
import MarkdownRender from "./MarkdownRender";

const Editor = styled(TextareaAutosize)`
  resize: none;
  outline: none;
  width: ${props => (props.width ? props.width : "100%")};
  padding: 0.6rem;
  border-width: 1px;
  border-color: #d1d1d1;
  border-style: ${props => props.borderstyle};
`;

export default class MarkdownEditor extends Component {
  static propTypes = {
    /** text, which is shown until the text is written */
    value: PropTypes.string,
    /** Width of component, if not provided will fit 100% of parent */
    width: PropTypes.string,
    /** Uncontrolled default text value for component */
    defaultValue: PropTypes.string,
    /** function of type: f(event, value) {} */
    onChange: PropTypes.func,
    /** onBlur event handler. It fires after the editor has received a blur event */
    handleBlur: PropTypes.func
  };

  static defaultProps = {
    value: null
  };

  state = {
    controlled: false,
    stateValue: "",
    markdown: false,
    borderStyle: "dashed"
  };

  componentDidMount() {
    const { defaultValue, value } = this.props;
    if (!value && defaultValue) {
      this.setState({
        stateValue: defaultValue,
        controlled: false,
        markdown: true
      });
    }
    if (value || value === "") {
      this.setState({
        controlled: true,
        markdown: value === "" ? false : true
      });
    }
  }

  handleChange = e => {
    const { value, onChange } = this.props;
    if ((value || value === "") && onChange) {
      onChange(e, e.target.value);
    } else {
      this.setState({ stateValue: e.target.value });
    }
  };

  handleRenderClick = () => {
    this.setState({
      markdown: false
    });
  };

  handleBlur = () => {
    const { handleBlur, value } = this.props;
    const { controlled, stateValue } = this.state;
    if ((controlled && value !== "") || (!controlled && stateValue !== "")) {
      this.setState(
        {
          markdown: true,
          editorFocused: false
        },
        () => {
          if (handleBlur) {
            handleBlur();
          }
        }
      );
    }
    this.setState({
      borderStyle: "dashed"
    });
  };

  render() {
    const { controlled, stateValue, markdown, borderStyle } = this.state;
    const { value } = this.props;
    if (markdown)
      return (
        <MarkdownRender
          onClick={this.handleRenderClick}
          source={controlled ? value : stateValue}
        />
      );
    return (
      <div
        onFocus={() => {
          this.setState({ borderStyle: "solid" });
        }}
        onBlur={this.handleBlur}
      >
        <Editor
          value={controlled ? value : stateValue}
          onChange={this.handleChange}
          borderstyle={borderStyle}
        />
      </div>
    );
  }
}
