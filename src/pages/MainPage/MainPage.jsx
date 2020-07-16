import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const MainPage = (props) => {
    return (
        <div>
            <NavBar 
                user={props.user} 
                handleLogout={props.handleLogout}
            />
            <p>U made it</p>
            <Link to='/options'>Options</Link>
            <Link to='/add'>Add a Post</Link>
        </div>
    );
};

export default MainPage;