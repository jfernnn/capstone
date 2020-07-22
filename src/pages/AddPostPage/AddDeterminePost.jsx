import React, { Component } from 'react';
import './AddPostPeg.css'


class AddDeterminePost extends Component {
  state = {
    formData: {
      title: '',
      type: '',
      album: '',
      artist: '',
      description: '',
      genres: [],
      external_urls: '',
      image: '',
      userName: ''
    }
  }

  handleChoice(item) {
    const newPost = {};
    if(item.type === 'track') {
      newPost.title = item.name;
      newPost.album = item.album.name;
      newPost.artist = item.artists[0].name;
      newPost.genres = null;
      newPost.image = item.album.images[0].url;
    } else if(item.type === 'album') {
      newPost.title = null;
      newPost.album = item.name;
      newPost.artist = item.artists[0].name;
      newPost.genres = null;
      newPost.image = item.images[0].url;
    } else if(item.type === 'artist') {
      newPost.title = null;
      newPost.album = null;
      newPost.artist = item.name;
      newPost.genres = item.genres;
      newPost.image = item.images[0].url;
    }
    newPost.external_urls = item.external_urls.spotify;
    newPost.type = item.type;
    newPost.userName = this.props.user.name;
    newPost.description = this.props.description;
    console.log('thisisnewpost', newPost);
    this.props.handleNewNewPost(newPost);
  }

  handlePostType(item) {
    if(item.type === 'track') {
      return `${item.artists[0].name} | ${item.album.name} | ${item.album.release_date}`;
    } else if(item.type === 'album') {
      return `${item.artists[0].name} | ${item.release_date}`; 
    } else if(item.type === 'artist') {
        return `${item.genres[0] === undefined ? 'no genres listed' : item.genres[0]} | Followers: ${item.followers.total}`;
    }
  }

  render() {
    return (
      <div className="choice-header">
        <h1>Choose Wisely..</h1>
        {this.props.items.map((item, key) => 
          <form key={key} onSubmit={() => this.handleChoice(item)}>
            <div className="post-choice">
              <button type="submit">{item.name}</button><br></br>{this.handlePostType(item)}
              <p>{this.props.items.userName}</p>
            </div>
          </form>
        )}
      </div>
    )
  }
};

export default AddDeterminePost;