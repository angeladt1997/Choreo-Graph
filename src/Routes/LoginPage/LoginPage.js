import React from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';


const LoginPage = (props) => {
  
  const handleSuccessfulLogin = () => {
    const { history } = props
    history.push('/dashboard')

    if(props.onLogin){
      props.onLogin(true);
    }
  }
  
  return (
    <div className="loginDisplay">
      <div className="loginHeader">
        <h1>
          Login to Choreo-Graph
        </h1>
      </div>
      <div className="rotatingGraph">
       
      </div>

      <section className="loginBody">
        <LoginForm
          onSuccessfulLogin={handleSuccessfulLogin}
          
        />
      
      </section>
    </div>   
    
  );
}


LoginPage.defaultProps = {
  location: {},
  history: {
    push: () => {},
  },
}

export default LoginPage;