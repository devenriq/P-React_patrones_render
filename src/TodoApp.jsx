import {
  TodoCounter,
  TodoSearch,
  TodoList,
  CreateTodoButton,
  TodoContext,
  TodoItem,
  TodoForm,
} from "./components";

import { PlusCircleIcon } from "@heroicons/react/24/solid";

import "../dist/index.css";
import { useTodos } from "./components/hooks/useTodos";
import Modal from "./components/modal/Modal";
import { TodoLoading } from "./components/TodoLoading/TodoLoading";
import { EmptyTodos } from "./components/EmptyTodos/EmptyTodos";

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
  } = useTodos();

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
        addTodo={addTodo}
        handleOpenModal={handleOpenModal}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        render={({ title, completed }) => (
          <TodoItem
            key={title}
            title={title}
            completed={completed}
            toggleTodoCompleted={toggleTodoCompleted}
            toggleTodoDelete={toggleTodoDelete}
          />
        )}
      />

      <CreateTodoButton handleOpenModal={handleOpenModal} />
    </div>
  );
}

export default TodoApp;
