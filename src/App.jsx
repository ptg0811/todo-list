import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import uuid from "react-uuid";

const App = () => {
  const [todoLists, setTodoLists] = useState([
    {
      id: 0,
      key: uuid(),
      title: "리액트 공부하기",
      desc: "리액트 기초를 공부해봅시다",
      isDone: false,
    },
    {
      id: 1,
      key: uuid(),
      title: "리액트 알아보기",
      desc: "리액트 기초를 알아봅시다",
      isDone: true,
    },
  ]);

  const deleteTodoListHandler = (key) => {
    const newTodoList = todoLists.filter((todoList) => todoList.key !== key);
    setTodoLists(newTodoList);
  };

  const onChangeHandler = (key) => {
    const findIndex = todoLists.findIndex((todoList) => todoList.key === key);

    const copyTodo = [...todoLists];

    if (findIndex !== -1) {
      if (copyTodo[findIndex].isDone === true) {
        copyTodo[findIndex] = { ...copyTodo[findIndex], isDone: false };
      } else {
        copyTodo[findIndex] = { ...copyTodo[findIndex], isDone: true };
      }
    }

    setTodoLists(copyTodo);
  };

  const workingLists = todoLists
    .filter((todoList) => todoList.isDone === false)
    .map((todoList) => {
      return (
        <List
          handleDelete={deleteTodoListHandler}
          handleDone={onChangeHandler}
          todoList={todoList}
          key={todoList.key}
        ></List>
      );
    });

  const doneLists = todoLists
    .filter((todoList) => todoList.isDone === true)
    .map((todoList) => {
      return (
        <List
          handleDelete={deleteTodoListHandler}
          handleDone={onChangeHandler}
          todoList={todoList}
          key={todoList.key}
        ></List>
      );
    });

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const onSubmitHandler = () => {
    if (title !== "" && desc !== "") {
      const newTodoLists = {
        id: todoLists.length + 1,
        key: uuid(),
        title: title,
        desc: desc,
        isDone: false,
      };

      setTodoLists([...todoLists, newTodoLists]);
    } else {
      return null;
    }
  };

  return (
    <div class="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className="add-form">
        <div className="input-style">
          <label className="form-label">제목</label>
          <input
            className="add-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="form-label">내용</label>
          <input
            className="add-input"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className="add-button" onClick={onSubmitHandler}>
          추가하기
        </button>
      </div>
      <div className="list-container">
        <div>
          <h2 className="list-title">Working.. 🔥</h2>
          <div className="app-style">{workingLists}</div>
        </div>
        <div>
          <h2 className="list-title">Done..! 🎉</h2>
          <div className="app-style">{doneLists}</div>
        </div>
      </div>
    </div>
  );
};

function List(props) {
  return (
    <div className="square-style">
      <h2>{props.todoList.title}</h2>
      <div>{props.todoList.desc}</div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => {
            props.handleDelete(props.todoList.key);
          }}
        >
          삭제
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => {
            props.handleDone(props.todoList.key);
          }}
        >
          {props.todoList.isDone === true ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default App;
