import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

export const AddTodo = () => {
  let navigate = useNavigate();

  const { addTodo, tasks } = useContext(GlobalContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: tasks.length + 1,
      title,
      description,
      priority: "low",
    };
    addTodo(newTodo);
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <div className="todo-app">
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter Title"
              />
            </div>
            <div className="">
              <label className="" htmlFor="description">
                Description
              </label>
              <input
                className=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Enter description"
              />
            </div>
            <div className="">
              <button className="">Add Todo</button>
              <Link to="/">
                {" "}
                <button className="">Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
