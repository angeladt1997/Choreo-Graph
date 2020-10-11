import React, {useState} from 'react';
import AuthApiService from '../../Services/auth-api-service';


const LoginForm = (props) => {
  const [error, setError] = useState(null);

  const handleSubmitJwtAuth = (e) => {
    e.preventDefault()
    
    const {username, password} = e.target;
    //pulls in information from the choreograph api for login verification
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
  //for for login body, on successful completion, user will be redirected to 
  //dashboard. If not, no action will take place
     // <form className="loginForm" onSubmit={(e)=> handleSubmitJwtAuth(e)}>
  return (
  <>
  <div>
    <form className="loginForm" onSubmit={(e)=> handleSubmitJwtAuth(e)}>
      
          <label htmlFor="username" ></label><br/>
          <input className='usernameLogin'  placeholder="username" type='text'  required id='username'></input>

          <label htmlFor="password" ></label><br/>
          <input className='passwordLogin' placeholder="password" type='password' required id='password'></input>
          <div className="formButtonThree">           
            <button type="submit" value="login" className="formButtonTwo">Start Graphing</button>
          </div>
        </form>
      </div>
      <div role='alert'>
        {error ? <p className='red'>{error}</p> : null}
      </div>
  </>
  )
};

LoginForm.defaultProps = {
  onSuccessfulLogin: () => {}
}

export default LoginForm;