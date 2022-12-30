import React, { useRef } from "react";
import Input from "../Common/Input";
import Button from "../Common/Button";

const EditForm = ({ clickEditSubmitBtn, clickEditCancelBtn }) => {
  const titleRef = useRef("");
  const contentRef = useRef("");
  return (
    <div>
      <Input type="text" placeholder="title을 추가하세요" refValue={titleRef} />
      <Input
        type="text"
        placeholder="content를 추가하세요"
        refValue={contentRef}
      />
      <Button
        text="수정하기"
        onClick={() => {
          clickEditSubmitBtn(titleRef.current.value, contentRef.current.value);
        }}
      />
      <Button
        text="취소하기"
        onClick={() => {
          clickEditCancelBtn();
        }}
      />
    </div>
  );
};

export default EditForm;
