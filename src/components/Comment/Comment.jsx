import React, { Component } from 'react';
import './Comment.css'

class Comment extends Component {
    state = {
        formData: {
          comment: '',
          postId: this.props.postId,
          userName: this.props.user.name
        }
    }
  
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddComment(this.state.formData);
    };
  
    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData
        });
    };
    render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label></label>
                    <br></br>
                    <textarea 
                        className='comment-text-area'
                        name='comment'
                        value={this.state.formData.comment}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <button type="submit">
                    <div className='add-comment-btn'>
                    Add Comment
                    </div>
                </button>
            </form>
        </div>
    )};
}

export default Comment;