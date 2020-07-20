import React, { Component } from 'react';
import './App.css';
import MainPage from '../MainPage/MainPage';
import OptionsPage from '../OptionsPage/OptionsPage';
import AddPostPage from '../AddPostPage/AddPostPage';
import AddDeterminePost from '../AddPostPage/AddDeterminePost';
import NavBar from '../../components/NavBar/NavBar';

import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import * as postService from '../../utils/postService';
import * as spotifyAPI from '../../utils/spotifyApi';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      items: [],
      description: '',
      user: userService.getUser()
    }
  }

  async componentDidMount() {
    this.getAllPosts();
  }

  handleNewPost = async (post) => {
    const newPost = await spotifyAPI.getInfoAPI(post.topic, post.type);
    newPost.type = post.type;
    newPost.userName = post.userName;
    if(newPost.type === 'track')  {
      console.log(newPost.tracks.items)
      this.setState({
        items: newPost.tracks.items, description: post.description
      }, () => this.props.history.push('/add/determine_post'));
    }
    if(newPost.type === 'artist') {
      console.log(newPost.artists.items)
      this.setState({
        items: newPost.artists.items, description: post.description
      }, () => this.props.history.push('/add/determine_post'));
    }
    if(newPost.type === 'album') {
      console.log(newPost.albums.items)
      this.setState({
        items: newPost.albums.items, description: post.description
      }, () => this.props.history.push('/add/determine_post'));
    };
    //<Redirect to='' />
  }
  
  handleNewNewPost = async (item, uN) => {
    const newPost = {};
    if(item.type === 'track') {
      newPost.title = item.name;
      newPost.album = item.album.name;
      newPost.artist = item.artists[0].name;
    } else if(item.type === 'album') {
      newPost.title = null;
      newPost.album = item.name;
      newPost.artist = item.artists[0].name;
    } else if(item.type === 'artist') {
      newPost.title = null;
      newPost.album = null;
      newPost.artist = item.name;
    }
    newPost.type = item.type;
    newPost.userName = uN;
    newPost.description = this.state.description;
    await postService.createPostAPI(newPost)
    this.getAllPosts();
    //<Redirect to='' />
  }

  handleDeletePost = async postId => {
    await postService.deletePostAPI(postId);
    this.setState(state => ({
      posts: state.posts.filter(post => post._id !== postId)
    }), () => this.props.history.push('/'));
  }

  getAllPosts = async () => {
    const posts = await postService.getAllPostsAPI();
    console.log('-----',posts)
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
        <header className="App-header">Music Connection</header>
        <Switch>
          <Route exact path='/' render={({ history }) =>
            userService.getUser() ?
              <MainPage 
                history={history}
                posts={this.state.posts}
                user={this.state.user}
                handleLogout={this.handleLogout}
                handleDeletePost={this.handleDeletePost}
                handleNewPost={this.handleNewPost}
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
          <Route exact path='/add/determine_post' render={() => 
            <AddDeterminePost 
              user={this.state.user}
              items={this.state.items}
              handleNewNewPost={this.handleNewNewPost}
            />
          }/>
          <Route exact path='/add' render={() =>
            <AddPostPage 
              user={this.state.user}
              handleNewPost={this.handleNewPost}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
