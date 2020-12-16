import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user-photo.webp';
import s from './UserPage.module.css';
import * as axios from 'axios';
import { followingAPI } from '../../api/api';

const Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

   let pages = [];

   for (let i = 1; i <= 20; i++) {
      pages.push(i);
   }
   return (
      <div>
         <div>
            {pages.map(p => {
               return <span onClick={() => { props.onPageChanged(p) }}
                  className={props.currentPage === p && s.selectedPage}>{p}</span>
            })}
         </div>
         {
            props.users.map(u => <div key={u.id}>
               <div className={s.photoUrl}>
                  <NavLink to={"/profile/" + u.id} >
                     <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                  </NavLink>
               </div>
               <div>
                  {!u.followed
                     ? <button onClick={() => { 
                        followingAPI.follow(u.id)
                        .then(data => {
                           // debugger
                           if (data.resultCode === 0) {
                              props.follow(u.id)
                           }
                        })
                     }}>Follow</button>
                     : <button onClick={() => { 
                        followingAPI.unfollow(u.id)
                        .then(data => {
                           // debugger
                           if (data.resultCode === 0) {
                              props.unfollow(u.id)
                           }
                        })
                     }}>Unfollow</button>
                  }
               </div>

               <div>
                  <div>{u.id}</div>
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