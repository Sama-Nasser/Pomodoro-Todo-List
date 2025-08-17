function TaskItem({ task, toggleTask, deleteTask, editTask }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span
          contentEditable
          suppressContentEditableWarning={true}
          onBlur={(e) => {
            const newText = e.target.textContent.trim();
            if (newText && newText !== task.text) {
              editTask(task.id, newText);
            } else {
              e.target.textContent = task.text;  
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.target.blur();  
            }
          }}
        >
          {task.text}
        </span>
      </div>
      <button onClick={() => deleteTask(task.id)}>🗑</button>
    </li>
  );
}

export default TaskItem;
