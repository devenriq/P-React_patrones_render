import {
  TodoCounter,
  TodoSearch,
  TodoList,
  CreateTodoButton,
  TodoContext,
  TodoItem,
} from "./components";

import "../dist/index.css";
import { useContext } from "react";

function TodoApp() {
  const {
    todos,
    saveTodos,
    loading,
    error,
    searchValue,
    setSearchValue,
    toggleTodoCompleted,
    toggleTodoDelete,
    completedTodo,
    pendingTodo,
    openModal,
    handleOpenModal,
    addTodo,
    filteredTodo,
  } = useContext(TodoContext);

  return (
    <div className="w-full h-screen bg-red-800 bg-opacity-20">
      <TodoCounter completedTodo={completedTodo} pendingTodo={pendingTodo} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList
        todos={todos}
        searchValue={searchValue}
        toggleTodoCompleted={toggleTodoCompleted}
        toggleTodoDelete={toggleTodoDelete}
        error={error}
        loading={loading}
        openModal={openModal}
        filteredTodo={filteredTodo}
      >
        {error && <p>Something went wrong.</p>}
        {loading && <p>It's loading...</p>}
        {!loading && !todos.length && <p>Create your first Todo</p>}
        <ul className="w-full h-auto flex flex-col items-center gap-3">
          {filteredTodo.map(({ title, completed }) => (
            <TodoItem
              key={title}
              title={title}
              completed={completed}
              toggleTodoCompleted={toggleTodoCompleted}
              toggleTodoDelete={toggleTodoDelete}
            />
          ))}
        </ul>
      </TodoList>
      <CreateTodoButton handleOpenModal={handleOpenModal} />
    </div>
  );
}

export default TodoApp;
