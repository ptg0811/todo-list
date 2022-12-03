// child component인 List를 설정
const List = ({ handleDelete, handleDone, todoList }) => {
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
          // props로 handleDelete값을 받아오면서 id를 함수로 넘겨준다.
          onClick={() => {
            handleDelete(todoList.id);
          }}
        >
          삭제
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => {
            handleDone(todoList.id);
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
