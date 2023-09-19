interface Login {
    type: 'LOGIN';
    userName: string;
}

interface Logout {
    type: 'LOGOUT';
}

export type LoginAction = Login | Logout;

const loginReducer = (state: string, action: LoginAction):string => {
    if (action.type === 'LOGIN') return action.userName;
    if (action.type === 'LOGOUT') return '';

    return state;
}

export default loginReducer;