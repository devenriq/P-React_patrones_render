import { useContext } from "react";

import { TodoContext } from "../context/TodoContext";

export const CreateTodoButton = () => {
  const { handleOpenModal } = useContext(TodoContext);

  return (
    <div className="flex justify-center items-center relative ">
      <button
        className="bg-red-400 w-16 h-16 rounded-full flex-shrink-0  fixed z-50 bottom-10 right-10 hover:w-20 hover:h-20"
        onClick={handleOpenModal}
      >
        <span className="text-5xl hover:text-7xl text-white">+</span>
      </button>
    </div>
  );
};
