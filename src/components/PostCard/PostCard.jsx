import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import * as postService from '../../../src/utils/postService'
import './PostCard.css'

class PostCard extends Component {

    state = {
        comments: [],
    }

    handleAddComment = async (newComment) => {
        console.log('the n ew comment - ', newComment.comment, '  akk the comments - ', newComment.userName, '--id', newComment.postId);
        await postService.createCommentAPI(newComment);
        const allComments = await postService.getAllCommentsAPI(this.props.post._id);
        console.log(allComments)
        this.setState({
            comments: [allComments]
        }, () => this.props.history.push('/'));
    }
    // handleAddComment = (newComment) => {
    //     console.log('the n ew comment - ', newComment.comment, '  akk the comments - ', this.state.comments);
    //     this.props.post.comments = [...this.props.post.comments, newComment];
    //     this.setState({
    //         comments: [...this.state.comments, newComment]
    //     }, () => this.props.history.push('/'));
    // }

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
            <div className='comments'>
                <div></div>
                <details className='comment-section'>
                    <summary className='comment'>COMMENTS</summary>
                    <ul>
                        <Comment 
                            handleAddComment={this.handleAddComment} 
                            user={this.props.user} 
                            postId={this.props.post._id}
                        />
                        {this.state.comments.map((comment) => 
                            <li><h6>{comment.comment} -posted by {comment.userName}</h6></li>
                        )}
                        </ul>
                </details>
                <div></div>
            </div>
            <div className='delete-btn'>
                <button onClick={() => this.props.handleDeletePost(this.props.post._id)}>
                    DELETE
                </button>
            </div>
            </div>
            
        )
    }
}

export default PostCard;