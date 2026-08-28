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

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const addTask = () => {
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

    setTask([...task, newTask]);

    setTitle("");
    setCategory("");
    setPriority("");
    setDate("");
  };

  const updateTask = (id, attribute, newValue) => {
    setTask(
      task.map((item) =>
        item.id === id
          ? { ...item, [attribute]: newValue }
          : item
      )
    );
  };

  const deleteTask = (id) => {
    setTask(task.filter((item) => item.id !== id));
  };

  const value = {
    task,
    setTask,

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