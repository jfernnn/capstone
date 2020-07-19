import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AlbumPost from './PostCardType/AlbumPost';
import ArtistPost from './PostCardType/ArtistPost';
import SongPost from './PostCardType/SongPost';
import Comment from '../Comment/Comment';

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
    
    handleTypeOfComment(props) {
        if(props.post.type === 'song') {
            return ( 
                <div className='post'>
                    <SongPost 
                        post={props.post} 
                        handleDeletePost={props.handleDeletePost}
                    />  
                    <div className='post'>
                        <Comment handleAddComment={this.handleAddComment}/>
                        {this.state.comments.map((comment) => 
                            <h6>{comment}</h6>
                        )}
                    </div>
                </div>
            )
        } else if(props.post.type === 'album') {
            return <AlbumPost 
                post={props.post} 
                handleDeletePost={props.handleDeletePost}
            />
        } else if(props.post.type === 'artist') {
            return <ArtistPost 
                post={props.post} 
                handleDeletePost={props.handleDeletePost}
            />
        } else 
            return <Link to='/'/>
    }
    render() {
        return (
            this.handleTypeOfComment(this.props)
        )
    }
}

export default PostCard;