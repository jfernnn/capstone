import React from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../../components/PostCard/PostCard';

function MainPage(props) {
    return (
        <div>
            {props.posts.map(post => 
                <PostCard
                    user={props.user}
                    key={post._id}
                    post={post}
                    handleDeletePost={props.handleDeletePost}
                    history={props.history}
                />
            )}
            <button><Link to='/options'>Options</Link></button>
            <br></br>
            <button><Link to='/add'>Add a Post</Link></button>
        </div>
    );
};

export default MainPage;