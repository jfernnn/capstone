import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './AddPostPeg.css'

class AddPostPage extends Component{
  state = {
    formData: {
      description: '',
      type: 'track',
      topic: '',
      userName: this.props.user.name
    },
    typeList: ['track', 'artist', 'album'],
  }
  
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.formData);
    this.props.handleNewPost(this.state.formData);
  };
  
  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData
    });
  };

  handleDropDownChange = e => {
    const formData = {...this.state.formData, "type": e.value};
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
      <div className="add-post-page">
        <h1 className="add-post">ADD A POST</h1>
        <form onSubmit={this.handleSpotify}>
          <div>Please Click Before Submitting</div>
          <button type="submit">Obtain a Token</button>
        </form>
        <form onSubmit={this.handleSubmit}>
          <div className="add-post-dropdown">
            <Dropdown 
              name="type" 
              options={this.state.typeList} 
              onChange={this.handleDropDownChange} 
              value={this.state.formData.type} 
              placeholder="Select an option" 
            />
          </div>
          <div className="add-post-input">
            <input 
              name="topic" 
              value={this.state.formData.topic}
              placeholder="Name of track/artist/album"
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