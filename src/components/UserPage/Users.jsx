import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user-photo.webp';
import s from './UserPage.module.css';
import * as axios from 'axios';

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
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                           withCredentials: true,
                           headers: {
                              "API-KEY": "ba964194-f87c-4642-b2f3-156ec9ed6f7e"
                           }
                        })
                        .then(response => {
                           if (response.data.resultCode === 0) {
                              props.follow(u.id)
                           }
                        })
                     }}>Follow</button>
                     : <button onClick={() => { 
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                           withCredentials: true,
                           headers: {
                              "API-KEY": "ba964194-f87c-4642-b2f3-156ec9ed6f7e"
                           }
                        })
                        .then(response => {
                           if (response.data.resultCode === 0) {
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