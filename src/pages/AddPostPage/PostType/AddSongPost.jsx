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
          <Link to='/'>Cancel</Link>
        </>
      )
    }
};

export default AddSongPost;