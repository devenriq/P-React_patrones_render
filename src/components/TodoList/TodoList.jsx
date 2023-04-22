import { useContext, useEffect } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

import { TodoForm, TodoItem, TodoContext } from "../index";
import Modal from "../modal/Modal";

export const TodoList = ({ children }) => {
  return <>{children}</>;
};
