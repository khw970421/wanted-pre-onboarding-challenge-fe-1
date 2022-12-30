import React from "react";
import styled from "styled-components";

const Button = ({ text, onClick, disabled = false, dataId, style }) => {
  return (
    <Btn onClick={onClick} style={style} disabled={disabled} data-id={dataId}>
      {text}
    </Btn>
  );
};

const Btn = styled.button``;

export default Button;
