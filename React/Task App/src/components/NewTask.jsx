import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function NewTask() {
  const {
    title,
    setTitle,
    category,
    setCategory,
    priority,
    setPriority,
    date,
    setDate,
    addTask,
    task,
    updateTask,
    editingId,
    setEditingId,
    editTitle,
    setEditTitle,
    deleteTask,
  } = useContext(TaskContext);

  return (
    <div className="task-container">

      {/* ================= ADD NEW TASK ================= */}
      <div className="task-form-card">
        <h2>Add New Task</h2>

        <input
          type="text"
          placeholder="Enter task title"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className="form-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Select category
          </option>

          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="study">Study</option>
        </select>

        <select
          className="form-input"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="" disabled>
            Select priority
          </option>

          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input
          type="date"
          className="form-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button
          className="submit-button"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      {/* ================= TASK FILTERS ================= */}
      <div className="filter-container">
        <h2>Task Filters</h2>

        <div className="filter-buttons">

          <button>
            All ({task.length})
          </button>

          <button>
            Pending (
            {
              task.filter(
                (task) => task.status === "pending"
              ).length
            }
            )
          </button>

          <button>
            Completed (
            {
              task.filter(
                (task) => task.status === "completed"
              ).length
            }
            )
          </button>

        </div>
      </div>

      {/* ================= TASKS ================= */}
      <div className="tasks-container">

        <h2>Tasks</h2>

        {task.length === 0 ? (

          <div className="no-tasks">
            <h3>No Tasks Found</h3>
            <p>
              You currently have no tasks to display.
            </p>
          </div>

        ) : (

          <div className="task-list">

            {task.map((task) => (

              <div
                className="task-card"
                key={task.id}
              >

                {/* ================= EDIT MODE ================= */}
                {editingId === task.id ? (

                  <>
                    <input
                      type="text"
                      className="form-input"
                      value={editTitle}
                      onChange={(e) =>
                        setEditTitle(e.target.value)
                      }
                    />

                    <select
                      className="form-input"
                      value={task.category}
                      onChange={(e) =>
                        updateTask(
                          task.id,
                          "category",
                          e.target.value
                        )
                      }
                    >
                      <option value="work">Work</option>
                      <option value="personal">Personal</option>
                      <option value="study">Study</option>
                    </select>

                    <select
                      className="form-input"
                      value={task.priority}
                      onChange={(e) =>
                        updateTask(
                          task.id,
                          "priority",
                          e.target.value
                        )
                      }
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>

                    <input
                      type="date"
                      className="form-input"
                      value={task.date}
                      onChange={(e) =>
                        updateTask(
                          task.id,
                          "date",
                          e.target.value
                        )
                      }
                    />

                    <button
                      className="Update-button"
                      onClick={() => {
                        updateTask(
                          task.id,
                          "title",
                          editTitle
                        );

                        setEditingId(null);
                        setEditTitle("");
                      }}
                    >
                      Save
                    </button>
                  </>

                ) : (

                  /* ================= NORMAL MODE ================= */
                  <>
                    <h3>{task.title}</h3>

                    <p>
                      Category: {task.category}
                    </p>

                    <p>
                      Priority: {task.priority}
                    </p>

                    <p>
                      Date: {task.date}
                    </p>

                    <p>
                      Status: {task.status}
                    </p>

                    <button
                      className="Update-button"
                      onClick={() => {
                        setEditingId(task.id);
                        setEditTitle(task.title);
                      }}
                    >
                      Update Task
                    </button>

                    <button
                      className="Delete-button"
                      onClick={() => {
                        deleteTask(task.id);
                      }}
                    >
                      Delete Task
                    </button>
                  </>
                )}

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default NewTask;