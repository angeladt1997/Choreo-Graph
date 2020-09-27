import React from 'react';
import TokenService from '../../Services/token-service';
import { Link } from 'react-router-dom';

const LogoutPage = (props) => {

  const handleLogoutSuccess = () => {
    TokenService.clearAuthToken()
    const { history } = props
    history.push('/')
    
    if(props.setIsLoggedIn){
      
      props.setIsLoggedIn(false);
    }
  }

  handleLogoutSuccess()

  return (
    <div>
      <h1>Logout Page</h1>
      <p>Return to homepage to login</p>
      <Link to='/Landing'>
          <button>Home</button>
      </Link>
    </div>
  );
};

LogoutPage.defaultProps = {
  location: {},
  history: {
    push: () => {},
  },
}

export default LogoutPage;