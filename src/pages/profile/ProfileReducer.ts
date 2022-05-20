import {InferActionTypes} from '../../store/store';
import {profileApi, ProfileType} from './ProfileApi';
import {loginAC} from '../login/UserReducer';

export const profileInitialState = {
    user: {} as ProfileType
}
//reducer
export const profileReducer = (state: ProfileInitialStateType = profileInitialState,
                               action: ProfileActionTypes): ProfileInitialStateType => {
    switch (action.type) {
        case 'PROFILE/SET-PROFILE-DATA':
            return {...state, ...action.payload}
        default:
            return state
    }
}
//action
export const profileAC = {
    setProfileData: (user: ProfileType) =>
        ({type: 'PROFILE/SET-PROFILE-DATA', payload: {user}} as const)
}
//thunk
export const profileThunk = (): any => async (dispatch: any) => {
    try {
        let profileData = await profileApi.me()
        // @ts-ignore
        dispatch(profileAC.setProfileData(profileData))
        // dispatch(loginAC.setIsLoggedIn(true))
        console.log(profileData)
    } catch (e) {
        console.log(e)
    }
}

//types
export type ProfileInitialStateType = typeof profileInitialState
export type ProfileActionTypes = InferActionTypes<typeof profileAC>
