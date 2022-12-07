import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { submit } from "../../redux/modules/todos";
import "./style.css";

const Form = () => {
  // Form
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const todosStore = useSelector((state) => state.todos.lists);
  const dispatch = useDispatch();

  const onChangeTitle = (event) => {
    const { value } = event.target;
    setTitle(value);
  };

  const onChangeDesc = (event) => {
    const { value } = event.target;
    setDesc(value);
  };

  const onSubmitTodoItem = () => {
    dispatch(submit(title, desc));
  };

  console.log(todosStore);

  // End of Form

  return (
    <div className="add-form">
      <div className="input-style">
        <label className="form-label">제목</label>
        <input className="add-input" type="title" onChange={onChangeTitle} />
        <label className="form-label">내용</label>
        <input className="add-input" type="desc" onChange={onChangeDesc} />
      </div>
      <button className="add-button" onClick={onSubmitTodoItem}>
        추가하기
      </button>
    </div>
  );
};

export default Form;
