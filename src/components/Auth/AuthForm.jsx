import { EMAIL, PASSWORD, SIGN_UP } from "../../utils/constants";
import {
  emailValidation,
  passwordValidation,
} from "../../utils/auth-validate-fn";

import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";
import React from "react";
import styled from "styled-components";
import { useState } from "react";

const AuthForm = () => {
  const [signState, setSignState] = useState(SIGN_UP);
  const [authValidProblem, setAuthValidProblem] = useState({
    email: true,
    password: true,
  });

  const changeEmail = ({ target }) => {
    const emailValid = emailValidation(target.value);
    setAuthValidProblem({ ...authValidProblem, email: !emailValid });
  };
  const changePassword = ({ target }) => {
    const passwordValid = passwordValidation(target.value);
    setAuthValidProblem({ ...authValidProblem, password: !passwordValid });
  };
  const changeSignState = () => setSignState(!signState);

  const click = () => {};

  return (
    <div>
      <Title>{signState ? "회원가입" : "로그인"}</Title>
      <SubTitle onClick={changeSignState}>
        {signState ? "로그인 하러가기" : "회원가입 하러가기"}
      </SubTitle>
      <AuthInput type="text" onChange={changeEmail} />
      <AuthInput type="password" onChange={changePassword} />
      <AuthButton
        onClick={click}
        disabled={authValidProblem.email || authValidProblem.password}
      />
    </div>
  );
};

const Title = styled.h3``;
const SubTitle = styled.h5``;

export default AuthForm;
