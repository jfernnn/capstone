import React from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../../components/PostCard/PostCard';
import SongPost from '../../components/PostCard/PostCardType/SongPost';
import SongCard from '../../components/PostCard/PostCardType/SongPost';

function MainPage(props) {
    return (
        <div>

            <p>U made it</p>
            <br></br>
            <br></br>
            <br></br>
            {props.posts.map(post => 
                <PostCard
                    key={post._id}
                    post={post}
                    handleDeleteSong={props.handleDeleteSong}
                />
            )}
            <br></br>
            <br></br>
            <br></br>
            <Link to='/options'>Options</Link>
            <Link to='/add'>Add a Post</Link>
        </div>
    );
};

export default MainPage;