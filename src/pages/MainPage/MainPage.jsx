import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = (props) => {
    return (
        <div>
            <p>U made it</p>
            <Link to='/options'>Options</Link>
        </div>
    );
};

export default MainPage;