import React, { createContext, useReducer } from "react";
import { TASKS } from "../constant";
import appReducer from "./AppReducer";

const initialState = {
  todos: TASKS,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  function addTodo(todo, priority) {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
      priority,
    });
  }

  function editTodo(todo, priority) {
    dispatch({
      type: "EDIT_TODO",
      payload: todo,
      priority: priority,
    });
  }

  function removeTodo(id) {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  }
  function completedAllTodo(todo) {
    dispatch({
      type: "COMPLETE_TODO_ALL",
      payload: todo,
    });
  }
  function completedSingletodo(id) {
    dispatch({
      type: "COMPLETE_TODO",
      payload: id,
    });
  }
  function deleteCompletedTask(todo) {
    dispatch({
      type: "DELETE_COMPLETE_TODO",
      payload: todo,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.todos,
        addTodo,
        editTodo,
        removeTodo,
        completedAllTodo,
        completedSingletodo,
        deleteCompletedTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
