import { useState, useEffect } from 'react';
import Header from './components/header';
import NewTask from './components/NewTask';

import './components/NewTask.css';
import './components/header.css';

function App() {
const [task, setTask] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");

  return savedTasks ? JSON.parse(savedTasks) : [];
});

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(task));
}, [task]);


  // Add task form ki values
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");

  // Update ke liye
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");


  // ADD TASK
  const addTask = () => {

    if (!title || !category || !priority || !date) {
      alert("Please fill all the fields");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title,
      category: category,
      priority: priority,
      date: date,
      status: "pending",
    };

    setTask([...task, newTask]);

    // Form clear
    setTitle("");
    setCategory("");
    setPriority("");
    setDate("");
  };


  // UPDATE TASK
  const updateTask = (id, attribute, newValue) => {

    setTask(
      task.map((item) =>
        item.id === id
          ? {
            ...item,
            [attribute]: newValue
          }
          : item
      )
    );

  };
  const deleteTask = (id) => {
    setTask(
      task.filter((item) => item.id !== id)
    );
  };



  return (
    <div>

      <Header />

      <NewTask
        title={title}
        setTitle={setTitle}

        category={category}
        setCategory={setCategory}

        priority={priority}
        setPriority={setPriority}

        date={date}
        setDate={setDate}

        addTask={addTask}

        tasks={task}

        updateTask={updateTask}

        editingId={editingId}
        setEditingId={setEditingId}

        editTitle={editTitle}
        setEditTitle={setEditTitle}
        deleteTask={deleteTask}
      />

    </div>
  );
}

export default App
