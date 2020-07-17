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
      }
    }

    handleSubmit = e => {
      e.preventDefault();
      console.log(this.state.formData);
      this.props.handleAddSong(this.state.formData);
    };

    handleChange = e => {
      const formData = {...this.state.formData, [e.target.name]: e.target.value};
      this.setState({
          formData
      });
    };

    render(){
      return (
        <>
          <h1>Add a song</h1>
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