import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';

const App = (props) => {
   return (
      <div className="app-wrapper">
         <Header />
         <NavbarContainer store={props.store} />
         <div className="app-wrapper-content">
            <div className="app-wrapper-content-inner">
               <Route path='/dialogs' render={() => <DialogsContainer />} />
               <Route path='/profile' render={() => <Profile />} />
               <Route path='/music' render={() => <Music />} />
               <Route path='/news' render={() => <News />} />
               <Route path='/settings' render={() => <Settings />} />
            </div>
         </div>
      </div>
   );
}


export default App;
