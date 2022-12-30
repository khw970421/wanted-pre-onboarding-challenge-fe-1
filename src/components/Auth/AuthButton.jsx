import React from "react";
import styled from "styled-components";

const AuthButton = ({ text = "제출", onClick, disabled=false,style }) => {
  return (
    <Btn onClick={onClick} style={style} disabled={disabled}>
      {text}
    </Btn>
  );
};

const Btn = styled.button``;

export default AuthButton;
