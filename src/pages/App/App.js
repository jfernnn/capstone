import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import MainPage from '../MainPage/MainPage'
import OptionsPage from '../OptionsPage/OptionsPage'
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Welcome to Hell</header>
        <Switch>
          <Route exact path='/' render={() =>
            <MainPage />
          }/>
          <Route exact path='/options' render={() =>
            <OptionsPage />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
