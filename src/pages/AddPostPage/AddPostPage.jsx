import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddPostPeg.css'

class AddPostPage extends Component{
  state = {
    formData: {
      description: '',
      type: '',
      topic: '',
      userName: this.props.user.name
    }
  }
  
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.formData);
    this.props.loginToSpot();
    this.props.handleNewPost(this.state.formData);
  };
  
  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData
    });
  };

  handleSpotify = e => {
    e.preventDefault();
    this.props.loginToSpot();
  }
  
  render(){
    return (
      <div>
        <h1 className="add-post">ADD A POST</h1>
        <form onSubmit={this.handleSpotify}>
          <button type="submit">Obtain a Token</button>
        </form>
        <form onSubmit={this.handleSubmit}>
          <div className="add-post-input">
            <input 
              name="type" 
              value={this.state.formData.type}
              placeholder="Track, artist, or album" 
              onChange={this.handleChange}
            />
          </div>
          <div className="add-post-input">
            <input 
              name="topic" 
              value={this.state.formData.topic}
              placeholder="Enter the name" 
              onChange={this.handleChange}
            />
          </div>
          <div className="add-post-input">
            <textarea 
              className="desc-input"
              name="description" 
              value={this.state.formData.description}
              placeholder="Enter the description" 
              onChange={this.handleChange}
            />
          </div>
          <button 
            type="submit"
          >
            Look up
          </button>
        </form>
        <Link to='/'>Cancel</Link>
      </div>
    )
  }
};
export default AddPostPage;