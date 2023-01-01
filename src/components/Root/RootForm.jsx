import Button from "../Common/Button";
import React from "react";
import { useNavigate } from "react-router";

const RootForm = () => {
  const navigate = useNavigate();
  const clickAuth = () => {
    navigate("/auth");
  };
  const clickTodos = () => {
    navigate("/todos");
  };
  return (
    <div>
      <Button text="login/register" onClick={clickAuth} />
      <Button text="todos" onClick={clickTodos} />
    </div>
  );
};

export default RootForm;
