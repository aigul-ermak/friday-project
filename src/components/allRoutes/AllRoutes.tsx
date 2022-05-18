import {Navigate, Route, Routes} from 'react-router-dom'

import {Packlist} from '../../pages/packslist/Packlist';
import {Login} from '../../pages/login/Login';
import {Profile} from '../../pages/profile/Profile';
import {PATH} from '../header/Header';


export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="./" element={<Navigate to={PATH.PROFILE}/>}/>
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.PACKLIST} element={<Packlist/>}/>
            <Route path={PATH.PROFILE} element={<Profile/>}/>
        </Routes>
    )
}
