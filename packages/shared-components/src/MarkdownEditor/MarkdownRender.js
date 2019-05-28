/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import * as ReactMarkdown from "react-markdown";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const RemarkMathPlugin = require("remark-math");

export const MarkdownRender = props => {
  const newProps = {
    ...props,
    plugins: [RemarkMathPlugin],
    renderers: {
      // eslint-disable-next-line react/destructuring-assignment
      // eslint-disable-next-line react/prop-types
      ...props.renderers,
      math: ({ value }) => <BlockMath>{value}</BlockMath>,
      inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>
    }
  };
  return (
    <div style={{ padding: "0.5rem" }} className="custommarkdown" {...props}>
      <ReactMarkdown escapeHtml={false} {...newProps} />
    </div>
  );
};

export default MarkdownRender;
