import React from 'react';
import './App.css';
import {Header} from '../components/header/Header';
import {AllRoutes} from '../components/allRoutes/AllRoutes';

function App() {
    return (
        <div className="App">
            <Header/>
            <AllRoutes/>
        </div>
    );
}

export default App;
