import { TodoForm } from "../TodoForm/TodoForm";
import Modal from "../modal/Modal";

export const TodoList = ({
  children,
  error,
  loading,
  onLoading,
  onError,
  filteredTodo,
  totalTodos,
  render,
  openModal,
  addTodo,
  handleOpenModal,
  onEmptyTodos,
  onEmptySearchResults,
}) => {
  const renderFunc = children || render;

  return (
    <ul className="w-full h-auto flex flex-col items-center gap-3">
      {error && onError()}
      {loading && onLoading()}

      {!loading && !totalTodos && onEmptyTodos()}

      {!!totalTodos && !filteredTodo.length && onEmptySearchResults()}

      {filteredTodo.map(renderFunc)}

      <>{children} </>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} handleOpenModal={handleOpenModal} />
        </Modal>
      )}
    </ul>
  );
};
