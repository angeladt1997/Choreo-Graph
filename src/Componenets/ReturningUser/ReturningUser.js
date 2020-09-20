import React, {useState} from 'react';
import AuthApiService from '../../Services/auth-api-service';
import './ReturningUser.css';

const ReturningUser = (props) => {
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
        .cath(res => {
            setError(res.error);
        })
    }
    return (
    <div>
       <form className="loginForm" onSubmit={(e)=> handleSubmitJwtAuth(e)}>
       <label htmlFor="userName">Username: </label><br/>
          <input className='username' type='text' required id='username'></input>

          <label htmlFor="password">Password:</label><br/>
          <input className='password' type='password' required id='password'></input>

          <input type="submit" value="Log In" className="formButton"/>
        </form>
    </div>
    )
};

ReturningUser.defaultProps = {
    onSuccessfulLogin: () => {}
}

export default ReturningUser;