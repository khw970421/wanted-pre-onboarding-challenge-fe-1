import React, { useEffect, useState, useRef } from "react";

import Button from "./../Common/Button";
import {
  getTodos,
  postTodos,
  putTodos,
  deleteTodos,
} from "../../utils/axios-api-fn";
import Input from "../Common/Input";

const TodosForm = () => {
  const [todos, setTodos] = useState([]);
  const titleRef = useRef("");
  const contentRef = useRef("");

  useEffect(() => {
    getTodosAPI();
  }, []);

  const getTodosAPI = async () => {
    const res = await getTodos();
    setTodos(res);
  };

  const clickPostBtn = async () => {
    const res = await postTodos({
      title: titleRef.current.value,
      content: contentRef.current.value,
    });
    setTodos([...todos, res]);
  };

  const clickPutBtn = async ({ target }) => {
    //TODO: PUT 컴포넌트 추가 및 적용 필요
    // const res = await putTodos({
    //   id: target.dataset.id,
    //   title: "putTitle",
    //   content: "putContent",
    // });
    // console.log(res);
  };

  const clickDeleteBtn = async ({ target }) => {
    const res = await deleteTodos(target.dataset.id);
    setTodos(todos.filter(({ id }) => id !== target.dataset.id));
  };

  return (
    <div>
      <Input type="text" placeholder="title을 추가하세요" refValue={titleRef} />
      <Input
        type="text"
        placeholder="content를 추가하세요"
        refValue={contentRef}
      />
      <Button text="추가하기" onClick={clickPostBtn} />
      {todos.map(({ title, content, id }) => (
        <div key={id}>
          <div>{title}</div>
          <div>{content}</div>
          <Button onClick={clickPutBtn} dataId={id} text={"수정하기"} />
          <Button onClick={clickDeleteBtn} dataId={id} text={"삭제하기"} />
        </div>
      ))}
    </div>
  );
};

export default TodosForm;
