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
  const [input,setinput]=useState("");
  const [tasks, setTasks] = useState([
    { id: 1, name: "Company website redesign", status: "Backlog", priority: "Low" },
    { id: 2, name: "Mobile app login prototype", status: "Backlog", priority: "Medium" },
    { id: 3, name: "Research for upcoming projects", status: "In Progress", priority: "High" },
    { id: 4, name: "Dashboard layout design", status: "Review", priority: "Low" },
    { id: 5, name: "Review client spec document", status: "Complete", priority: "Low" }
  ]);

  function addTask(taskName) {
    const newTask = {
      id: Date.now(),
      name: taskName,
      status: "Backlog",
      priority: "Low"
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      {/* <Navbar /> */}
      <Navbar title="TaskBar Manager" menuItems={["Home", "About", "Contact"]} />
      {/* <Main title="Our Achievements" tasks={["100+ Projects Completed", "5+ Years of Experience"]} /> */}

      <Main title="Tasks Board" tasks={tasks} />

      <TaskForm onAddTask={addTask} />

      {/* <Footer /> */}
      <Footer year={2026} company="Lumovy Technology Solutions" />
    </div>
  );
}
export default App;