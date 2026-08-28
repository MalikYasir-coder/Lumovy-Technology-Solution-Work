import { useState, useEffect } from 'react';
import Header from './components/header';
import Home from './Pages/Home';
import About from "./Pages/About";
import { Routes, Route } from 'react-router-dom';
import NotFound from './Pages/Notfound';

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
      title: title,
      category: category,
      priority: priority,
      date: date,
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
        item.id === id ? { ...item, [attribute]: newValue } : item
      )
    );
  };

  const deleteTask = (id) => {
    setTask(task.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
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
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App