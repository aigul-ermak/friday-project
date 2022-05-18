import {NavLink} from 'react-router-dom';
// @ts-ignore
import s from './Header.module.css';

export const enum PATH {
    PROFILE = '/profile',
    PACKLIST = '/packlist',
    LOGIN = '.login'
}

export const Header = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.menu}>
                <li>
                    <NavLink to={PATH.LOGIN} className={s.link}>Login</NavLink>
                </li>
                <li>
                    <NavLink to={PATH.PACKLIST} className={s.link}>Packlist</NavLink>
                </li>
                <li>
                    <NavLink to={PATH.PROFILE} className={s.link}>Profile</NavLink>
                </li>

            </ul>
        </nav>
    )
}
