import List from "./Lists";

const ListContainer = ({ setTodoLists, todoLists }) => {
  // 함수를 사용하지 않고 변수로 선언하였음.
  const WorkingLists = todoLists
    .filter((todoList) => todoList.isDone === false)
    .map((todoList) => {
      return (
        <List
          setTodoLists={setTodoLists}
          todoLists={todoLists}
          todoList={todoList}
          key={todoList.id}
        ></List>
      );
    });

  const DoneLists = todoLists
    .filter((todoList) => todoList.isDone === true)
    .map((todoList) => {
      return (
        <List
          setTodoLists={setTodoLists}
          todoLists={todoLists}
          todoList={todoList}
          key={todoList.id}
        ></List>
      );
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

export default ListContainer;
