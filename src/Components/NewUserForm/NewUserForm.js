import React, { useState } from 'react';
import AuthApiService from '../../Services/auth-api-service';
import './NewUserForm.css';
import { Link } from 'react-router-dom';

const NewUserForm = (props) => {
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password, passwordVerify } = e.target
    //there should be two input boxes on the form below so users double check 
    //password matches before creating account
    if(password.value !== passwordVerify.value){
      setError("Password do not match");
      return;
    }
    //makes a post to the api to create a new user and insert it into the choreograph
    //database
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
    //user entries will be checked to meet password requirements through the database. 
    <>
      <div className="RegistrationForm">
        <form onSubmit={(e) => handleSubmit(e)} className="RegistrationFormContent">
          <label htmlFor="userName" ></label><br/>
          <span className="content-name">Username</span>
          <input className='username' type='text'  required id='username'></input>

          <label htmlFor="password" ></label><br/>
          <span className="content-name">Password</span>
          <input className='password' type='password' required id='password'></input>

          <label htmlFor="passwordVerify" ></label><br/>
          <span className="content-name">Confirm</span>
          <input className='passwordVerify' type='password' required id='passwordVerify'></input><br/>
          <Link to='/DashboardPage'>
            <button type="submit" value="Sign Up" className="formButtonTwo">Start Graphing</button>
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