import React, { useState } from 'react';
import AuthApiService from '../../Services/auth-api-service';
import './NewUserForm.css';
import { Link } from 'react-router-dom';

const NewUserForm = (props) => {
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password, passwordVerify } = e.target

    if(password.value !== passwordVerify.value){
      setError("Password do not match");
      return;
    }

    AuthApiService.postUser({
        username: username.value,
        password: password.value,
    })
    .then(user => {
        username.value = ""
        password.value = ""
        passwordVerify.value = ''
        props.onSuccessfulSignup()
    })
    .catch(res => {
      setError(res.error);
    })
  }

  return (
    <>
      <div className="RegistrationForm">
        <form onSubmit={(e) => handleSubmit(e)} className="RegistrationFormContent">
          <label htmlFor="userName" ></label><br/>
          <input className='username' type='text' placeholder="Username" required id='username'></input>

          <label htmlFor="password" ></label><br/>
          <input className='password' type='password' placeholder="password" required id='password'></input>

          <label htmlFor="passwordVerify" ></label><br/>
          <input className='passwordVerify' type='password' placeholder="Confirm Password" required id='passwordVerify'></input><br/>
          <Link to='/Dashboard'>
            <button type="submit" value="Sign Up" className="formButton">Start Graphing</button>
          </Link>
        </form>
      </div>
        <div role='alert'>
          {error ? <p className='red'>{error}</p> : null}
        </div>
      
    </>
  )
}

NewUserForm.defaultProps = {
  onSuccessfulSignup: () => {}
}

export default NewUserForm;