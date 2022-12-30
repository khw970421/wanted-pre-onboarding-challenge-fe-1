import React from "react";
import styled from "styled-components";

const Input = ({ type, onChange, placeholder = "", refValue = "", style }) => {
  return (
    <Ipt
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      ref={refValue}
    />
  );
};

const Ipt = styled.input``;

export default Input;
