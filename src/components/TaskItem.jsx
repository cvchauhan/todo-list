import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
const TaskItem = ({ task, priority }) => {
  const { completedSingletodo, editTodo, removeTodo } =
    useContext(GlobalContext);
  return (
    <li key={task.id}>
      <input
        type="checkbox"
        id={`task-${task.id}`}
        data-id={task.id}
        className="custom-checkbox"
        checked={task.completed}
        onChange={() => completedSingletodo(task.id)}
      />
      <label htmlFor={`task-${task.id}`}>
        {task.title} <small className="priority">{task.priority}</small>
      </label>
      <div>
        <Link to={`/edit/${task.id}`}>
          <img
            alt="edit"
            src="assets/edit.png"
            className="edit"
            data-id={task.id}
            onClick={() => editTodo(task, priority)}
          />
        </Link>
        <img
          alt="delete"
          src="assets/delete.png"
          className="delete"
          data-id={task.id}
          onClick={() => removeTodo(task.id)}
        />
      </div>
    </li>
  );
};

export default TaskItem;
