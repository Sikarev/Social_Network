import React from 'react';
import './App.css';
// import './zero.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Friends/Friends';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import Friend from './components/Friends/Friend/Friend';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersСontainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return (
    <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
            <Route path='/dialogs' render={ () => <DialogsContainer />}/>
            <Route path='/news' render={ () => <News/>}/>
            <Route path='/music' render={ () => <Music/>}/>
            <Route path='/settings' render={ () => <Settings/>}/>
            <Route path='/users' render={ () => <UsersContainer/>} />
            <Route path='/friends' render={ () => <Friends/>} />
            <Route path='/friend1' render={ () => <Friend id="1"/>} />
            <Route path='/friend2' render={ () => <Friend id="2"/>} />
            <Route path='/friend3' render={ () => <Friend id="3"/>} />
            <Route path='/login' render={ () => <Login/>} />
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App;