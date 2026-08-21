import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (taskText.trim() === "") return;
    onAddTask(taskText);
    setTaskText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input
        type="text"
        id="task"
        name="task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
export default TaskForm;