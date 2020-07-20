import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './PostCard.css'

class PostCard extends Component {

    state = {
        comments: [],
    }

    handleAddComment = (newComment) => {
        console.log('the n ew comment - ', newComment, '  akk the comments - ', this.state.comments);
        this.props.post.comments = [...this.props.post.comments, newComment];
        this.setState({
            comments: [...this.state.comments, newComment]
        }, () => this.props.history.push('/'));
    }

    render() {
        return (
            //this.handleTypeOfComment(this.props)
            <div className='post'>
            <h5>{this.props.post.userName}</h5>
            <h1>{this.props.post.type}</h1>
            {this.props.post.title ? <h3>{this.props.post.title}</h3> : <span></span>}
            <dl>
                {this.props.post.album ? <h4>{this.props.post.album}</h4> : <span></span>}
                {this.props.post.album === null && this.props.post.title === null ?
                    <h3>{this.props.post.artist}</h3>
                :
                    <dd>{this.props.post.artist}</dd>
                }
                <dd>{this.props.post.description}</dd>
            </dl>
            <div className='panel-footer'>
                <button onClick={() => this.props.handleDeletePost(this.props.post._id)}>
                    DELETE
                </button>
            </div>
            <div className='post'>
                        <Comment handleAddComment={this.handleAddComment}/>
                        {this.state.comments.map((comment) => 
                            <h6>{comment}</h6>
                        )}
                    </div>
            </div>
        )
    }
}

export default PostCard;