import React, {useReducer} from "react"

export const initValueMainApp = {
    color: 'default',
    user: null,
    menu: null,
}

const MainAppContext = React.createContext(initValueMainApp)

let reducer = (state, action) => {
    switch (action.type) {
        case "RESET":
            return initValueMainApp;
        case "SET_COLOR":
            return {...state, ...{color: action.payload}}
        case "SET_USER":
            return {...state, ...{user: action.payload}}
        case "SET_MENU":
            return {...state, ...{menu: action.payload}}
        default:
            return {...state}
    }
}

function MainAppProvider(props) {
    let [stateMainApp, dispatchMainApp] = useReducer(reducer, initValueMainApp);
    let value = {stateMainApp, dispatchMainApp};
    return (
        <MainAppContext.Provider value={value}>{props.children}</MainAppContext.Provider>
    );
}

let MainAppConsumer = MainAppContext.Consumer;

export { MainAppContext, MainAppProvider, MainAppConsumer };