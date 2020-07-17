import React from 'react';
import { Link } from 'react-router-dom';

const SongPost = (props) => {
    return (
        <div>
            <h3>{props.post.title}</h3>
            <dl>
                <dd>{props.post.album}</dd>
                <dd>{props.post.artist}</dd>
                <dd>{props.post.description}</dd>
            </dl>
            <div className='panel-footer'>
                <button onClick={() => props.handleDeleteSong(props.post._id)}>
                    DELETE
                </button>
            </div>
        </div>
    );
}

export default SongPost;