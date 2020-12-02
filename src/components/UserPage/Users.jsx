import React from 'react';
import userPhoto from '../../assets/images/user-photo.webp';
import s from './UserPage.module.css';

const Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

      let pages = [];

      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i);
      }
   return (
      <div>
      <div>
         {pages.map(p => {
            return <span onClick={() => {props.onPageChanged(p)}} 
                         className={props.currentPage === p && s.selectedPage}>{p}</span>
         })}
      </div>
      {
         props.users.map(u => <div key={u.id}>
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

export default Users;