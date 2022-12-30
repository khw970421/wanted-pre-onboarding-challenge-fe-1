import React from "react";
import styled from "styled-components";

const AuthInput = ({ type, onChange, placeholder = "", style }) => {
  return (
    <Input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
    />
  );
};

const Input = styled.input``;

export default AuthInput;
