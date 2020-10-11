import React from 'react';

import { Link } from 'react-router-dom';
 

const NavBar = (props) => {
  //bar has dashboard and logout only when users are signed in
  return props.isLoggedIn ? (
    <div className="header">
      <Link to='/logout' className='headerLink'>
        Logout
      </Link>
      {/* {" | "} */}
      <Link to='/dashboard' className='headerLink'>
        Dashboard
      </Link>
    </div>
  ) : (
    //public links used for sign in
    <div className="header">
      <Link to='/NewUser' className='headerLink'>
        Create Account
      </Link>
      {/* {" | "} */}
      <Link to='/login' className='headerLink'>
        Login
      </Link>
    </div>
  ) 

}

export default NavBar;