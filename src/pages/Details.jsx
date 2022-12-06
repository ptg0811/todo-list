import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";

function Details() {
  const param = useParams();
  const todosStore = useSelector((state) => state.todos.lists);

  const list = todosStore.find((list) => list.id === parseInt(param.id));

  return (
    <div className="detailStyles">
      <div className="detailCard">
        <div>
          <div className="cardHeader">
            <div>
              <span>ID:{list.id}</span>
            </div>
            <div>
              {
                <div>
                  <Link to={`/`}>
                    <button className="prevButton">이전으로</button>
                  </Link>
                </div>
              }
            </div>
          </div>
          <div className="cardTitle">
            <h1>{list.title}</h1>
          </div>
          <div className="cardDesc">
            <span>{list.desc}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
