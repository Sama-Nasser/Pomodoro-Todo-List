import { useState } from "react";

function TaskForm({ addTask }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      setError("Task is required");
      return;
    }
    if (input.trim().length < 3) {
      setError("Task minimum length is 3");
      return;
    }

    addTask(input);
    setInput("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (error) setError("");
          }}
        />
        {error && <p className="error">{error}</p>}
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
