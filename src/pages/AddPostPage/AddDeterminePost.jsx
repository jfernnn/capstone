import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import AddPostPage from './AddPostPage';
import './AddPostPeg.css'


class AddDeterminePost extends Component {
    handleChoice(item) {
        
        console.log(item)
        this.props.handleNewNewPost(item);
    }

    handlePostType(item) {
        if(item.type == 'track') {
            return `${item.name} | ${item.artists[0].name} | ${item.album.name} | ${item.album.release_date}`
        } else if(item.type == 'album') {
            return `${item.name} | ${item.artists[0].name} | ${item.release_date}` 
        } else if(item.type == 'artist') {
            return `${item.name} | ${item.genres[0]} | Followers: ${item.followers.total}`;
        }
    }

    render() {
        return (
            <div>
                <h1>There's more than one so you'll have to choose</h1>
                {this.props.items.map(item => 
                    <form onSubmit={() => this.handleChoice(item)}>
                        <p className="post-choice">
                            <button type="submit">✔</button> 
                            {this.handlePostType(item)}
                        </p>
                    </form>
                )}
            </div>
        )
    }
};

export default AddDeterminePost;