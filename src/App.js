import React from 'react';
import './App.css';
import './zero.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Friends/Friends';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import Friend from './components/Friends/Friend/Friend';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={ () => <Profile postsData={props.state.profilePage.postsData} addPost={props.addPost}/>}/>
          <Route path='/dialogs' render={ () => <Dialogs dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData}/>}/>
          <Route path='/news' render={ () => <News/>}/>
          <Route path='/music' render={ () => <Music/>}/>
          <Route path='/settings' render={ () => <Settings/>}/>
          <Route path='/friends' render={ () => <Friends/>} />
          <Route path='/friend1' render={ () => <Friend id="1"/>} />
          <Route path='/friend2' render={ () => <Friend id="2"/>} />
          <Route path='/friend3' render={ () => <Friend id="3"/>} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;