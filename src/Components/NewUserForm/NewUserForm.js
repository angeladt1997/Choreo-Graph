import React, { useState } from 'react';
import AuthApiService from '../../Services/auth-api-service';


const NewUserForm = (props) => {
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password, passwordVerify } = e.target
    //there should be two input boxes on the form below so users double check 
    //password matches before creating account
    if(password.value !== passwordVerify.value){
      // console.log('In not match');
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
        props.onSignupSuccess()
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
          <input className='username'  placeholder="username" type='text'  required id='username'></input>

          <label htmlFor="password" ></label><br/>
          <input className='password' placeholder="password" type='password' required id='password'></input>

          <label htmlFor="passwordVerify" ></label><br/>
          <input className='passwordVerify' placeholder="retype password" type='password' required id='passwordVerify'></input><br/>
          <div className="formButtonTwo">           
            <button type="submit" value="Sign Up" className="formButtonTwo">Start Graphing</button>
          </div>
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