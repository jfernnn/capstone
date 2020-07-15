import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const MainPage = (props) => {
    return (
        <div>
            <NavBar />
            <p>U made it</p>
            <Link to='/options'>Options</Link>
        </div>
    );
};

export default MainPage;