import Navbar from "./components/Navbar";
import './components/Navbar.css';
import Main from "./components/main";
import Footer from "./components/footer";
import './components/footer.css';
import TaskForm from "./components/Taskform";
function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <TaskForm />
      <Footer />
    </div>
  );
}
export default App;
