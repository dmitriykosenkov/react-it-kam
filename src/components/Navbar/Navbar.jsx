import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import s from './Navbar.module.css';
import userPhoto from '../../assets/images/user-photo.webp';

const Navbar = (props) => {
   // debugger
   // let friendsElements = props.friends.map(friend => <Friend name={friend.name} src={friend.src} />)
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/userpage" activeClassName={s.activeLink}>Userpage</NavLink>
         </div>
         <h3 className={s.titleFriends}>Friends</h3>


         <div className={s.friends}>
            {props.friends.map(f => <Friend name={f.name} key={f.id} id={f.id}/>)}
         </div>
      </nav>
   )
}

export default Navbar;