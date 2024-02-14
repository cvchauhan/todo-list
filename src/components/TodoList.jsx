import React, { useState, useContext, useEffect } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import TaskItem from "../components/TaskItem";
import { GlobalContext } from "../context/GlobalState";

const TodoList = () => {
  // State variables
  let navigate = useNavigate();
  const { tasks, completedAllTodo, deleteCompletedTask } =
    useContext(GlobalContext);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("low");
  const setInputValue = (e) => {
    setSearchInput(e.target.value);
  };
  useEffect(() => {
    let filterData = [...tasks];
    const filteredTasksData = filterData?.filter((ele) => {
      const item = ele?.title?.toLowerCase();
      return item.includes(searchInput.toLowerCase());
    });
    setFilteredTasks(filteredTasksData);
  }, [tasks, searchInput]);
  // Handle filter change
  const handleFilterChange = (filterType = "all") => {
    let filterData = [...tasks];
    let filteredTasksData = filterData?.filter((task) => {
      if (filterType === "all") {
        return true;
      } else if (filterType === "completed") {
        return task.completed;
      } else if (filterType === "uncompleted") {
        return !task.completed;
      } else if (
        filterType === "low" ||
        filterType === "medium" ||
        filterType === "high"
      ) {
        return task.priority === filterType;
      }
      return true;
    });
    setFilteredTasks(filteredTasksData);
  };
  const priorityChange = (value) => {
    setSelectedPriority(value);
  };
  const gotoAdd = () => {
    navigate("/add", { state: { priority: selectedPriority } })
  }
  return (
    <>
      <div className="todo-app">
        <h2>
          <img src="assets/todo.png" alt="todo" /> Todo List
        </h2>
        {/* <Link to="/add"> */}
          <button id="btn ml-40" onClick={gotoAdd}>Add</button>
        {/* </Link>         */}
        <div className="filters">
          <div className="dropdown">
            <button className={`dropbtn ${selectedPriority}`}>{selectedPriority}</button>
            <div className="dropdown-content">
              <li id="rem" onClick={()=> priorityChange("low")}>
                Low
              </li>
              <li id="rem" onClick={()=>priorityChange("medium")}>
                Medium
              </li>
              <li id="rem" onClick={() => priorityChange("high")}>
                High
              </li>
            </div>
          </div>
        </div>    
        <div className="row"></div>
        <div className="row">
          <input
            value={searchInput}
            onChange={setInputValue}
            type="text"
            placeholder="Enter Title"
          />
        </div>
        <div className="mid">
          <i className="fas fa-check-double"></i>
          <button id="complete-all" onClick={completedAllTodo}>
            Complete all tasks
          </button>{" "}
          &nbsp;
          <button id="complete-all-delete" onClick={deleteCompletedTask}>
            Delete Completed tasks
          </button>
        </div>
        <ul id="list">
          {filteredTasks?.map((task) => (
            <TaskItem key={task.id} task={task} priority={selectedPriority} />
          ))}
        </ul>
        <div className="filters">
          <div className="dropdown">
            <button className="dropbtn">Filter</button>
            <div className="dropdown-content">
              <li id="all" onClick={() => handleFilterChange("all")}>
                All
              </li>
              <li id="rem" onClick={() => handleFilterChange("uncompleted")}>
                Active
              </li>
              <li id="com" onClick={() => handleFilterChange("completed")}>
                Completed
              </li>
              <li id="rem" onClick={() => handleFilterChange("low")}>
                Low
              </li>
              <li id="rem" onClick={() => handleFilterChange("medium")}>
                Medium
              </li>
              <li id="rem" onClick={() => handleFilterChange("high")}>
                High
              </li>
            </div>
          </div>

          <div className="completed-task">
            <p>
              Completed:{" "}
              <span id="c-count">
                {tasks?.filter((task) => task.completed)?.length}
              </span>
            </p>
          </div>
          <div className="remaining-task">
            <p>
              <span id="total-tasks">
                Total Tasks: <span id="tasks-counter">{tasks?.length}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
