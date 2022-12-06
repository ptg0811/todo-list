import React from "react";
import { useSelector } from "react-redux";
import Todo from "../todo/Todo";
import "./style.css";

const List = () => {
  const todosStore = useSelector((state) => state.todos.lists);

  const WorkingLists = todosStore
    .filter((list) => list.isDone === false)
    .map((list) => {
      return <Todo todosStore={todosStore} list={list} key={list.id} />;
    });

  const DoneLists = todosStore
    .filter((list) => list.isDone === true)
    .map((list) => {
      return <Todo todosStore={todosStore} list={list} key={list.id} />;
    });

  return (
    <div className="list-container">
      <div>
        <h2 className="list-title">Working.. 🔥</h2>
        <div
          className="app-style" // 렌더링되도록 {workingLists} 변수를 받아옴
        >
          {WorkingLists}
        </div>
      </div>
      <div>
        <h2 className="list-title">Done..! 🎉</h2>
        <div
          className="app-style" // 렌더링되도록 {workingLists} 변수를 받아옴
        >
          {DoneLists}
        </div>
      </div>
    </div>
  );
};

export default List;
