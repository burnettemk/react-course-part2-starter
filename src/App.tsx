import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import tasksReducer from "./state-management/reducers/tasksReducer";
import TasksContext from "./state-management/contexts/tasksContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import loginReducer from "./state-management/reducers/loginReducer";
import LoginContext from "./state-management/contexts/loginContext";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, loginDispatch] = useReducer(loginReducer, "");

  return (
    <>
      <LoginContext.Provider value={{ user, dispatch: loginDispatch }}>
        <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
          <NavBar />
          <HomePage />
        </TasksContext.Provider>
      </LoginContext.Provider>
    </>
  );
}

export default App;
