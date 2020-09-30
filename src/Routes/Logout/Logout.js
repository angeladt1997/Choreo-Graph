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
  //Will in the future add a confirmation to this page, for now,
  //when you get here, you can only follow through with logging
  //out or pressing the back button

  return (
    <div>
      <h1>I have graphed to my heart's content!</h1>
      <p>Return to homepage to login</p>
      <Link to='/'>
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