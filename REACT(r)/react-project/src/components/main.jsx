function Main({ title, tasks , onInputChange }) {
  const columns = ["Backlog", "In Progress", "Review", "Complete"];

  return (
    <main>
      <h1>{title}</h1>
      <div className="board">
        {columns.map((col) => (
          <div key={col} className="column">
            <h2>{col}</h2>
            {tasks
              .filter((task) => task.status === col)
              .map((task) => (
                <div key={task.id} className="task-card">
                  <span className={`priority ${task.priority.toLowerCase()}`}>
                    {task.priority} Priority
                  </span>
                  <p>{task.name}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </main>
  );
}
export default Main;