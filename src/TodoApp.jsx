import {
  TodoCounter,
  TodoSearch,
  TodoList,
  CreateTodoButton,
  TodoContext,
  TodoItem,
  TodoForm,
  TodoLoading,
  EmptyResults,
  EmptyTodos,
} from "./components";

import { PlusCircleIcon } from "@heroicons/react/24/solid";

import "../dist/index.css";
import { useTodos } from "./components/hooks/useTodos";
import { ChangeAlert } from "./components/ChangeAlert/ChangeAlert";

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
    totalTodos,
  } = useTodos();

  return (
    <div className="w-full h-screen bg-red-800 bg-opacity-20">
      <TodoCounter completedTodo={completedTodo} pendingTodo={pendingTodo} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={loading}
      />

      <TodoList
        addTodo={addTodo}
        error={error}
        filteredTodo={filteredTodo}
        handleOpenModal={handleOpenModal}
        loading={loading}
        openModal={openModal}
        searchValue={searchValue}
        todos={todos}
        toggleTodoCompleted={toggleTodoCompleted}
        toggleTodoDelete={toggleTodoDelete}
        totalTodos={totalTodos}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={() => <EmptyResults searchValue={searchValue} />}
        render={({ title, completed }) => (
          <TodoItem
            key={title}
            title={title}
            completed={completed}
            toggleTodoCompleted={toggleTodoCompleted}
            toggleTodoDelete={toggleTodoDelete}
          />
        )}
      ></TodoList>

      <CreateTodoButton handleOpenModal={handleOpenModal} />
      <ChangeAlert />
    </div>
  );
}

export default TodoApp;
