import React, {useState} from 'react';
import AuthApiService from '../../Services/auth-api-service';
import './LoginForm.css';
import { Link } from 'react-router-dom';


const LoginForm = (props) => {
  const [error, setError] = useState(null);

  const handleSubmitJwtAuth = (e) => {
    e.preventDefault()
    
    const {username, password} = e.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
    .then(user => {
      username.value = ""
      password.value= ""
      props.onSuccessfulLogin()
    })
    .catch(res => {
      setError(res.error);
    })
  }
  return (
  <div>
    <form className="loginForm" onSubmit={(e)=> handleSubmitJwtAuth(e)}>
      <label htmlFor="userName"></label><br/>
      <input className='username' placeholder="username" type='text' required id='username'></input>

      <label htmlFor="password"></label><br/>
      <input className='password' placeholder="password" type='password' required id='password'></input>

       <Link to='/DashboardPage'> 
        <button type="submit" value="Sign Up" className="formButton">Start Graphing</button>
      </Link> 
    </form>
  </div>
  )
};

LoginForm.defaultProps = {
  onSuccessfulLogin: () => {}
}

export default LoginForm;