function NewTask() {
  return (
    <div className="task-container">

      <div className="task-form-card">
        <h2>Add New Task</h2>

        <input
          type="text"
          placeholder="Enter task title"
          className="form-input"
        />

        <select className="form-input" defaultValue="">
          <option value="" disabled>Select category</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="study">Study</option>
        </select>

        <select className="form-input" defaultValue="">
          <option value="" disabled>Select priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input
          type="date"
          className="form-input"
        />

        <button className="submit-button">Add Task</button>
      </div>


      {/* Task Filters */}
      <div className="filter-container">
        <h2>Task Filters</h2>

        <div className="filter-buttons">
          <button>All (0)</button>
          <button>Pending (0)</button>
          <button>Completed (0)</button>
        </div>
      </div>


      {/* Tasks */}
      <div className="tasks-container">
        <h2>Tasks</h2>

        <div className="no-tasks">
          <h3>No Tasks Found</h3>
          <p>You currently have no tasks to display.</p>
        </div>
      </div>

    </div>
  );
}

export default NewTask;
