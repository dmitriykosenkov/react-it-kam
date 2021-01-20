import { NavLink } from 'react-router-dom'
import Preloader from '../../commons/preloader/preloader'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHook from './ProfileStatusWithHook';
import userPhoto from '../../../assets/images/user-photo.webp';
import { Input } from '../../commons/FormControls/FormControls';

const ProfileInfo = (props) => {
   const onPhotoChange = (e) => {
      if(e.target.files.length){
         props.savePhoto(e.target.files[0]);
      }
   }
   // debugger
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
               <img src={props.profile.photos.large || userPhoto} alt="" />
            </div>
            <div>
               {props.isOwner && <input type="file" onChange={onPhotoChange}/>}
            </div>
            <h3>
               {props.profile.fullName}
            </h3>
            <ProfileStatusWithHook status={props.status} updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}/>
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