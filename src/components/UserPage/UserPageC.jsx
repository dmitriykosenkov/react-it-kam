import React from 'react'
import s from './UserPage.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user-photo.webp';


class UserPage extends React.Component {

   componentDidMount() {
      alert("new")
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
         .then(response => {
            this.props.setUsers(response.data.items)
         })
   }

   render() {
      return (
         <div>
            {
               this.props.users.map(u => <div key={u.id}>
                  <div className={s.photoUrl}>
                     <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                  </div>
                  <div>
                     {!u.followed
                        ? <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
                        : <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
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

}
export default UserPage;