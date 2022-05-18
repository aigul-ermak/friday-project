import {instance} from '../../api/api';

export type LoginType = {
    email: string
    password: string
    rememberMe: boolean
}

export const userAPI = {
    login(login: LoginType) {
        return instance.post<LoginType>('auth/login', login)
            .then(res => res.data)
    }
}





