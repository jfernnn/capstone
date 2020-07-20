import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import AddPostPage from './AddPostPage';
import './AddPostPeg.css'


class AddConfirm extends Component {
    handleChoice(item) {
        console.log(item)
        //this.props.handleAddNewPost(item);
    }

    render() {
        return (
            <div>
                <h1>There's more than one so you'll have to choose</h1>
                {this.props.items.map(item => 
                    <p className="post-choice">
                        <NavLink to="/add/confirm" item={item}>✔</NavLink> 
                        {item.artists[0].name} | {item.album.name} | {item.album.release_date}
                    </p>
                )}
            </div>
        )
    }
};

export default AddConfirm;