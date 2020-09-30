import React, { ChangeEvent, FormEvent, useState } from "react";
import { AddTodo } from "../types";

interface AddTodoProps {
  addTodo: AddTodo;
}

export const Form: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className="todo-input"
          value={newTodo}
          onChange={handleChange}
        />
        <button className="todo-button" type="submit" onClick={handleSubmit}>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
};
