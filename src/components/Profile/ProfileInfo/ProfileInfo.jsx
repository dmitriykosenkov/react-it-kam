import { NavLink } from 'react-router-dom'
import Preloader from '../../commons/preloader/preloader'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }
   return (
      <div className={s.profileInfo}>
         <div className={s.img}>
            {/* <img src="https://theinpaint.com/images/example-1-2.jpg" alt="" /> */}
         </div>
         <div className={s.descriptionBlock}>
            <div className={s.userPhoto}>
               <img src={props.profile.photos.large} alt="" />
            </div>
            <h3>
               {props.profile.fullName}
            </h3>
            <div>
               {props.profile.aboutMe}
            </div>
            <div>{props.profile.userId}</div>
            <div className={s.twitterIcon}>
               {props.profile.contacts.twitter != null ?
                  <NavLink to={props.profile.contacts.twitter}>
                     <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png" />
                  </NavLink>
                  : ""}
            </div>
         </div>
      </div>
   )
}

export default ProfileInfo;