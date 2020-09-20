import React from 'react';
import TokenService from '../../Services/token-service';

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