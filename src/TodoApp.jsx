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
          {!!openModal && (
            <Modal>
              <TodoForm addTodo={addTodo} handleOpenModal={handleOpenModal} />
            </Modal>
          )}

          <PlusCircleIcon className="text-purple-400 w-20 h-20" />
        </ul>
      </TodoList>
      <CreateTodoButton handleOpenModal={handleOpenModal} />
    </div>
  );
}

export default TodoApp;
