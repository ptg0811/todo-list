import React, { useState } from "react";

// setTodoLists 함수와 배열 todoLists 를 props로 받아옴
const AddForm = ({ setTodoLists, todoLists }) => {
  // 새로운 title과 desc를 받아 새로운 객체를 만들기 위해 state hook을 선언해줌
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // 추가하기를 클랙했을때 실행할 event handler
  const onSubmitList = () => {
    // title 과 desc가 아무것도 입력되지 않으면 실행되지 않도록 if 함수를 사용함.
    if (title !== "" && desc !== "") {
      // 새로운 객체를 생성해줌. isDone의 기본값은 false이다.
      // id를 Date.now()로 사용하여 중복값이 없도록하였음.
      const newTodoLists = {
        id: Date.now(),
        title: title,
        desc: desc,
        isDone: false,
      };
      // todoLists 배열을 복사해주고 newTodoLists를 추가해줌
      setTodoLists([...todoLists, newTodoLists]);
    } else {
      return null;
    }
  };

  return (
    <div className="add-form">
      <div className="input-style">
        <label className="form-label">제목</label>
        <input
          className="add-input"
          // 입력되는 값을 title로 넘겨줌
          value={title}
          // state함수를 이용하여 입력되는 값을 배열로 넘겨줌
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="form-label">내용</label>
        <input
          className="add-input"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <button className="add-button" onClick={onSubmitList}>
        추가하기
      </button>
    </div>
  );
};

export default AddForm;
