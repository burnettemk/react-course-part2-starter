import { Dispatch } from "react";
import { LoginAction } from "./LoginProvider";
import React from "react";

interface LoginContextType {
    user: string;
    dispatch: Dispatch<LoginAction>;
}

const LoginContext = React.createContext<LoginContextType>({} as LoginContextType);

export default LoginContext