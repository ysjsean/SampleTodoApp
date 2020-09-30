import React from "react";
import { Todo, ToggleTodo } from "../types";

interface TodoListItemProp {
  todo: Todo;
  toggleTodo: ToggleTodo;
  // sectionId: string;
}

export const TodoListItem: React.FC<TodoListItemProp> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo)}
        />{" "}
        {todo.text}
      </li>
    </div>
  );
};
