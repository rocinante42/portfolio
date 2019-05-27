import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Background = styled.div`
  background-color: blue;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Header = props => {
  const [count, setCount] = useState(2);

  return (
    <Background>
      <div onClick={() => setCount(count + 1)}>
        {props.texto ? props.texto : "This lives in shared components"} - Click
        Me {count}
      </div>
    </Background>
  );
};

Header.propTypes = {
  texto: PropTypes.string
};

export default Header;
