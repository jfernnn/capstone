import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../Comment/Comment';
import * as commentService from '../../../src/utils/commentService';
import './PostCard.css'

class PostCard extends Component {

    state = {
        postData: this.props.post,
        comments: [],
    }

    handleAddComment = async (newComment) => {
        console.log('the n ew comment - ', newComment.comment, '  akk the comments - ', newComment.userName, '--id', newComment.postId);
        const updatedPost = await commentService.createCommentAPI(newComment);
        this.setState({
            postData: updatedPost
        }, () => this.props.history.push('/'));
    }

    postInfo = 
    <div className='post-contents'>
        {this.props.post.title ? <h2 className="post-header">{this.props.post.title}</h2> : <span></span>}
        <dl>
            {this.props.post.album && !this.props.post.title ? <h2 className="post-header">{this.props.post.album}</h2> : <span></span>}
            {this.props.post.album && this.props.post.title ? <h3>{this.props.post.album}</h3> : <span></span>}
            {this.props.post.type === 'artist' ?
                <a href={this.props.post.external_urls}><img className="spotify-artist-image" src={this.props.post.image} alt="Almost"/></a>
                :
                <a href={this.props.post.external_urls}><img className="spotify-image" src={this.props.post.image} alt="Almost"/></a>
            }
            <h2 className="post-header">{this.props.post.artist}</h2>
            {this.props.post.genres ? 
                <div><br></br><span className="title">Artist Genres</span>{this.props.post.genres.map((genre, key) => <span key={key}>: {genre}</span>)}</div> 
            : 
                <span></span>
            }
            <hr className='horizontal-line'></hr>
            <div className="description">{this.props.post.description}</div>
            <hr className='horizontal-line'></hr>
        </dl>
    </div>

    render() {
        return (
            //this.handleTypeOfComment(this.props)
            <div className='post'>
                <div className='post-title'>
                    <button className='user-button' onClick={() => this.props.handleSortPage(this.props.post.userName)}>
                        <h3 className='post-type'>{this.props.post.userName}</h3>
                    </button>
                    <h1 className='post-type'>{this.props.post.type.toUpperCase()}</h1>
                    <div></div>
                </div>
                {this.postInfo}
                <div className='comments-delete-section'>
                    <div className='comments'>
                        <div></div>
                        <details className='comment-section'>
                            <summary className='comment'>COMMENTS</summary>
                            <ul>
                                {this.state.postData.comments.map((comment, key) => 
                                    <li key={key}><h6>{comment.comment} -posted by {comment.userName}</h6></li>
                                )}
                                <Comment 
                                    handleAddComment={this.handleAddComment} 
                                    user={this.props.user} 
                                    postId={this.props.post._id}
                                />
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
            </div>
            
        )
    }
}

export default PostCard;