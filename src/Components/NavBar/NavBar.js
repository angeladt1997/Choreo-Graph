import React from 'react';

import { Link } from 'react-router-dom';
 

const NavBar = (props) => {
  //bar has dashboard and logout only when users are signed in
  return props.isLoggedIn ? (
    <div className="header">
      <Link to='/logout'>
        Logout
      </Link>
      {" | "}
      <Link to='/dashboard'>
        Dashboard
      </Link>
    </div>
  ) : (
    //public links used for sign in
    <div className="header">
      <Link to='/NewUser'>
        Create Account
      </Link>
      {" | "}
      <Link to='/login'>
        Login
      </Link>
    </div>
  ) 

}

export default NavBar;