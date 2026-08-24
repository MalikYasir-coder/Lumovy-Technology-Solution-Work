import { useState } from 'react';
import Navbar from "./components/Navbar";
import './components/Navbar.css';
import Main from "./components/main";
import './components/main.css';
import Footer from "./components/footer";
import './components/footer.css';
import TaskForm from "./components/Taskform";
import './components/Taskform.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Company website redesign", status: "Backlog", priority: "Low" },
    { id: 2, name: "Mobile app login prototype", status: "Backlog", priority: "Medium" },
    { id: 3, name: "Research for upcoming projects", status: "In Progress", priority: "High" },
    { id: 4, name: "Dashboard layout design", status: "Review", priority: "Low" },
    { id: 5, name: "Review client spec document", status: "Complete", priority: "Low" }
  ]);

  function addTask(Taskname) {
    const newTask = {
      id: Date.now(),
      name: Taskname,
      status: "Backlog",
      priority: "Low"
    };
    setTasks([...tasks, newTask]);
  }
  function updateTask(taskId, updates) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, ...updates } : task
      )
    );
  }

  return (
    <div>
      <Navbar title="TaskBar Manager" menuItems={["Home", "About", "Contact"]} />
      <Main title="Tasks Board" tasks={tasks} />
      <TaskForm onAddTask={addTask} />
      <Footer year={2026} company="Lumovy Technology Solutions" />
    </div>
  );
}

export default App;