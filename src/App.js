import React from 'react';
import './App.css'
import {Link} from "react-router-dom";


function App() {

    return (
        <div>
            <p><Link to={"/Registro"}>Registro</Link></p>
            <p><Link to={"/Login"}>Login</Link></p>
            <p><Link to={"/Dashboard"}>Dashboard</Link></p>
        </div>
    )
}

export default App;
