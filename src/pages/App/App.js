import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import MainPage from '../MainPage/MainPage'
import OptionsPage from '../OptionsPage/OptionsPage'
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">Songs Songs Songs</header>
        <Switch>
          <Route exact path='/' render={() =>
            <MainPage />
          }/>
          <Route exact path='/options' render={() =>
            <OptionsPage />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage 
              history={history}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
