import React, { useEffect, useState, useRef } from "react";

import Button from "./../Common/Button";
import {
  getTodos,
  postTodos,
  putTodos,
  deleteTodos,
} from "../../utils/axios-api-fn";
import Input from "../Common/Input";
import { useNavigate, useParams } from "react-router";
import EditForm from "./EditForm";

const TodosForm = () => {
  const [todos, setTodos] = useState([]);
  const [editTodosIds, setEditTodosIds] = useState([]);
  const titleRef = useRef("");
  const contentRef = useRef("");
  const navigate = useNavigate();
  const params = useParams();

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
    setEditTodosIds([...editTodosIds, target.dataset.id]);
  };

  const clickDeleteBtn = async ({ target }) => {
    const res = await deleteTodos(target.dataset.id);
    setTodos(todos.filter(({ id }) => id !== target.dataset.id));
    setEditTodosIds(editTodosIds.filter((id) => id !== target.dataset.id));
  };

  const clickContent = ({ target }) => {
    navigate(`/todos/${target.dataset.id}`);
  };

  const clickEditSubmitBtn = async (editId, title, content) => {
    const res = await putTodos({
      id: editId,
      title,
      content,
    });
    setTodos(todos.map((task) => (task.id === editId ? res : task)));
    setEditTodosIds(editTodosIds.filter((id) => id !== editId));
  };

  const clickEditCancelBtn = (cancelId) => {
    setEditTodosIds(editTodosIds.filter((id) => id !== cancelId));
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
          <h3>Title : {title}</h3>
          {params.userId === id && <div>Content : {content}</div>}
          <Button onClick={clickContent} dataId={id} text={"content 확인"} />
          {editTodosIds.includes(id) ? (
            <EditForm
              clickEditSubmitBtn={(title, content) => {
                clickEditSubmitBtn(id, title, content);
              }}
              clickEditCancelBtn={() => {
                clickEditCancelBtn(id);
              }}
            />
          ) : (
            <div>
              <Button onClick={clickPutBtn} dataId={id} text={"수정하기"} />
            </div>
          )}
          <Button onClick={clickDeleteBtn} dataId={id} text={"삭제하기"} />
        </div>
      ))}
    </div>
  );
};

export default TodosForm;
