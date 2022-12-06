// React를 사용한다. state hook을 사용하기 위해 { useState } 를 불러옴
import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import { useSelector, useDispatch } from "react-redux";
import { submit, changeDone, deleteList } from "./redux/modules/todos";

const App = () => {
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

  // List

  const deleteListItem = (id) => {
    dispatch(deleteList(id));
  };

  const onChangeDone = (id) => {
    dispatch(changeDone(id));
  };

  // End of List

  return (
    <div>
      <div>
        <label>제목</label>
        <input type="title" onChange={onChangeTitle} />
        <label>내용</label>
        <input type="desc" onChange={onChangeDesc} />
      </div>
      <button
        onClick={() => {
          onSubmitTodoItem();
        }}
      >
        추가하기
      </button>
      <div></div>
      <button
        onClick={() => {
          onChangeDone(0);
        }}
      >
        완료
      </button>
      <button
        onClick={() => {
          deleteListItem(0);
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default App;
