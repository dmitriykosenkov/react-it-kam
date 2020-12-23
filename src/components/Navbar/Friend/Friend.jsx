import { NavLink } from 'react-router-dom';
import s from './Friend.module.css';

const Friend = (props) => {
   // debugger
   return (
      <div>
         <NavLink to={"/profile/" + props.id} className={s.friend}>
            <div className={s.name}>
               {props.name.length > 6 ? props.name.slice(0, 5) + "..." : props.name}
            </div>
         </NavLink>
      </div>
   )
}

export default Friend;