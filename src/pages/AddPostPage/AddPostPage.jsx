import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

const AddPostPage = (props) => {
    return (
        <>
            <h1>Add a Post</h1>
            <NavLink to='/add/song'><button>Song</button></NavLink>
            <NavLink to='/add/album'><button>Album</button></NavLink>
            <NavLink to='/add/artist'><button>Artist</button></NavLink>
            <NavLink to='/'><button>Cancel</button></NavLink>
        </>
    )
};

export default AddPostPage;