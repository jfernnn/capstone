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
        this.props.handleNewPost(this.state.formData);
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
            <h1>ADD A POST</h1>
            <form onSubmit={this.handleSubmit}>
              <div >
                <input 
                  name="type" 
                  value={this.state.formData.type}
                  placeholder="Track, artist, or album" 
                  onChange={this.handleChange}
                />
              </div>
              <div >
                <input 
                  name="topic" 
                  value={this.state.formData.topic}
                  placeholder="Enter the name" 
                  onChange={this.handleChange}
                />
              </div>
              <input 
                  name="description" 
                  value={this.state.formData.description}
                  placeholder="Enter the description" 
                  onChange={this.handleChange}
                />
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
export default AddPostPage;