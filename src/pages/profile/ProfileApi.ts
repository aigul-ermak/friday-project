import {instance} from '../../api/api';

export type ProfileType = {
    email: string
    name: string
    avatar: string
}

export const profileApi = {
    me() {
        return instance.post<ProfileType>('auth/me')
            .then(res => res.data)
    }
}
