import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

   return (
      <div className={s.content}>
         <ProfileInfo profile={props.profile} status={props.status}
            updateUserStatusThunkCreator={props.updateUserStatusThunkCreator} />
         <MyPostsContainer clearPost={props.clearPost}/>
      </div>
   )
}

export default Profile;