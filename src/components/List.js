function List(props) {
  console.log(props);
  return (
    <div className="square-style">
      <h2>{props.list.title}</h2>
      <div>{props.list.desc}</div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => {
            props.handleDelete(props.list.id);
          }}
        >
          삭제
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => {
            props.handleWorkingDelete(props.list.id);
            props.handleDone(props.list.title, props.list.desc);
          }}
        >
          완료
        </button>
      </div>
    </div>
  );
}

export default List;
