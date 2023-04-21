import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="w-full h-8 my-5 flex justify-center">
      <input
        className="rounded-full h-8 py-2 px-4"
        type="text"
        placeholder="Escribe un todo"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
};
