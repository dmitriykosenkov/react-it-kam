import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
   return (
      <header className={s.header}>
         <img src="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/technology-logo-maker-lp/online-logo-design-template-for-an-eco-tech-company-2176l-206-el-1024x1024.png" alt="" />
         <div>
            {props.isAuth ? <NavLink to="/profile">{props.login}</NavLink>
                          : <NavLink to="/login">Login</NavLink>}
            
         </div>
      </header>
   )
}

export default Header;