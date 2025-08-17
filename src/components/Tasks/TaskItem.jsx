function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span>{task.text}</span>
      </div>
      <button onClick={() => deleteTask(task.id)}>🗑</button>
    </li>
  );
}

export default TaskItem;
