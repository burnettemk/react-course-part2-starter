import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import LoginProvider from "./state-management/LoginProvider";
import TasksProvider from "./state-management/TasksProvider";

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
