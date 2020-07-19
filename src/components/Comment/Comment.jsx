import React, { Component } from 'react';

class Comment extends Component {
    state = {
        formData: {
          comment: '',
        }
    }
  
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddComment(this.state.formData.comment);
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
            <h4>COMMENTS</h4>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Add Comment</label>
                    <input 
                        name='comment'
                        value={this.state.formData.comment}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <button type="submit">
                    Add Comment
                </button>
            </form>
        </div>
    )};
}

export default Comment;