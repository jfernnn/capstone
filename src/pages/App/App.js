import React, { Component } from 'react';
import './App.css';
import MainPage from '../MainPage/MainPage';
import SortedPage from '../SortedPage/SortedPage';
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
      token: '',
      posts: [],
      items: [],
      description: '',
      userName: '',
      user: userService.getUser()
    }
  }

  handleNewPost = async (post) => {
    post.topic.replace(' ', '%20');
    const newPost = await spotifyAPI.getInfoAPI(post.topic, post.type, this.state.token);
    newPost.type = post.type;
    newPost.userName = post.userName;
    if(newPost.type === 'track')  {
      this.setState({
        items: newPost.tracks.items, description: post.description
      }, () => this.props.history.push('/add/determine_post'));
    }
    if(newPost.type === 'artist') {
      this.setState({
        items: newPost.artists.items, description: post.description
      }, () => this.props.history.push('/add/determine_post'));
    }
    if(newPost.type === 'album') {
      this.setState({
        items: newPost.albums.items, description: post.description
      }, () => this.props.history.push('/add/determine_post'));
    };
    //<Redirect to='' />
  }
  
  handleNewNewPost = async newPost => {
    const postToAdd = await postService.createPostAPI(newPost)
    this.getAllPosts();
  }

  handleDeletePost = async postId => {
    await postService.deletePostAPI(postId);
    this.setState(state => ({
      posts: state.posts.filter(post => post._id !== postId)
    }), () => this.props.history.push('/'));
  }

  handleSortPage = (sortPageUserName) => {
    this.setState({
      userName: sortPageUserName
    }, () => this.props.history.push('./sorted'))
  }

  getAllPosts = async () => {
    console.log('Git all posts')
    const posts = await postService.getAllPostsAPI();
    console.log('-----',posts)
    this.setState({
      posts
    }, () => this.props.history.push('/'));
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null }, () => this.props.history.push('/'));
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  loginToSpot = async () => {
    console.log('made it to request')
    console.log(this.state.token)
    const loggedIn = await spotifyAPI.authorizeSpot();
    const token = loggedIn.access_token;
    this.setState({token});
  }

  async componentDidMount() {
    console.log('compontent did mount')
    this.getAllPosts();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <NavBar 
            user={this.state.user} 
            handleLogout={this.handleLogout}
            loginToSpot={this.loginToSpot}
        />
        </div>
        <div className="Body">
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
                handleSortPage={this.handleSortPage}
              />
            :
              <Redirect to='/login' />
          }/>
          <Route exact path='/sorted' render={({ history }) => 
            userService.getUser() ?
              <SortedPage 
                history={history}
                posts={this.state.posts}
                user={this.state.user}
                handleLogout={this.handleLogout}
                handleDeletePost={this.handleDeletePost}
                handleNewPost={this.handleNewPost}
                userName={this.state.userName}
                handleSortPage={this.handleSortPage}
              />
            :
              <Redirect to='/login' />
          }/>
          <Route exact path='/sorted/home' render={({ history }) => 
            userService.getUser() ?
              <SortedPage 
                history={history}
                posts={this.state.posts}
                user={this.state.user}
                handleLogout={this.handleLogout}
                handleDeletePost={this.handleDeletePost}
                handleNewPost={this.handleNewPost}
                userName={this.state.user.name}
                handleSortPage={this.handleSortPage}
              />
            :
              <Redirect to='/login' />
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
              description={this.state.description}
            />
          }/>
          <Route exact path='/add' render={() =>
            userService.getUser() ?
              <AddPostPage 
                user={this.state.user}
                handleNewPost={this.handleNewPost}
                loginToSpot={this.loginToSpot}
              />
            :
              <Redirect to='/login' />
          }/>
          <Route exact path='/add/determine_post?' render={() =>
            <Redirect to='/' />
          }/>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
