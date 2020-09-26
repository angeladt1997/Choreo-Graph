import React, { useState } from 'react';
import AuthApiService from '../../Services/auth-api-service';
import './NewUserForm.css';

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
          <label htmlFor="userName">Username: </label><br/>
          <input className='username' type='text' required id='username'></input>

          <label htmlFor="password">Password:</label><br/>
          <input className='password' type='password' required id='password'></input>

          <label htmlFor="passwordVerify">Confirm Password:</label><br/>
          <input className='passwordVerify' type='password' required id='passwordVerify'></input>

          <input type="submit" value="Sign Up" className="formButton"/>
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