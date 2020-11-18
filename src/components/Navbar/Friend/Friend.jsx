import { NavLink } from 'react-router-dom';
import s from './../Navbar.module.css';

const Friend = (props) => {
   return (
      <div className={s.friend}>
         <div>
            <img src={props.src} alt="" />
         </div>
         <div className={s.item}>
            <NavLink to="">{props.name}</NavLink>
         </div>
      </div>
   )
}

export default Friend;