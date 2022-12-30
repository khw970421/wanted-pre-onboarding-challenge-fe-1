import React, { useRef } from "react";
import styled from "styled-components";

const Input = ({ type, onChange, placeholder = "", refValue = "", style }) => {
  const ref = useRef("");
  return (
    <Ipt
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      ref={refValue || ref}
    />
  );
};

const Ipt = styled.input``;

export default Input;
