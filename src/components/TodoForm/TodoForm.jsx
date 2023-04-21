import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, handleOpenModal } = useContext(TodoContext);

  const onCancel = () => {
    handleOpenModal(false);
    console.log(handleOpenModal);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    handleOpenModal(false);
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <form>
      <label></label>
      <textarea
        className="opacity-100 z-1"
        value={newTodoValue}
        onChange={onChange}
        cols="30"
        rows="10"
        placeholder="Cortar cebolla"
      />
      <div>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" onClick={onSubmit}>
          Añadir
        </button>
      </div>
    </form>
  );
};
