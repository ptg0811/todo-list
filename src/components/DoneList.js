function DoneList(props) {
  console.log(props);
  return (
    <div className="square-style">
      <h2>{props.donelist.title}</h2>
      <div>{props.donelist.desc}</div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => {
            props.handleDeleteDone(props.donelist.id);
          }}
        >
          삭제
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => {
            props.handleCancle(props.donelist.title, props.donelist.desc);
            props.handleCancleDoneDelete(props.donelist.id);
          }}
        >
          취소
        </button>
      </div>
    </div>
  );
}

export default DoneList;
