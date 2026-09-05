import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./Redux/store";
import TaskProvider from "./Context/TaskContext";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <TaskProvider>
          <App />
        </TaskProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);