import s from './UserPage.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user-photo.webp';

let UserPage = (props) => {
   let getUsers = () => {
      if (props.users.length === 0) {
         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger
            props.setUsers(response.data.items)
         })
      }
   }

   return (
      <div>
         <div>
            <button onClick={getUsers}>Get Users</button>
         </div>
         {props.users.map(u => <div key={u.id}>
            <div className={s.photoUrl}>
               <img src={u.photos.small != null ? u.photos.small : userPhoto} />
            </div>
            <div>
               {!u.followed
                  ? <button onClick={() => { props.follow(u.id) }}>Follow</button>
                  : <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
               }
            </div>
            <div>
               <div>{u.name}</div>
               <div>{u.status}</div>
            </div>
            <div>u.location.city</div>
            <div>u.location.country</div>
         </div>)}
      </div>
   )
}

export default UserPage;