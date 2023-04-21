import { useState } from "react";
import { TodoContext } from "./TodoContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodoProvider = ({ children }) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const toggleTodoCompleted = (title) => {
    const todoIndex = todos.findIndex((todo) => todo.title === title);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    saveTodos(newTodos);
  };

  const addTodo = (title) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      title,
    });

    saveTodos(newTodos);
  };

  const toggleTodoDelete = (title) => {
    const todoIndex = todos.findIndex((todo) => todo.title === title);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const completedTodo = todos.filter((todo) => !!todo.completed).length;
  const pendingTodo = todos.filter((todo) => !todo.completed).length;

  return (
    <TodoContext.Provider
      value={{
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
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
