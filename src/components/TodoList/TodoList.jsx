import { TodoForm } from "../TodoForm/TodoForm";
import Modal from "../modal/Modal";

export const TodoList = ({
  children,
  error,
  loading,
  onLoading,
  onError,
  filteredTodo,
  render,
  openModal,
  addTodo,
  handleOpenModal,
}) => {
  return (
    <ul className="w-full h-auto flex flex-col items-center gap-3">
      {error && onError()}
      {loading && onLoading()}

      {!loading && !filteredTodo.length && onEmptyTodos()}

      {filteredTodo.map(render)}

      <>{children} </>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} handleOpenModal={handleOpenModal} />
        </Modal>
      )}
    </ul>
  );
};
