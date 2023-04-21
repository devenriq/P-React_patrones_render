import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoCounter = () => {
  const { completedTodo, pendingTodo } = useContext(TodoContext);

  return (
    <div className="w-full h-52 bg-red-200 text-center flex justify-center items-center flex-col">
      <h1 className="text-5xl font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-transparent">
        Your Tasks
      </h1>
      <p className="text-lg font-medium pt-2">
        Completed {pendingTodo} of {completedTodo}
      </p>
    </div>
  );
};
