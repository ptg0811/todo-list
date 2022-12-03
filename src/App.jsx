// React를 사요한다. state hook을 사용하기 위해 { useState } 를 불러옴
import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import List from "./components/Lists";

// id 값의 혼선을 방지하기 위해 id값으로 uuid를 설정하였음.
// 자세한 내용은 본문의 uuid를 참고

const App = () => {
  const [todoLists, setTodoLists] = useState([
    // todoLists 객체로 state hook을 지정해주었음
    {
      // 순서를 지정하기 위해 id값을 지정하였음
      id: 0,
      // id값만 가지고 있을 경우 지칭상의 혼선이 올수 있기 때문에 uuid를 지정하였음
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

  const deleteTodoList = (id) => {
    // '삭제' 버튼을 클릭했을때 실행되는 handler
    // filter를 통해서 받아오는 id값과 다른 id값을 가진 객체들만으로 새로운 배열을 구성해서 state로 넘겨주는 것.
    const newTodoList = todoLists.filter((todoList) => todoList.id !== id);
    setTodoLists(newTodoList);
  };

  const onChangeDone = (id) => {
    const copyTodo = todoLists.map((todoList) => {
      if (todoList.id === id) {
        return { ...todoList, tisDone: !todoList.isDone };
      }
      return todoList;
    });

    // // 완료 혹은 취소 버튼을 클릭했을때 실행되는 handler
    // // 받아오는 id값과 같은 id값을 가진 객체를 배열에서 찾아 그 인덱스 값을 리턴하는 함수 findIndex를 선언
    // const index = todoLists.findIndex((todoList) => todoList.id === id);

    // // spread order로 todoLists 배열의 복사본을 생성하였음
    // // ????    복사본은 왜 만들어야 할까? 원본은 어떻게 되는 걸까?
    // // !!!!    기존에 있던 배열의 속성을 변경해주면 불변성문제 때문에 react에서 속성이 변한것을 감지하지 못하고 렌더링을 하지 않는다.
    // // !!!!    그렇기 때문에 copyTodo를 생성해줘서 주소값을 변경해주어야 한다.
    // const copyTodo = [...todoLists];

    // // 이 부분이 해석이 안된다.
    // // ????   ...copyTodo[index] 이것은 무슨 의미일까?
    // // !!!!   ...copyTodo[index] 이것은 copyTodo[index] 내의 모든 속성을 복사해준다는 의미이다.
    // // ????   spread syntax의 정확한 의미는 무엇일까?
    // // !!!!   spread syntax는 배열 값을 복사해온다.
    // if (copyTodo[index].isDone === true) {
    //   copyTodo[index] = { ...copyTodo[index], isDone: false };
    // } else {
    //   copyTodo[index] = { ...copyTodo[index], isDone: true };
    // }

    // setTodoLists 로 새로운 배열을 복사해준다.
    setTodoLists(copyTodo);
  };

  // 새로운 title과 desc를 받아 새로운 객체를 만들기 위해 state hook을 선언해줌
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // 추가하기를 클랙했을때 실행할 event handler
  const onSubmitList = () => {
    // title 과 desc가 아무것도 입력되지 않으면 실행되지 않도록 if 함수를 사용함.
    if (title !== "" && desc !== "") {
      // 새로운 객체를 생성해줌. isDone의 기본값은 false이다.
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
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
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
      <div>
        {
          <ListContainer
            todoLists={todoLists}
            deleteTodoList={deleteTodoList}
            onChangeDone={onChangeDone}
          />
        }
      </div>
    </div>
  );
};

const ListContainer = ({ todoLists, deleteTodoList, onChangeDone }) => {
  const WorkingLists = () => {
    todoLists
      .filter((todoList) => todoList.isDone === false)
      .map((todoList) => {
        return (
          <List
            handleDelete={deleteTodoList}
            handleDone={onChangeDone}
            todoList={todoList}
            key={todoList.id}
          ></List>
        );
      });
  };

  const DoneLists = () => {
    todoLists
      .filter((todoList) => todoList.isDone === true)
      .map((todoList) => {
        return (
          <List
            handleDelete={deleteTodoList}
            handleDone={onChangeDone}
            todoList={todoList}
            key={todoList.id}
          ></List>
        );
      });
  };

  return (
    <div className="list-container">
      <div>
        <h2 className="list-title">Working.. 🔥</h2>
        <div
          className="app-style" // 렌더링되도록 {workingLists} 변수를 받아옴
        >
          {WorkingLists()}
        </div>
      </div>
      <div>
        <h2 className="list-title">Done..! 🎉</h2>
        <div
          className="app-style" // 렌더링되도록 {workingLists} 변수를 받아옴
        >
          {DoneLists()}
        </div>
      </div>
    </div>
  );
};

export default App;
