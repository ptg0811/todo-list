// React를 사요한다. state hook을 사용하기 위해 { useState } 를 불러옴
import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
// id 값의 혼선을 방지하기 위해 key값으로 uuid를 설정하였음.
// 자세한 내용은 본문의 uuid를 참고
import uuid from "react-uuid";

const App = () => {
  // todoLists 객체로 state hook을 지정해주었음
  const [todoLists, setTodoLists] = useState([
    {
      // 순서를 지정하기 위해 id값을 지정하였음
      id: 0,
      // id값만 가지고 있을 경우 지칭상의 혼선이 올수 있기 때문에 uuid를 지정하였음
      key: uuid(),
      title: "리액트 공부하기",
      desc: "리액트 기초를 공부해봅시다",
      // 진행중과 완료 상태를 표현하기 위해 isDone 값을 true, false로 지정하였음
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
    // '삭제' 버튼을 클릭했을때 실행되는 handler
    // filter를 통해서 받아오는 key값과 다른 key값을 가진 객체들만으로 새로운 배열을 구성해서 state로 넘겨주는 것.
    const newTodoList = todoLists.filter((todoList) => todoList.key !== key);
    setTodoLists(newTodoList);
  };

  const onChangeHandler = (key) => {
    // 완료 혹은 취소 버튼을 클릭했을때 실행되는 handler
    // 받아오는 key값과 같은 key값을 가진 객체를 배열에서 찾아 그 인덱스 값을 리턴하는 함수 findIndex를 선언
    const index = todoLists.findIndex((todoList) => todoList.key === key);

    // spread order로 todoLists 배열의 복사본을 생성하였음
    // ????    복사본은 왜 만들어야 할까? 원본은 어떻게 되는 걸까?
    // !!!!    기존에 있던 배열의 속성을 변경해주면 불변성문제 때문에 react에서 속성이 변한것을 감지하지 못하고 렌더링을 하지 않는다.
    // !!!!    그렇기 때문에 copyTodo를 생성해줘서 주소값을 변경해주어야 한다.
    const copyTodo = [...todoLists];

    // 이 부분이 해석이 안된다.
    // ????   ...copyTodo[index] 이것은 무슨 의미일까?
    // !!!!   ...copyTodo[index] 이것은 copyTodo[index] 내의 모든 속성을 복사해준다는 의미이다.
    // ????   spread syntax의 정확한 의미는 무엇일까?
    // !!!!   spread syntax는 배열 값을 복사해온다.
    if (copyTodo[index].isDone === true) {
      copyTodo[index] = { ...copyTodo[index], isDone: false };
    } else {
      copyTodo[index] = { ...copyTodo[index], isDone: true };
    }

    // setTodoLists 로 새로운 배열을 복사해준다.
    setTodoLists(copyTodo);
  };

  const workingLists = todoLists
    // 객체중에서 isDone 값이 false인 값을 골라 새로운 배열을 만들어줌
    .filter((todoList) => todoList.isDone === false)
    // 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만들어줌
    .map((todoList) => {
      return (
        // child component인 List를 불러주고 아래와 같이 값을 넣어준다.
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

  // 새로운 title과 desc를 받아 새로운 객체를 만들기 위해 state hook을 선언해줌
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // 추가하기를 클랙했을때 실행할 event handler
  const onSubmitHandler = () => {
    // title 과 desc가 아무것도 입력되지 않으면 실행되지 않도록 if 함수를 사용함.
    if (title !== "" && desc !== "") {
      // 새로운 객체를 생성해줌. isDone의 기본값은 false이다.
      const newTodoLists = {
        id: todoLists.length + 1,
        key: uuid(),
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
        <button className="add-button" onClick={onSubmitHandler}>
          추가하기
        </button>
      </div>
      <div className="list-container">
        <div>
          <h2 className="list-title">Working.. 🔥</h2>
          <div
            className="app-style" // 렌더링되도록 {workingLists} 변수를 받아옴
          >
            {workingLists}
          </div>
        </div>
        <div>
          <h2 className="list-title">Done..! 🎉</h2>
          <div className="app-style">{doneLists}</div>
        </div>
      </div>
    </div>
  );
};

// child component인 List를 설정
function List(props) {
  return (
    // 컴포넌트로 이러한 사각형 형태의 카드를 만들어준다.
    <div className="square-style">
      <h2 // props를 이용해 부모 conponent에서 title을 받아와서 이부분에 렌더링한다.
      >
        {props.todoList.title}
      </h2>
      <div>{props.todoList.desc}</div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          // props로 handleDelete값을 받아오면서 key를 함수로 넘겨준다.
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
          // isDone 값에 따라 버튼의 글자가 바뀌도록 삼항연산자를 설정하고 렌더링해준다.
          // {조건문 ? true인 경우 : false인 경우}
        >
          {props.todoList.isDone === true ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default App;
