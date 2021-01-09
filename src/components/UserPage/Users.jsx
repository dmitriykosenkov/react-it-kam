import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user-photo.webp';
import s from './UserPage.module.css';

const Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

   let pages = [];

   for (let i = 1; i <= 20; i++) {
      pages.push(i);
   }
   return (
      <div>
         <div className={s.pageNumbers}>
            {pages.map(p => {
               return <span onClick={() => { props.onPageChanged(p) }}
                  className={props.currentPage === p && s.selectedPage}>{p}</span>
            })}
         </div>
         <div className={s.users}>
            <div className={s.usersInner}>
               {props.users.map(u => <div key={u.id} className={s.user}>
                  <div className={s.photoUrl}>
                     <NavLink to={"/profile/" + u.id} >
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                     </NavLink>
                  </div>
                  <div>
                     {!u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.followBtn}
                           onClick={() => { props.followThunkCreator(u.id) }}>Follow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.followBtn}
                           onClick={() => { props.unfollowThunkCreator(u.id) }}>Unfollow</button>
                     }
                  </div>

                  <div>{u.id}</div>
                  <div>{u.name}</div>
                  <div>{u.status}</div>

                  <div>u.location.city</div>
                  <div>u.location.country</div>
               </div>)}
            </div>

         </div>
      </div>
   )
}

export default Users;