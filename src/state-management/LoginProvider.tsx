import React, { ReactNode, useReducer } from "react";
import loginReducer from "./reducers/loginReducer";
import LoginContext from "./contexts/loginContext";

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
