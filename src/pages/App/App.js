import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import MainPage from '../MainPage/MainPage';
import OptionsPage from '../OptionsPage/OptionsPage';
import AddPostPage from '../AddPostPage/AddPostPage';
import AddSongPost from '../AddPostPage/PostType/AddSongPost';
import AddAlbumPost from '../AddPostPage/PostType/AddAlbumPost';
import AddArtistPost from '../AddPostPage/PostType/AddArtistPost';

import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Songs Songs Songs</header>
        <Switch>
          <Route exact path='/' render={() =>
            <MainPage 
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          }/>
          <Route exact path='/options' render={() =>
            <OptionsPage />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/add' render={() =>
            <AddPostPage />
          }/>
          <Route exact path='/add/song' render={() =>
            <AddSongPost />
          }/>
          <Route exact path='/add/album' render={() =>
            <AddAlbumPost />
          }/>
          <Route exact path='/add/artist' render={() =>
            <AddArtistPost />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
