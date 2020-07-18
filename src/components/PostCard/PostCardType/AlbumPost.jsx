import React from 'react';
import '../PostCard.css';

const AlbumPost = (props) => {
    return (
        <div className='post'>
            <h5>{props.post.user}</h5>
            <h1>ALBUM</h1>
            <h3>{props.post.album}</h3>
            <dl>
                <dd>{props.post.artist}</dd>
                <dd>{props.post.description}</dd>
            </dl>
            <div className='panel-footer'>
                <button onClick={() => props.handleDeletePost(props.post._id)}>
                    DELETE
                </button>
            </div>
        </div>
    );
}

export default AlbumPost;