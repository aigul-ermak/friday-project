import {useDispatch} from 'react-redux';
import {login} from './UserReducer';
import {useAppSelector} from '../../store/store';
import {Navigate} from 'react-router-dom';
import {PATH} from '../../components/header/Header';


export const Login = () => {

    const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)

    const dispatch = useDispatch()

    const onClickLogin = () => {
        dispatch(login({email: 'nya-admin@nya.nya', password: '1qazxcvBG', rememberMe: false}))
    }

    if (isLoggedIn) {
        return <Navigate to={PATH.PROFILE}/>
    }

    return (
        <div>
            <h3>Login</h3>
            <p></p>
            <button onClick={onClickLogin}>click</button>
        </div>
    )
}
