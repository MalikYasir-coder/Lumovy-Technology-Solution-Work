import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

function TaskProvider({ children }) {
  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  // API functions belong here because TaskContext owns the task data.
  // This function is NOT called yet, so it will not make any API request.
  const getTasksFromApi = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );

    if (!response.ok) {
      throw new Error("Tasks could not be loaded");
    }

    const data = await response.json();

    console.log(data);

    // Later, when you want API tasks on the screen, add this line:
    setTask(data);
  };

  // POST: send one new task to the API and receive the created task back.
  const addTaskToApi = async (newTask) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      }
    );

    if (!response.ok) {
      throw new Error("Task could not be added");
    }

    return response.json();
  };

  // DELETE: remove one task from the API using its id.
  const deleteTaskFromApi = async (taskId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${taskId}`,
      {
      method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Task could not be deleted");
    }
  };

  // PATCH: update only the changed field of one task.
  const updateTaskFromApi = async (taskId, changes) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${taskId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(changes),
      }
    );

    if (!response.ok) {
      throw new Error("Task could not be updated");
    }

    return response.json();
  };

  // Later, this useEffect will call the GET function when the app opens:
  useEffect(() => {
    getTasksFromApi();
  }, []);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const addTask = async () => {
    if (!title || !category || !priority || !date) {
      alert("Please fill all the fields");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      category,
      priority,
      date,
      status: "pending",
    };

    try {
      const createdTask = await addTaskToApi(newTask);

      setTask((currentTasks) => [...currentTasks, createdTask]);

      setTitle("");
      setCategory("");
      setPriority("");
      setDate("");
    } catch (error) {
      alert(error.message);
    }
  };

  const updateTask = async (id, attribute, newValue) => {
    try {
      const updatedTask = await updateTaskFromApi(id, {
        [attribute]: newValue,
      });

      setTask((currentTasks) =>
        currentTasks.map((item) =>
          item.id === id ? { ...item, ...updatedTask } : item
        )
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await deleteTaskFromApi(id);

      setTask((currentTasks) =>
        currentTasks.filter((item) => item.id !== id)
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const value = {
    task,
    setTask,
    getTasksFromApi,

    title,
    setTitle,

    category,
    setCategory,

    priority,
    setPriority,

    date,
    setDate,

    editingId,
    setEditingId,

    editTitle,
    setEditTitle,

    addTask,
    updateTask,
    deleteTask,
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
