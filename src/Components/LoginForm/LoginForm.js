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
  <div>

    <form className="loginForm" onSubmit={(e)=> handleSubmitJwtAuth(e)}> 
      <div className="name-section">
          <label htmlFor="userName" className="label-name">
            
            <input className='username' placeholder="username"  type='text' required id='username' >                
            </input>
          </label><br/>          
          < label htmlFor="password" className="label-name">
            
            <input className='password' placeholder="password" type='password' required id='password'>
            </input>
          </label><br/>          
      </div>
      
      <button type="submit" value="Sign Up" className="formButton">Start Graphing</button>
    
    </form>
  </div>
  )
};

LoginForm.defaultProps = {
  onSuccessfulLogin: () => {}
}

export default LoginForm;