import React from 'react';

const initial = {
    color: 'default',
    user: null
};

const MainContext = React.createContext(initial);

let reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'RESET':
            return initial;
        case 'SET_COLOR':
            return {...state, ...{color: action.payload}};
        case 'SET_USER':
            return {...state, ...{user: action.payload}};
        default:
            return {...state};
    }
};

const Provider = ({children}: any) => {
    const [stateMainApp, dispatchMainApp] = React.useReducer(reducer, initial);
    let value: any = {stateMainApp, dispatchMainApp};
    return (
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    );
};

export {Provider, MainContext};