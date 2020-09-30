import React from "react";
import { ToggleTodo } from "../types";
import { Todo, Status } from "../types";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  sectionId: number;
}

export const ToDoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  sectionId,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        if (sectionId === Status.incomplete && todo.completed === false) {
          return (
            <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
          );
        } else if (sectionId === Status.completed && todo.completed === true) {
          return (
            <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
          );
        }
        return null;
      })}
    </ul>
  );
};
