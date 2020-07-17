import React from 'react';
import { Link } from 'react-router-dom';
import AlbumPost from './PostCardType/AlbumPost';
import ArtistPost from './PostCardType/ArtistPost';
import SongPost from './PostCardType/SongPost';

const PostCard = (props) => {

    if(props.post.type === 'song') {
        return <SongPost 
            post={props.post} 
            handleDeleteSong={props.handleDeleteSong}
        />
    } else if(props.post.type === 'album') {
        return <AlbumPost post={props.post} />
    } else if(props.post.type === 'artist') {
        return <ArtistPost post={props.post} />
    } else 
        return <Link to='/'/>
}

export default PostCard;