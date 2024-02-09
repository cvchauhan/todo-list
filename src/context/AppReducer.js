export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":      
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "EDIT_TODO":
      const updatedTodo = action.payload;                          
      const priority = action.priority;                    
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === updatedTodo.id) {          
          todo.priority = priority                    
          return updatedTodo;
        }
        return todo;
      });               
      return {
        ...state,
        todos: updatedTodos,
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.id !== action.payload
        ),
      };

    case "DELETE_COMPLETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((task) => !task.completed)
      };

    case "COMPLETE_TODO":     
      const Todos = state.todos.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      )
      return {
        ...state,
        todos: Todos,
      };
    case "COMPLETE_TODO_ALL":
      const AllTodos = state.todos.map((task) => ({ ...task, completed: true }))
      return {
        ...state,
        todos: AllTodos,
      };
    default:
      return state;
  }
};