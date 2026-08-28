import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Task Manager</h1>
      <nav>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;