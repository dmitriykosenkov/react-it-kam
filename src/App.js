import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UserPageContainer from './components/UserPage/UserPageContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
   return (
      <div className="app-wrapper">
         <Header />
         <NavbarContainer store={props.store} />
         <div className="app-wrapper-content">
            <div className="app-wrapper-content-inner">
               <Route path='/dialogs' render={() => <DialogsContainer />} />
               <Route path='/profile' render={() => <ProfileContainer />} />
               <Route path='/userpage' render={() => <UserPageContainer />} />
               <Route path='/music' render={() => <Music />} />
               <Route path='/news' render={() => <News />} />
               <Route path='/settings' render={() => <Settings />} />
            </div>
         </div>
      </div>
   );
}


export default App;
