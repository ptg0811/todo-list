// React를 사용한다. state hook을 사용하기 위해 { useState } 를 불러옴
import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import ListContainer from "./components/ListContainer";
import AddForm from "./components/AddForm";

const App = () => {
  const [todoLists, setTodoLists] = useState([
    // todoLists 객체로 state hook을 지정해주었음
    {
      // 초기 id값은 0과 1로 설정하였고, 새로 등록되는 요소는 Date.now()를 사용할 예정
      id: 0,
      title: "리액트 공부하기",
      desc: "리액트 기초를 공부해봅시다",
      // 진행중과 완료 상태를 표현하기 위해 isDone 값을 true, false로 지정하였음
      isDone: false,
    },
    {
      id: 1,
      title: "리액트 알아보기",
      desc: "리액트 기초를 알아봅시다",
      isDone: true,
    },
  ]);

  return (
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <AddForm
        /*???? 여기에는 key값이 필요하지 않은걸까 ????*/ setTodoLists={
          setTodoLists
        }
        todoLists={todoLists}
      />
      <div>
        <ListContainer
          /*???? 여기에는 key값이 필요하지 않은걸까 ????*/ setTodoLists={
            setTodoLists
          }
          todoLists={todoLists}
        />
      </div>
    </div>
  );
};

export default App;
