import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AddArtistPost extends Component {
  state = {
    formData: {
      type: 'artist',
      artist: '',
      description: '',
      comments: [],
      user: this.props.user.name
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

  render(){
    return (
      <>
        <h1>Add an artist</h1>
        <form onSubmit={this.handleSubmit}>
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
            Add Artist
          </button>
        </form>
        <Link to='/'>Cancel</Link>
      </>
    )
  }
};
export default AddArtistPost;