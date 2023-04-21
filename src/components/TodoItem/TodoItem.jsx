import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/solid";

export const TodoItem = ({
  title,
  completed,
  toggleTodoCompleted,
  toggleTodoDelete,
}) => {
  const handleToggleCompleted = () => {
    toggleTodoCompleted(title);
  };

  const handleToggleDeleted = () => {
    toggleTodoDelete(title);
  };

  return (
    <li className="bg-white w-11/12 h-10 rounded-full py-2 px-8 grid grid-cols-12 relative">
      <p
        className="col-span-1 flex justify-center items-center"
        onClick={handleToggleCompleted}
      >
        {completed ? (
          <CheckCircleIcon className="w-5 h-5 " />
        ) : (
          <EllipsisHorizontalCircleIcon className="w-5 h-5 " />
        )}
      </p>

      <h2 className={`col-span-10 ${completed ? "line-through" : ""}`}>
        {title}
      </h2>

      <p className="col-span-1" onClick={handleToggleDeleted}>
        <XCircleIcon className="w-5 h-5 absolute right-5" />
      </p>
    </li>
  );
};
