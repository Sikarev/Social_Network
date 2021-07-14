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
import { HashRouter, Redirect, Switch, withRouter } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/reducer/appReducer'
import Preloader from './components/commons/Preloader/Preloader';
import store from './redux/reduxStore';
import { withSuspense } from './hoc/withSuspense';
// import store from './redux/reduxStore';

// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import UsersContainer from './components/Users/UsersСontainer';
// import ProfileContainer from './components/Profile/ProfileContainer';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersСontainer'));

class App extends React.Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert("Some error occured");
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Switch>
            <Route exact path='/' render={() => <Redirect to='profile'/>}/>
            <Route path='/profile/:userId?' render={ withSuspense(ProfileContainer)}/>
            <Route path='/dialogs' render={ withSuspense(DialogsContainer)}/>
            <Route path='/news' render={ () => <News/>}/>
            <Route path='/music' render={ () => <Music/>}/>
            <Route path='/settings' render={ () => <Settings/>}/>
            <Route path='/users' render={ withSuspense(UsersContainer)} />
            <Route path='/friends' render={ () => <Friends/>} />
            <Route path='/friend1' render={ () => <Friend id="1"/>} />
            <Route path='/friend2' render={ () => <Friend id="2"/>} />
            <Route path='/friend3' render={ () => <Friend id="3"/>} />
            <Route path='/login' render={ () => <Login/>} />
            <Route path='*' render={ () => <div>404 NOT FOUND</div>}/>
            </Switch>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {
  return (
  <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
  </HashRouter>
  )
}

export default MainApp;