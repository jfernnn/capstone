import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const AddPostPage = (props) => {

    return (
        <>
            <h1>Add a Post</h1>
            <Link to='/add/song'><button>Song</button></Link>
            <Link to='/add/album'><button>Album</button></Link>
            <Link to='/add/artist'><button>Artist</button></Link>
            <Link to='/'><button>Cancel</button></Link>
        </>
    )
};

export default AddPostPage;