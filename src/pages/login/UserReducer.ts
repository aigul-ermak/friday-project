import {LoginType, userAPI} from './UserApi';
import axios from 'axios';
import {AppThunk, InferActionTypes} from '../../store/store';

export const loginInitialState = {
    isLoggedIn: false,
    error: '',
    isLoading: false
}

//reducer
export const userReducer = (state: LoginInitialStateType = loginInitialState, action: LoginActionsType): LoginInitialStateType => {
    switch (action.type) {
        case 'LOGIN/SET-IS-LOGGED-IN':
            return {...state, ...action.payload}
        case 'LOGIN/SET-LOGIN-ERROR' :
            return {...state, ...action.payload}
        default:
            return state
    }
}

//actions
export const loginActionCreator = {
    setIsLoggedIn: (isLoggedIn: boolean) =>
        ({type: 'LOGIN/SET-IS-LOGGED-IN', payload: {isLoggedIn}} as const),
    setLoginError: (error: string) =>
        ({type: 'LOGIN/SET-LOGIN-ERROR', payload: {error}} as const)
}

//thunk
export const loginThunk = (login: LoginType):any => async (dispatch: any) => {
    try {
        let loginData = await userAPI.login(login)
        console.log(loginData)
        //dispatch данные в state profile
        dispatch(loginActionCreator.setIsLoggedIn(true))
    } catch (e) {
        if (axios.isAxiosError(e)) {
            // dispatch(loginActionCreator.setLoginError(e.response ? e.response.data.error : e.message))
            console.log(e.message)
        }
    }
}

export const loginOutThunk = ():any => async (dispatch: any) => {
    try {
        await userAPI.logout()
        dispatch(loginActionCreator.setIsLoggedIn(false))
    } catch (e) {
        if (axios.isAxiosError(e)) {
            // dispatch(loginActionCreator.setLoginError(e.response ? e.response.data.error : e.message))
            console.log(e.message)
        }
    }
}



//types
export type LoginInitialStateType = typeof loginInitialState
export type LoginActionsType = InferActionTypes<typeof loginActionCreator>
