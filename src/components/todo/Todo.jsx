import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  changeDone,
  deleteList,
} from "/Users/bagtaegeun/projects/todo-list/src/redux/modules/todos";
import "./style.css";

// child component인 List를 설정
// 함수 setTodoLists, 배열 todoLists, map으로 생성된 인자 todoList 를 props 로 받아옴
const Todo = ({ list }) => {
  // List

  const dispatch = useDispatch();

  const deleteListItem = (id) => {
    dispatch(deleteList(id));
  };

  const onChangeDone = (id) => {
    dispatch(changeDone(id));
  };

  // End of List

  return (
    // 컴포넌트로 이러한 사각형 형태의 카드를 만들어준다.
    <div className="square-style">
      <div>
        {
          <div key={list.id}>
            <Link to={`/${list.id}`}>
              <span>상세보기</span>
            </Link>
          </div>
        }
      </div>
      <h2 // props를 이용해 부모 conponent에서 title을 받아와서 이부분에 렌더링한다.
      >
        {list.title}
      </h2>
      <div>{list.desc}</div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => {
            deleteListItem(list.id);
          }}
        >
          삭제
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => {
            onChangeDone(list.id);
          }}
          // isDone 값에 따라 버튼의 글자가 바뀌도록 삼항연산자를 설정하고 렌더링해준다.
          // {조건문 ? true인 경우 : false인 경우}
        >
          {list.isDone === true ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Todo;

// // src/pages/Works.js

// import React from 'react';
// import { Link, useParams } from 'react-router-dom';

// function Works() {
//   return (
//     <div>
//       {data.map((work) => {
//         return (
//           <div key={work.id}>
//             <div>할일: {work.id}</div>
//             <Link to={`/works/${work.id}`}>
//               <span style={{ cursor: 'pointer' }}>➡️ Go to: {work.todo}</span>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Works;
