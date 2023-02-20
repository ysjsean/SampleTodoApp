import React, { useState } from "react";
import "./App.css";
import { AddTodo, Todo, ToggleTodo, Status } from "./types";
import { Form } from "./components/Form";
import { ToDoList } from "./components/ToDoList";

const initialTodos: Array<Todo> = [
  { text: "Walk the dog", completed: true },
  { text: "Complete App", completed: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, completed: false }]);
  };

  return (
    <React.Fragment>
      <header>
        <h1>Todo List</h1>
      </header>
      <main>
        <Form addTodo={addTodo} />
        <div id="tasks">
          <table>
            <thead>
              <tr>
                <th><h2>Incomplete</h2></th>
                <th><h2>Complete</h2></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ToDoList
                    sectionId={Status.incomplete}
                    todos={todos}
                    toggleTodo={toggleTodo}
                  />
                </td>
                <td>
                  <ToDoList
                    sectionId={Status.completed}
                    todos={todos}
                    toggleTodo={toggleTodo}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </React.Fragment>
  );
};
export default App;
