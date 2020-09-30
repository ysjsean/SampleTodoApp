export type Todo = {
  text: string;
  completed: boolean;
};

export type ToggleTodo = (selectedTodo: Todo) => void;

export type AddTodo = (newTodo: string) => void;

export enum Status {
  "incomplete",
  "completed",
}
