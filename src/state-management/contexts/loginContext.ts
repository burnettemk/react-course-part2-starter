import { Dispatch } from "react";
import { LoginAction } from "../reducers/loginReducer";
import React from "react";

interface LoginContextType {
    user: string;
    dispatch: Dispatch<LoginAction>;
}

const LoginContext = React.createContext<LoginContextType>({} as LoginContextType);

export default LoginContext