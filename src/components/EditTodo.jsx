import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

export const EditTodo = () => {
  let navigate = useNavigate();

  const { tasks, editTodo } = useContext(GlobalContext);

  const [selectedTodo, setSelectedTodo] = useState({
    id: null,
    title: "",
    description: "",
    priority: "low",
  });

  const { id } = useParams();

  useEffect(() => {
    const TodoId = id;
    const selectedTodo = tasks?.find(
      (currentTodoTraversal) => currentTodoTraversal.id === parseInt(TodoId)
    );
    setSelectedTodo(selectedTodo);
  }, [id, tasks]);

  const onSubmit = (e) => {
    e.preventDefault();
    editTodo(selectedTodo, selectedTodo.priority);
    navigate("/");
  };

  const handleOnChange = (userKey, newValue) =>
    setSelectedTodo({ ...selectedTodo, [userKey]: newValue });

  if (!selectedTodo || !selectedTodo.id) {
    return (
      <div>
        Invalid Todo ID.
        <Link to="/">
          {" "}
          <button className="">Go To Home page</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="todo-app">
        <form onSubmit={onSubmit}>
          <div className="">
            <label className="" htmlFor="title">
              Title
            </label>
            <input
              className="add-task"
              value={selectedTodo.title}
              onChange={(e) => handleOnChange("title", e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full  mb-5">
            <label className="" htmlFor="description">
              Description
            </label>
            <input
              className="add-task"
              value={selectedTodo.description}
              onChange={(e) => handleOnChange("description", e.target.value)}
              type="text"
              placeholder="Enter description"
            />
          </div>
          <div className="">
            <button className="">Update Todo</button>
            <Link to="/">
              {" "}
              <button className="">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
