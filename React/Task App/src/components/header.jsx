import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Task Manager</h1>
      <p className="header-subtitle">
  Manage your tasks efficiently
</p>
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