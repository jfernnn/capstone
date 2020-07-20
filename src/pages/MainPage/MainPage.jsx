import React from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../../components/PostCard/PostCard';
import './MainPage.css'

function MainPage(props) {
    return (
    <div>
        <div className="mainpage-section">
            <div></div>
            <div className="post-section">
            {props.posts.map(post => 
                <PostCard
                    user={props.user}
                    key={post._id}
                    post={post}
                    handleDeletePost={props.handleDeletePost}
                    history={props.history}
                />
            )}
            </div>
            <div></div>
        </div>
    </div>
    );
};

export default MainPage;