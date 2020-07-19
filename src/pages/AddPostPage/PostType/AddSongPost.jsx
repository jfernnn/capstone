import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AddSongPost extends Component {
    state = {
      formData: {
        type: 'song',
        title: '',
        album: '',
        artist: '',
        description: '',
        comments: [],
        type: '',
        topic: '',
        userName: this.props.user.name
      }
    }

    handleSubmit = e => {
      e.preventDefault();
      console.log(this.state.formData);
      this.props.handleAddPost(this.state.formData);
    };

    handleChange = e => {
      const formData = {...this.state.formData, [e.target.name]: e.target.value};
      this.setState({
          formData
      });
    };
    
    handleNewSubmit = e => {
      e.preventDefault();
      this.props.handleNewPost(this.state.formData.type, this.state.formData.topic)
    }

    render(){
      return (
        <>
          <h1>Add a song</h1>
          <form onSubmit={this.handleNewSubmit}>
            <div >
              <input 
                name="type" 
                value={this.state.formData.type}
                placeholder="Enter a Track" 
                onChange={this.handleChange}
              />
            </div>
            <div >
              <input 
                name="topic" 
                value={this.state.formData.topic}
                placeholder="Enter a topic search" 
                onChange={this.handleChange}
              />
            </div>
            <button 
              type="submit"
            >
              Add Song
            </button>
          </form>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Song Title</label>
              <input 
                name='title'
                value={this.state.formData.title}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>Song Artist</label>
              <input 
                name='artist'
                value={this.state.formData.artist}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>Song Album</label>
              <input 
                name='album'
                value={this.state.formData.album}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>Description</label>
              <input 
                name='description'
                value={this.state.formData.description}
                onChange={this.handleChange}
                required
              />
            </div>
            <button 
              type="submit"
            >
              Add Song
            </button>
          </form>
          <Link to='/'>Cancel</Link>
        </>
      )
    }
};

export default AddSongPost;