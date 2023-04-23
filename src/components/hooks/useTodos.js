import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTodos = () => {
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

  const filteredTodo = todos.filter(({ title }) => {
    const lowerTitle = title.toLowerCase();
    return lowerTitle.includes(searchValue.toLowerCase());
  });

  const totalTodos = completedTodo + pendingTodo;

  return {
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
  };
};
