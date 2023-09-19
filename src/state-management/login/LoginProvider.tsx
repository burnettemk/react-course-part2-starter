import { ReactNode, useReducer } from "react";
import LoginContext from "./loginContext";

interface Login {
  type: "LOGIN";
  userName: string;
}

interface Logout {
  type: "LOGOUT";
}

export type LoginAction = Login | Logout;

const loginReducer = (state: string, action: LoginAction): string => {
  if (action.type === "LOGIN") return action.userName;
  if (action.type === "LOGOUT") return "";

  return state;
};

interface Props {
  children: ReactNode;
}

const LoginProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginReducer, "");

  return (
    <LoginContext.Provider value={{ user, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
