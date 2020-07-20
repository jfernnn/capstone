import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;
  return (
    <div className='NavBar'>
        <div>{nav}</div>
        <div>Music Connection</div>
        <div>
            <Link to='/options' className='NavBtnTxt'>Options</Link>
            <Link to='/add' className='NavBtnTxt'>Add A Post</Link>
        </div>
    </div>
  );
};

export default NavBar;