import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {LoginActionsType, userReducer} from '../pages/login/UserReducer';


const rootReducer = combineReducers({
    login: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export type AppRootStateType = ReturnType<typeof rootReducer>
//типизация для action type
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
//собираем все типы action type
export type ActionsType = LoginActionsType
//типизация для thunk
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, ActionsType>
// useSelector для доступа к state
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
