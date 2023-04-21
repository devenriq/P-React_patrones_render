import { useContext, useEffect } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

import { TodoForm, TodoItem, TodoContext } from "../index";
import Modal from "../modal/Modal";

export const TodoList = () => {
  const {
    todos,
    searchValue,
    toggleTodoCompleted,
    toggleTodoDelete,
    error,
    loading,
    openModal,
  } = useContext(TodoContext);

  const filteredTodo = todos.filter(({ title }) => {
    const lowerTitle = title.toLowerCase();
    return lowerTitle.includes(searchValue.toLowerCase());
  });

  return (
    <ul className="w-full h-auto flex flex-col items-center gap-3">
      {error && <p>Something went wrong.</p>}
      {loading && <p>It's loading...</p>}
      {!loading && !todos.length && <p>Create your first Todo</p>}

      {filteredTodo.map(({ title, completed }) => (
        <TodoItem
          key={title}
          title={title}
          completed={completed}
          toggleTodoCompleted={toggleTodoCompleted}
          toggleTodoDelete={toggleTodoDelete}
        />
      ))}

      {/* Se abre el modal de acuerdo a si se ha apretado o no el botón para agregar todos */}
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <PlusCircleIcon className="text-purple-400 w-20 h-20" />
    </ul>
  );
};
