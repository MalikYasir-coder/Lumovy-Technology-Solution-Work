import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/header";

function AppLayout() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`app-shell ${darkMode ? "dark-theme" : "light-theme"}`}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
