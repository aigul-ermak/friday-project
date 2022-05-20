import React, {useEffect} from 'react';
import './App.css';
import {Header} from '../components/header/Header';
import {AllRoutes} from '../components/allRoutes/AllRoutes';
import {useDispatch} from 'react-redux';
import {profileThunk} from '../pages/profile/ProfileReducer';

function App() {

    const dispatch = useDispatch()
// ???
    useEffect(() => {
        dispatch(profileThunk())
    }, [])

    return (
        <div className="App">
            <Header/>
            <AllRoutes/>
        </div>
    );
}

export default App;
