import { useContext, useEffect } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

import { TodoForm, TodoItem, TodoContext } from "../index";
import Modal from "../modal/Modal";

export const TodoList = ({
  todos,
  searchValue,
  toggleTodoCompleted,
  toggleTodoDelete,
  error,
  loading,
  openModal,
}) => {
  return (
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
