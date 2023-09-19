import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import { LoginProvider } from "./state-management/login";
import { TasksProvider } from "./state-management/tasks";

function App() {
  return (
    <>
      <LoginProvider>
        <TasksProvider>
          <NavBar />
          <HomePage />
        </TasksProvider>
      </LoginProvider>
    </>
  );
}

export default App;
