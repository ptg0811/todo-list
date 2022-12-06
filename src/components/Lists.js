const List = ({ setTodoLists, todoLists, todoList }) => {
  const deleteTodoList = (id) => {
    setTodoLists(todoLists.filter((todoList) => todoList.id !== id));
  };

  const onChangeDone = (id) => {
    setTodoLists(
      todoLists.map((todoList) => {
        if (todoList.id === id) {
          return { ...todoList, isDone: !todoList.isDone };
        }
        return todoList;
      })
    );
  };

  return (
    <div className="square-style">
      <h2 // props를 이용해 부모 conponent에서 title을 받아와서 이부분에 렌더링한다.
      >
        {todoList.title}
      </h2>
      <div>{todoList.desc}</div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          // 함수로 deleteTodoList를 바로 넣어주고 todoList의 id를 parameter로 넣어준다.
          onClick={() => {
            deleteTodoList(todoList.id);
          }}
        >
          삭제
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => {
            onChangeDone(todoList.id);
          }}
          // isDone 값에 따라 버튼의 글자가 바뀌도록 삼항연산자를 설정하고 렌더링해준다.
          // {조건문 ? true인 경우 : false인 경우}
        >
          {todoList.isDone === true ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default List;
