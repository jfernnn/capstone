import React from 'react';
import '../PostCard.css';

const SongPost = (props) => {
    return (
        <div>
            <h5>{props.post.user}</h5>
            <h1>SONG</h1>
            <h3>{props.post.title}</h3>
            <dl>
                <dd>{props.post.album}</dd>
                <dd>{props.post.artist}</dd>
                <dd>{props.post.description}</dd>
                {props.post.comments.map((comment) => 
                    <dd>{comment}</dd>
                )}
                <dd>{props.post.comments.length}</dd>
            </dl>
            <div className='panel-footer'>
                <button onClick={() => props.handleDeletePost(props.post._id)}>
                    DELETE
                </button>
            </div>
        </div>
    );
}

export default SongPost;