import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div style={styles.container}>
      <h1>📝 Todo App</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            <span
              onClick={() => toggleComplete(todo.id)}
              style={{
                ...styles.text,
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "gray" : "black",
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => deleteTask(todo.id)}
              style={styles.deleteBtn}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Simple Styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "200px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  addBtn: {
    padding: "10px 15px",
    marginLeft: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#28a745",
    color: "white",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    margin: "10px auto",
    width: "300px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  text: {
    cursor: "pointer",
  },
  deleteBtn: {
    border: "none",
    background: "red",
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Todo;