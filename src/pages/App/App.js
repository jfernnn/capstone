import React, { Component } from 'react';
import './App.css';
import MainPage from '../MainPage/MainPage';
import OptionsPage from '../OptionsPage/OptionsPage';
import AddPostPage from '../AddPostPage/AddPostPage';
import AddSongPost from '../AddPostPage/PostType/AddSongPost';
import AddAlbumPost from '../AddPostPage/PostType/AddAlbumPost';
import AddArtistPost from '../AddPostPage/PostType/AddArtistPost';
import NavBar from '../../components/NavBar/NavBar';

import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import * as postService from '../../utils/postService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      user: userService.getUser()
    }
  }

  async componentDidMount() {
    this.getAllPosts();
  }

  handleAddPost = async newPostData => {
    await postService.createPostAPI(newPostData);
    this.getAllPosts();
  }

  handleDeletePost = async postId => {
    await postService.deletePostAPI(postId);
    this.setState(state => ({
      posts: state.posts.filter(post => post._id !== postId)
    }), () => this.props.history.push('/'));
  }

  getAllPosts = async () => {
    const posts = await postService.getAllPostsAPI();
    this.setState({
      posts
    }, () => this.props.history.push('/'));
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
        <NavBar 
            user={this.state.user} 
            handleLogout={this.handleLogout}
        />
        <header className="App-header">Songs Songs Songs</header>
        <Switch>
          <Route exact path='/' render={({ history }) =>
            userService.getUser() ?
              <MainPage 
                history={history}
                posts={this.state.posts}
                user={this.state.user}
                handleLogout={this.handleLogout}
                handleDeletePost={this.handleDeletePost}
              />
            :
              <Redirect to='/login' />
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
            <AddPostPage 
              user={this.state.user}
              handleAddPost={this.handleAddPost}
            />
          }/>
          <Route exact path='/add/song' render={() =>
            <AddSongPost 
              user={this.state.user}
              handleAddPost={this.handleAddPost}
            />
          }/>
          <Route exact path='/add/album' render={() =>
            <AddAlbumPost 
              user={this.state.user}
              handleAddPost={this.handleAddPost}
            />
          }/>
          <Route exact path='/add/artist' render={() =>
            <AddArtistPost 
              user={this.state.user}
              handleAddPost={this.handleAddPost}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
