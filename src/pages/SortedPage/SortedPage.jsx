import React from 'react';
import PostCard from '../../components/PostCard/PostCard';
import '../MainPage/MainPage.css'

function SortedPage(props) {
  return (
    <div>
      <div className="mainpage-section">
        <div></div>
        <div className="post-section">
          {props.posts.map(post => 
            props.userName === post.userName ?
              <PostCard
                user={props.user}
                key={post._id}
                post={post}
                handleDeletePost={props.handleDeletePost}
                handleSortPost={props.handleSortPost}
                history={props.history}
              />
            :
              <span></span>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SortedPage;