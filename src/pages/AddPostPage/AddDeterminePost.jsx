import React, { Component } from 'react';
import './AddPostPeg.css'


class AddDeterminePost extends Component {
  handleChoice(item) {
    this.props.handleNewNewPost(item, this.props.user.name);
  }

  handlePostType(item) {
    if(item.type === 'track') {
      return `${item.name} | ${item.artists[0].name} | ${item.album.name} | ${item.album.release_date}`;
    } else if(item.type === 'album') {
      return `${item.name} | ${item.artists[0].name} | ${item.release_date}`; 
    } else if(item.type === 'artist') {
        return `${item.name} | ${item.genres[0] === undefined ? 'no genres listed' : item.genres[0]} | Followers: ${item.followers.total}`;
    }
  }

  render() {
    return (
      <div>
        <h1>There's more than one so you'll have to choose ${this.props.user.name}</h1>
        {this.props.items.map((item, key) => 
          <form key={key} onSubmit={() => this.handleChoice(item)}>
            <div className="post-choice">
              <button type="submit">✔</button> 
              <p>{this.props.items.userName}</p>
              {this.handlePostType(item)}
            </div>
          </form>
        )}
      </div>
    )
  }
};

export default AddDeterminePost;