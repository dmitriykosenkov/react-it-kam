import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
   return (
      <div className={s.profileInfo}>
         <div className={s.img}>
            {/* <img src="https://theinpaint.com/images/example-1-2.jpg" alt="" /> */}
         </div>
         <div className={s.descriptionBlock}>
            <h3>
               Dmitriy Kosenkov
            </h3>
         </div>
      </div>
   )
}

export default ProfileInfo;