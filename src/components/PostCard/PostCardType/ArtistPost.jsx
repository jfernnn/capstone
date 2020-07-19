import React from 'react';
import '../PostCard.css';

const ArtistPost = (props) => {
    return (
        <div className='post'>
            <h5>{props.post.userName}</h5>
            <h1>ARTIST</h1>
            <h3>{props.post.artist}</h3>
            <dl>
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

export default ArtistPost;