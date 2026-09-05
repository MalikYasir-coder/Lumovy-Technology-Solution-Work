import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/themeSlice";

function Header() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <header>
      <h1>Task Manager</h1>
      <p className="header-subtitle">Manage Your Tasks Efficiently</p>
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
        <button
          type="button"
          className="theme-toggle"
          onClick={() => dispatch(toggleTheme())}
          aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
