// child component인 List를 설정
// 함수 setTodoLists, 배열 todoLists, map으로 생성된 인자 todoList 를 props 로 받아옴
const List = ({ setTodoLists, todoLists, todoList }) => {
  const deleteTodoList = (id) => {
    // '삭제' 버튼을 클릭했을때 실행되는 handler
    // filter를 통해서 받아오는 id값과 다른 id값을 가진 객체들만으로 새로운 배열을 구성해서 state로 넘겨주는 것.
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
    // 컴포넌트로 이러한 사각형 형태의 카드를 만들어준다.
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
