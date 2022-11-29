import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import List from "./components/List";
import DoneList from "./components/DoneList";

const App = () => {
  const [lists, setLists] = useState([
    { id: 1, title: "리액트 공부하기", desc: "리액트 기초를 공부해봅시다" },
  ]);

  const [donelists, setDoneLists] = useState([
    { id: 1, title: "리액트 알아보기", desc: "리액트 기초를 알아봅시다" },
  ]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addListHandler = () => {
    if (title !== "" && desc !== "") {
      const newLists = {
        id: lists.length + 1,
        title: title,
        desc: desc,
      };

      setLists([...lists, newLists]);
    } else {
      return null;
    }
  };

  const doneListHandler = (title, desc) => {
    const newDoneLists = {
      id: donelists.length + 1,
      title: title,
      desc: desc,
    };
    setDoneLists([...donelists, newDoneLists]);
  };

  const cancleDoneListHandler = (title, desc) => {
    const newCancleLists = {
      id: lists.length + 1,
      title: title,
      desc: desc,
    };

    setLists([...lists, newCancleLists]);
  };

  const deleteListHandler = (id) => {
    const newTodoList = lists.filter((list) => list.id !== id);
    setLists(newTodoList);
  };

  const deleteWorkingListHandler = (id) => {
    const newTodoList = lists.filter((list) => list.id !== id);
    setLists(newTodoList);
  };

  const deleteDoneListHandler = (id) => {
    const newList = donelists.filter((donelist) => donelist.id !== id);
    setDoneLists(newList);
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="form-label">내용</label>
          <input
            className="add-input"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className="add-button" onClick={addListHandler}>
          추가하기
        </button>
      </div>
      <div className="list-container">
        <h2 className="list-title">Working.. 🔥</h2>
        <div className="app-style">
          {lists.map((list) => {
            return (
              <List
                handleDelete={deleteListHandler}
                handleWorkingDelete={deleteWorkingListHandler}
                handleDone={doneListHandler}
                list={list}
                key={list.id}
              ></List>
            );
          })}
        </div>
        <h2 className="list-title">Done..! 🎉</h2>
        <div className="app-style">
          {donelists.map((donelist) => {
            return (
              <DoneList
                handleDeleteDone={deleteDoneListHandler}
                handleCancleDoneDelete={deleteDoneListHandler}
                handleCancle={cancleDoneListHandler}
                donelist={donelist}
                key={donelist.id}
              ></DoneList>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
