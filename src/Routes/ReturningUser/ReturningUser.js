import React from 'react';
import { Link } from 'react-router-dom';
import './ReturningUser.css';
import LoginForm from '../../Components/ReturningUser/ReturningUser';

const ReturningUser = (props) => {
  
  const handleSuccessfulLogin = () => {
    const { history } = props
    history.push('/pieces')
 
    if(props.onLogin){
     
      props.onLogin(true);
    }
  }
  
  return (
    <div className="loginDisplay">
      <div className="loginHeader">
        <h1>
          Login to Logbook
        </h1>
      </div>

      <section className="loginBody">
        <LoginForm
          onSuccessfulLogin={handleSuccessfulLogin}
        />
      </section>
    </div>
  );
}

ReturningUser.defaultProps = {
  location: {},
  history: {
    push: () => {},
  },
}

export default ReturningUser;