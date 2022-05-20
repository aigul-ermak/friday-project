import {useAppSelector} from '../../store/store';
// @ts-ignore
import s from './Profile.module.css'

export const Profile = () => {

    const profileName = useAppSelector((state) => state.profile.user.name)
    const profileAvatar = useAppSelector((state) => state.profile.user.avatar)
    const profileEmail = useAppSelector((state) => state.profile.user.email)

    return (
        <div className={s.container}>
            <div className={s.profileBlock}>
                <img src={profileAvatar} alt="" width="50px" height="50px"/>
                <h2>{profileName}</h2>
                <h2>{profileEmail}</h2>
            </div>

        </div>
    )
}
