import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/Notfound";
import AppLayout from "./Layouts/AppLayout";
import { Routes, Route } from "react-router-dom";

import "./components/NewTask.css";
import "./components/header.css";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;