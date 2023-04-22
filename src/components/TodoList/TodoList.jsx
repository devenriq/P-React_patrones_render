export const TodoList = ({
  children,
  error,
  loading,
  onLoading,
  onError,
  filteredTodo,
  render,
}) => {
  return (
    <ul className="w-full h-auto flex flex-col items-center gap-3">
      {error && onError()}
      {loading && onLoading()}

      {!loading && !filteredTodo.length && onEmptyTodos()}

      {filteredTodo.map(render)}

      <>{children} </>
    </ul>
  );
};
