import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import AddPostPage from './AddPostPage';
import './AddPostPeg.css'


class AddDeterminePost extends Component {
    handleChoice(item) {
        console.log(item)
        this.props.handleNewNewPost(item);
    }

    render() {
        return (
            <div>
                <h1>There's more than one so you'll have to choose</h1>
                {this.props.items.map(item => 
                    <form onSubmit={() => this.handleChoice(item)}>
                        <p className="post-choice">
                            <button type="submit">✔</button> 
                            {item.artists[0].name} | {item.album.name} | {item.album.release_date}
                        </p>
                    </form>
                )}
            </div>
        )
    }
};

export default AddDeterminePost;