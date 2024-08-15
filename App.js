import React, { useState } from "react";
import AddTodo from "./AddTodo"; // Import the AddTodo component
import TaskList from "./TaskList"; // Import the TaskList component

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Task 1", completed: false },
  { id: 1, title: "Task 2", completed: false },
  { id: 2, title: "Task 3", completed: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++, // Incrementing the nextId for unique IDs
        title: title,
        completed: false,
      },
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodo onAddTodo={handleAddTodo} /> {/* AddTodo component */}
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      /> {/* TaskList component */}
    </>
  );
}

export default App;
