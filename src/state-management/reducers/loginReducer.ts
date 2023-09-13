interface Login {
    type: 'LOGIN';
    userName: string;
}

interface Logout {
    type: 'LOGOUT';
}

type TaskAction = Login | Logout;

const loginReducer = (state: string, action: TaskAction):string => {
    if (action.type === 'LOGIN') return action.userName;
    if (action.type === 'LOGOUT') return '';

    return state;
}

export default loginReducer;