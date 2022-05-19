import {useDispatch} from 'react-redux';
import {loginThunk} from './UserReducer';
import {useAppSelector} from '../../store/store';
import {Navigate} from 'react-router-dom';
import {PATH} from '../../components/header/Header';
import {useFormik} from 'formik';


export const Login = () => {

    const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(loginThunk({
                    email: 'nya-admin@nya.nya',
                    password: '1qazxcvBG',
                    rememberMe: false
                })
            )
            console.log(values)
        }
    })

    if (isLoggedIn) {
        return <Navigate to={PATH.PROFILE}/>
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">e-mail</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <label htmlFor="password">password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <label htmlFor="rememberMe">remember me</label>

                <input type="checkbox"
                       name="rememberMe"
                       value=""/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
