import {
  TodoCounter,
  TodoSearch,
  TodoList,
  CreateTodoButton,
} from "./components";

import "../dist/index.css";

function TodoApp() {
  return (
    <div className="w-full h-screen bg-red-800 bg-opacity-20">
      <TodoCounter />
      <TodoSearch />
      <TodoList />
      <CreateTodoButton />
    </div>
  );
}

export default TodoApp;
