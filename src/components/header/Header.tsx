import {NavLink} from 'react-router-dom';
// @ts-ignore
import s from './Header.module.css';
import {useAppSelector} from '../../store/store';
import {useDispatch} from 'react-redux';
import {loginOutThunk} from '../../pages/login/UserReducer';

export const enum PATH {
    PROFILE = '/profile',
    PACKLIST = '/packlist',
    LOGIN = '.login'
}

export const Header = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)

    const logoutHandler = () => {
        dispatch(loginOutThunk())
        console.log('exit')
    }
    return (
        <nav className={s.nav}>
            <ul className={s.menu}>
                {
                    !isLoggedIn && <>
                        <NavLink to={PATH.LOGIN} className={s.link}>Login</NavLink>
                        <NavLink to={PATH.PACKLIST} className={s.link}>Packlist</NavLink>
                    </>
                }
                <NavLink to={PATH.PROFILE} className={s.link}>Profile</NavLink>
                {
                    isLoggedIn && <>
                        <button onClick={logoutHandler}>Log out</button>
                    </>
                }
            </ul>
        </nav>
    )
}
