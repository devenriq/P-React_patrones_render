import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from "./TodoApp";

import "../dist/index.css";
import { TodoProvider } from "./components/context/TodoProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <React.StrictMode>
      <TodoApp />
    </React.StrictMode>
  </TodoProvider>
);
