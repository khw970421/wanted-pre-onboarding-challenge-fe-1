import { EMAIL, PASSWORD, SIGN_IN, SIGN_UP } from "../../utils/constants";
import {
  emailValidation,
  passwordValidation,
} from "../../utils/auth-validate-fn";
import { postSignin, postSignup } from "./../../utils/axios-api-fn";

import AuthButton from "../Common/Button";
import AuthInput from "../Common/Input";
import React from "react";
import { saveLocalStorageToken } from "../../utils/local-storage-fn";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useState } from "react";

const AuthForm = () => {
  const [signState, setSignState] = useState(SIGN_UP);
  const [authValidProblem, setAuthValidProblem] = useState({
    email: false,
    password: false,
  });
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const changeEmail = ({ target }) => {
    const emailValid = emailValidation(target.value);
    setAuthValidProblem({ ...authValidProblem, email: !emailValid });
    setUserData({ ...userData, email: target.value });
  };
  const changePassword = ({ target }) => {
    const passwordValid = passwordValidation(target.value);
    setAuthValidProblem({ ...authValidProblem, password: !passwordValid });
    setUserData({ ...userData, password: target.value });
  };
  const changeSignState = () =>
    setSignState(signState === SIGN_UP ? SIGN_IN : SIGN_UP);

  const click = async () => {
    let apiReturn = undefined;
    if (signState === SIGN_UP) {
      apiReturn = await postSignup({
        email: userData.email,
        password: userData.password,
      });
    } else {
      apiReturn = await postSignin({
        email: userData.email,
        password: userData.password,
      });
    }
    if (apiReturn) {
      saveLocalStorageToken(apiReturn);
      navigate("/todos");
    }
  };

  return (
    <div>
      <Title>{signState === SIGN_UP ? "회원가입" : "로그인"}</Title>
      <SubTitle onClick={changeSignState}>
        {signState === SIGN_UP ? "로그인 하러가기" : "회원가입 하러가기"}
      </SubTitle>
      <AuthInput type="text" onChange={changeEmail} />
      <AuthInput type="password" onChange={changePassword} />
      <AuthButton
        onClick={click}
        disabled={authValidProblem.email || authValidProblem.password}
        text={signState === SIGN_UP ? "회원가입" : "로그인"}
      />
    </div>
  );
};

const Title = styled.h3``;
const SubTitle = styled.h5``;

export default AuthForm;
