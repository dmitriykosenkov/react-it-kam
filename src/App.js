import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
   return (
      <div className="app-wrapper">
         <Header />
         <Navbar state={props.state.sidebar} />
         <div className="app-wrapper-content">
            <div className="app-wrapper-content-inner">
               <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
               <Route path='/profile' render={() => <Profile store={props.store} />} />
               <Route path='/music' render={() => <Music />} />
               <Route path='/news' render={() => <News />} />
               <Route path='/settings' render={() => <Settings />} />
            </div>
         </div>
      </div>
   );
}


export default App;
