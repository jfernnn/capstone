import React from 'react';
import {NavLink} from 'react-router-dom';
import './AddPostPeg.css'

const AddPostPage = (props) => {
    return (
        <div className='addPost'>
            <h1>Add a Post</h1>
            <NavLink to='/add/song' className='addPost'><button>Song</button></NavLink>
            <NavLink to='/add/album'><button>Album</button></NavLink>
            <NavLink to='/add/artist'><button>Artist</button></NavLink>
            <NavLink to='/'><button>Cancel</button></NavLink>
        </div>
    )
};

export default AddPostPage;