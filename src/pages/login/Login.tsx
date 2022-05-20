import {useDispatch} from 'react-redux';
import {loginThunk} from './UserReducer';
import {useAppSelector} from '../../store/store';
import {Navigate, NavLink} from 'react-router-dom';
import {PATH} from '../../components/header/Header';
import {useFormik} from 'formik';

// @ts-ignore
import s from './Login.module.css'

type LoginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const MIN_PASS_LENGTH = 7

const validatePassAndEmail = (
    values: Omit<LoginParamsType, 'rememberMe'>,
): Omit<LoginParamsType, 'rememberMe'> => {
    const errors = {} as Omit<LoginParamsType, 'rememberMe'>
    if (!values.email) {
        errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (values.password.length < MIN_PASS_LENGTH) {
        errors.password = 'Password must be more than 7 symbols'
    } else if (!values.password) {
        errors.password = 'Password is required'
    }
    return errors
}

export const Login = () => {

    const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: validatePassAndEmail,
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
        <div className={s.container}>
            <div>
                <h1>Card App</h1>
                <h2>Sign in to your account</h2>
                <div className={s.formContainer}>
                    <form onSubmit={formik.handleSubmit}>

                        <div className={s.inputBlock}>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </div>

                        <div className={s.inputBlock}>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.errors.email ?
                                <div>{formik.errors.email}</div> : null}
                        </div>

                        <div className={s.settings}>
                            <span>
                                remember me
                                   <input type="checkbox"
                                          name="rememberMe"
                                          value=""/>
                            </span>
                            <NavLink className={s.forgetPassword} to={PATH.PROFILE}>
                                Forgot Password
                            </NavLink>
                        </div>

                        <div className={s.errorMessage}>
                            <p> {formik.touched.email && formik.errors.email}</p>
                            <p>{formik.touched.password && formik.errors.password}</p>
                        </div>
                        <button type="submit">Log In</button>
                    </form>
                </div>
                <div>
                    <p>Don't have an account?</p>
                    Sign Up
                </div>
            </div>
        </div>
    )
}
